---
title: 'js深入学习'
sidebarDepth: 3
---

## call & apply

`call`, `apply` 两者都能改变 `this` 的指向， 两者的区别在于 `call` 接受的 `arguments`, `apply` 接受的是 `array`

## 防抖与节流

在前端开发的过程中，我们经常会绑定一些持续触发的事件，如 `resize`, `scroll`, `mousemove` 等等， 但是我们并不希望在事件的持续触发的过程中频繁的去触发绑定方法，我们需要对这些事件进行节流或防抖

### 防抖



### 节流

## 深拷贝

对于引用数据类型，`=` 操作符是将原数据的指针赋值给 `=` 左侧的变量，对左侧的变量进行修改，其引用的原有变量也会发生对应的更改

如下所示：

![An image](./images/deep_copy.png)

```js
function deepCopy(obj, cache = []) {
  function find(list, f) {
    return list.filter(f)[0]
  }
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }
  const copy = Array.isArray(obj) ? [] : {}
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })
  return copy
}
```

## 函数柯里化

”函数柯里化”是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

```js
function add (x, y) {
  return x + y;
}

add(1, 2) // 3

function curryingAdd(x) {
  return y => x + y 
}

curryingAdd(1)(2) // 3
```

## 数组扁平化

`ES6` 中数据扁平化处理

1. flat 默认“拉平” 一层，如果想拉平`n`层数组，将`flat`中传递一个整数`n`,表示要拉平的层数，最大值为`Infinity`

```js
[1,[2,3], [[[3,4,5]]]].flat();
```

## Event loop

`event loop` 指的是事件循环机制，是浏览器或者 `nodeJS`的一种 `javascript` 解决单线程运行不会阻塞的一种处理机制；在程序中，主线程不断循环从"任务队列"中读取事件, 这种运行机制被称为Event Loop（事件循环）。

![An image](./images/1685f03d7f88792b.png)

知识扩展：

`javascript` 是一个单线程脚本程序，主要用于和用户互动，操作 `DOM` 变化，在 `HTML5` 中提出了 `WEB WORKER` 标准，允许脚本创建多个线程，但是子线程还是受控于主线程，这些创建出的线程不能操作 `DOM`，同一时间还是只有一个线程操作`DOM`的变化。

任务队列：

`JS` 中的任务分为两种，一种是同步任务，一种是异步任务，异步任务不进入主进程，而是进入任务队列 `Task queue` 中, 只有任务对列“通知”了主线程，某个异步事件可以被执行了，当前任务才会进入主线程执行

![An image](./images/1685f037d48da0de.png)

微任务 & 宏任务

在`Task queue` 中，异步任务又被分为“宏任务” 和“微任务”，“微任务”的执行要早于“宏任务”，只有在“微任务”执行完毕后，才会去进一步的执行“宏任务”

常见的微任务

`process.nextTick(Node)`, `promise`, `MutationObserver`, `async await (generator的语法糖，主要还是promise)`

常见的宏任务

`setTimeout`, `setInterval`, `script`, `I/O`, `UI Rending`

![An image](./images/1686078c7a2f63e5.gif)


案例

```js
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2 end') 
}

async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
.then(function() {
  console.log('promise1')
})
.then(function() {
  console.log('promise2')
})

console.log('script end')
```

`script start -> async2 end -> Promise -> script end` 同步任务执行完毕

`async1 end -> Promise1 -> Promise2` 微任务执行

`setTimeout` 宏任务执行

tips: `promise` 一经创建就会立马执行, `async await` 将异步事件转为同步事件执行

参考：[一次性弄懂Event loop](https://juejin.im/post/5c3d8956e51d4511dc72c200#heading-7)

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

## 队列

## 链表

## 图

## 树

### 数据结构中的基本定义

树（tree）是包含n（n>=0）个结点的有穷集， 由根结点和若干颗子树构成的。

度：指的是一个节点拥有子节点的个数。如二叉树的节点的最大度为2。

深度：数的层数，根节点为第一层，依次类推。

叶子节点：度为0的节点，即没有子节点的节点。

### 树的种类

无序树：树中任意节点的子结点之间没有顺序关系，这种树称为无序树,也称为自由树;

有序树：树中任意节点的子结点之间有顺序关系，这种树称为有序树；

二叉树：每个节点最多含有两个子树的树称为二叉树；

满二叉树： 除了叶结点外每一个结点都有左右子叶且叶结点都处在最底层的二叉树,

完全二叉树：只有最下面的两层结点度小于2，并且最下面一层的结点都集中在该层最左边的若干位置的二叉树

平衡二叉树：树的左右子树的高度差不超过1的数，空树也是平衡二叉树的一种

霍夫曼树：带权路径最短的二叉树称为哈夫曼树或最优二叉树；

### 遍历方法

先序遍历，中序遍历，后序遍历, 深度优先遍历，广度优先遍历

## 发布/订阅

```js
var broadcast = {
    // 参数说明：如果 isUniq 为 true，该注册事件将唯一存在；如果值为 false或者没有传值，每注册一个事件都将会被存储下来
    on: function (name, fn, isUniq) {
        this._on(name, fn, isUniq, false);
    },
    // 通过调用 broadcast.once 注册的事件，在触发一次之后就会被销毁
    once: function (name, fn, isUniq) {
        this._on(name, fn, isUniq, true)
    },
    _on: function (name, fn, isUniq, once) {
        var eventData
        eventData = broadcast.data
        var fnObj = {
            fn: fn,
            once: once
        }
        if (!isUniq && eventData.hasOwnProperty(name)) {
            eventData[name].push(fnObj)
        } else {
            eventData[name] = [fnObj]
        }
        return this
    },
    // 参数说明：name 表示事件名，data 表示传递给事件的参数
    fire: function (name, data, thisArg) {
        var fn, fnList, i, len
        thisArg = thisArg || null
        fnList = broadcast.data[name] || []
        if (fnList.length) {
            for (i = 0, len = fnList.length; i < len; i++) {
                fn = fnList[i].fn
                fn.apply(thisArg, [data, name])
                if (fnList[i].once) {
                    fnList.splice(i, 1)
                    i--
                    len--
                }
            }
        }
        return this
    },
    data: {}
}
```

## 闭包

### 什么是闭包

1. 一个函数内部可以访问函数外部的变量
2. 引用的数据不会被垃圾回收机制回收


## js 兼容不同浏览器环境执行

```js
! function (e, t) {
   // 检查上下文环境是否为Node                                                                            
   "object" == typeof exports && "object" == typeof module ?
     // 定义为普通Node模块
     module.exports = t() :
     // 检测上下文环境是否为AMD或CMD
     "function" == typeof define && define.amd ?
     // amd
     define([], t) :
     "object" == typeof exports ?
     // cmd
     exports.ajax = t() :
     // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
     e.ajax = t()
 }(this, function () {
   return function (e) {
     function t(r) {
       if (n[r]) return n[r].exports;
       var o = n[r] = {
         exports: {},
         id: r,
         loaded: !1
       };
       return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
     }
     var n = {};
     return t.m = e, t.c = n, t.p = "", t(0)
   }([])
 })
```