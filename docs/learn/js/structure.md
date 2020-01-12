---
title: 数据结构
slidebarDepth: 3
---

## 递归

程序不断的调用自身的过程就是递归， 递归相对普通的算法执行效率比较低，还容易造成栈溢出

斐波纳契数列

0、1、2、3、5、8、13、21、34 ...

范式：F(0)=1，F(1)=1, F(n)=F(n-1)+F(n-2)（n>2，n∈N*）

```js
function Fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return Fibonacci(n -1) + Fibonacci(n - 2);
}
```
