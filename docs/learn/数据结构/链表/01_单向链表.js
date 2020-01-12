function LinkedList() {

    // 节点类
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    // head属性
    this.head = null;
    // 链表的长度
    this.length = 0;

    // 插入节点
    LinkedList.prototype.append = function (element) {
        // 1.1 创建新节点
        let newNode = new Node(element);
        // 1.2 判断是否时第一个节点
        if (this.length == 0) {
            this.head = newNode;
        } else {
            // 找到最后一个节点
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length += 1;
    }

    // 向列表☞定的位置插入一个新的项
    LinkedList.prototype.insert = function (position, element) {
        // 1. 对position进行越界判断
        if (position < 0 || position > this.length) {
            return false;
        };

        // 2. 创建节点
        let newNode = new Node(element);

        // 3.插入数据
        // 3.1 插入0位置，head指向当前节点
        if (position == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // 3.2 大于0, 先找到要插入位置的节点
            let index = 0;
            let current = this.head;
            let previous = null;

            while (index++ < position) {
                current = current.next;
                previous = current;
            }
            newNode.next = current;
            previous.next = newNode;
        }

        this.length += 1;
        return true;
    }

    // 获取对应位置的元素
    LinkedList.prototype.get = function (position) {
        // 1. 对position进行越界判断
        if (position < 0 || position >= this.length) {
            return null
        }
        // 2. 正常的取值
        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        }
        return current.data;
    }

    // 获取数据在当前链表的位置
    LinkedList.prototype.indexOf = function (element) {
        let current = this.head; // 找到起始节点
        let index = 0;
        while (current) {
            if (current.data == element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    // update
    LinkedList.prototype.update = function (position, element) {
        if (position < 0 || position >= this.length) {
            return false;
        }

        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        }

        current.data = element;
        return true;
    }

    LinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) {
            return false
        }
        let current = this.head;

        // 1. 删除第0个
        if (position == 0) {
            this.head = this.head.next;
        } else {
            let index = 0;
            let previous = null;

            while (index++ < position) {
                previous = current; // 保存当前节点
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.data;
    }

    // 通过元素来删除
    LinkedList.prototype.remove = function (element) {
        let position = this.indexOf(element);
        return this.removeAt(position);
    }

    LinkedList.prototype.toString = function () {
        let resultString = '';
        let current = this.head;
        while (current) {
            resultString += current.data + ' ';
            current = current.next;
        }
        return resultString;
    }

    LinkedList.prototype.size = function() {
        return this.length;
    }

    LinkedList.prototype.isEmpty = function() {
        return this.length == 0;
    }
}

let linkedList = new LinkedList();

linkedList.append('abc');
linkedList.append('cba');
linkedList.append('nba');
linkedList.append('aaa');
linkedList.insert(0, 'wjs');
// console.log(linkedList.get(-1));
// console.log(linkedList.get(3));
// console.log(linkedList.get(5));
// console.log(linkedList.indexOf('aaa'));

// console.log(linkedList.update(4, 'lly'));
console.log(linkedList.toString());
console.log(linkedList.removeAt(0));
console.log(linkedList.toString());
console.log(linkedList.removeAt(3))
console.log(linkedList.toString());
console.log(linkedList.removeAt(4));
console.log(linkedList.toString());
console.log(linkedList.remove('abc'));
console.log(linkedList.toString());

console.log(linkedList.size());
console.log(linkedList.isEmpty());