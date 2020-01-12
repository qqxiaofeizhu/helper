function isPrime(num) {
    if (num < 2) {
        return false;
    }
    // 不能被2-num-1之间的整除
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

// 一个数进行因数分解，那么分解的两个数字一定是小于sqrt(n), 一个大于等于sqrt(n)

function isPrime1(num) {
    if (num < 2) {
        return false;
    }
    // 获取number的平方根
    let temp = parseInt(Math.sqrt(num));
    for (let i = 2; i <= temp; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
