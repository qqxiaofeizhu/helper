// 链地址法

function HashTable() {
    // 属性
    this.storage = [];
    this.count = 0; // 当前hash表存放的元素个数，计算装载因子（loadFactor > 0.75 需扩容 < 0.25 需要缩容）
    this.limit = 7; // hash表当前总长度，长度尽量是质数

    // 方法
    // 哈希函数
    HashTable.prototype.hashFunc = function (str, size) {
        // 定义hashCode
        let hashCode = 0;
        // 霍纳法则计算hashCode的值, 使用charCodeAt获取编码值
        for (let i = 0; i < str.length; i++) {
            // 获取unicode编码
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }

        // 取余操作
        index = hashCode % size;
        return index;
    }

    // 插入和修改
    HashTable.prototype.put = function (key, value) {
        // 1. 根据key获取索引值，将数据插入到对应的位置
        let index = this.hashFunc(key, this.limit);
        // 2. 根据索引值，取出bucket(桶)
        let bucket = this.storage[index];
        // 2.1 桶不存在，创建桶，放置在该索引的位置
        if (!bucket) {
            bucket = [];
            this.storage[index] = bucket;
        }
        // 3. 判断是新增还是修改原来的值，有值就修改，没有就执行后续的添加操作
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                tuple[1] = value;
                return;
            }
        }
        // 4. 新增操作
        bucket.push([key, value]);
        this.count += 1;

        // 5. 判断是否扩容
        if (this.count > this.limit * .75) {
            let newSize = this.getPrime(this.limit * 2)
            this.resize(newSize);
        }
    }

    // 获取方法
    HashTable.prototype.get = function (key) {
        // 1. 通过key找到index
        let index = this.hashFunc(key, this.limit);
        let bucket = this.storage[index];
        if (!bucket) {
            return null;
        }
        // 2.线性查找key
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                return tuple[1]
            }
        }
        return null;
    }

    // 删除方法
    HashTable.prototype.remove = function (key) {
        // 1.获取index
        let index = this.hashFunc(key, this.limit);
        // 查找桶，没有表示没有数据
        let bucket = this.storage[index];
        if (!bucket) {
            return null;
        }
        // 线性查找数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                bucket.splice(i, 1);
                this.count--;
                // 缩小容量
                if (this.limit > 7 && this.count < this.limit * .25) {
                    let newSize = this.getPrime(Math.floor(this.limit / 2))
                    this.resize(newSize);
                }
                return tuple[1];
            };
        }
        return null;
    }

    // 哈希表扩容
    HashTable.prototype.resize = function (newLimit) {
        // 1. 保存旧的数据内容
        let oldStorage = this.storage;
        // 2. 重置所有的属性
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;
        // 3. 遍历oldStorage中的所有的桶
        for (let i = 0; i < oldStorage.length; i++) {
            // 取出桶
            let bucket = oldStorage[i];
            // 桶不存在,执行下次循环
            if (!bucket) {
                continue;
            }
            // bucket中存在数据，取出数据，从新插入
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j];
                this.push(tuple[0], tuple[1])
            }
        }
    }

    // 判断是不是质数
    HashTable.prototype.isPrime = function () {
        let temp = parseInt(Math.sqrt(num));
        for (let i = 2; i <= temp; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    // 寻找扩容的质数
    HashTable.prototype.getPrime = function (num) {
        while (this.isPrime(num)) {
            num++;
        }
        return num;
    }

    // 其他方法

    // 判断hash表是否为空
    HashTable.prototype.isEmpty = function () {
        return this.count === 0;
    }

    // 获取hash表中的个数
    HashTable.prototype.size = function () {
        return this.count;
    }

}

let ht = new HashTable();

ht.put('abc', '123')
ht.put('cba', '123')
ht.put('nba', '123')
ht.put('mba', '123')

console.log(ht.get('abc'));
console.log(ht.get('abcd'));

// 修改
ht.put('abc', '111111111111');
console.log(ht.get('abc'));

ht.remove('abc');

console.log(ht.get('abc'));