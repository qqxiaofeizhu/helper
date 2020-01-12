---
title: '基础'
sidebarDepth: 3
---

## vue 

1. vue的生命周期都有哪些，都做了什么？

2. v-if 和 v-show 的区别

3. computed 和 watch 和 methods 的区别

4. vue 组件间如何通信

5. keep-alive 有什么好处

6. vue 中常见的修饰符都有哪些

7. vue 如何实现双向绑定

8. vue 如何实现

1. null 和 object 如何区分

使用 Object.prototype.toString.call(null) // ["object null"];

使用`instanceof` 可以区分 null 是 false obejct 是 true

2. localstorage cookie sessionstorage 的区别 ***

lcoalstorage 是 HTML5 提供的本地缓存机制，

cookie 

sessionstorage

-----------------------------------

3. 去掉input框的默认样式 **

border: none;
background: none;
outline: none

内边距

4. css 实现图片自适应宽高 **

5. 布局用的最多的是 flex； 百分比； 介绍flex**

flex: 弹性盒布局，

6. BFC: 块级格话作用于上下文 **

7. 前端鉴权是怎么实现的

8. vue 里面 vdom 的作用是啥，解决了什么？？

9. template 如何解析渲染

render 函数 虚拟dom 映射成真实的dom

10. vue 的双向绑定

Object.defineprototype  3.0 => proxy

11.  函数防抖 和 节流

防抖： function dubbce (fn, wait) {
    let timeout = null;

    return function() {
        let context = this;
        let args = argumets; 
        
        if (timeout)  clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn.apply(context, args);
        },wait)
    }
}

12. 讲讲 ES6 语法


13. 从输入一个网址浏览器的渲染问题

进行DNS解析，找到服务器对应的IP地址 
进行TCP3次握手
发送http请求，加载资源
解析HTML，构建DOM树
解析CSS，生成CSS规则树
合并DOM树和CSS规则树，生成render树
布局render树 (layout 重排)
绘制render数、树，即绘制页面像素信息 （重绘）
GPU将各层合成，结果呈现在浏览器窗口中。
TCP四次挥手


14. vuelazyload 原理

15. express 的设计思想

16. 线上的日志怎么处理的


17. 讲一下事件循环

js 不断从任务队列里面读取事件的过程就叫做事件循环

js 是一个单线程， 其中任务分为同步任务和异步任务，所有的异步任务比如浏览器事件，promise， settimeout 他们被放到一个任务队列里面， 当主线程也就是同步任务执行完毕的时候，会去执行异步队列中的任务，异步任务又分为宏任务和微任务，宏任务的执行要晚于微任务，微任务包含promise，nexttick, 宏任务包含settimeout setInterval 浏览器事件

18. express 中间件系统是如何设计的

19. vue 中 vdom 是什么，如何实现的

20. 手写vue的 mixin 方法

21. 手写promise.all 的源码

22. css 选择器的优先级

!important > id > css > 标签 > 伪元素 (伪类和伪元素的权重及用法)
 
1000         100    10    1    0.1

23. call, applay, 和 bind的区别

24. 缓存机制




