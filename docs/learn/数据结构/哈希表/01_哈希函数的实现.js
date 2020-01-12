// 设计哈希函数
// 1. 将字符串转为比较大的数字:hashCode
// 2. 将大的数字压缩到数组范围内
function hashFunc(str, size) {
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

// 测试hash函数

console.log(hashFunc('abc', 7));
console.log(hashFunc('cba', 7));
console.log(hashFunc('nba', 7));
console.log(hashFunc('abn', 7));