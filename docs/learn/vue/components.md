---
title: 组件精讲读书笔记
slidebarDepth: 3
---

## 组件的三个基础API

一个组件基本上是由`prop`、`event`、`slot`三部分组成

`porp` 属性

`prop` 定义了组件有哪些可以配置的属性，组件的核心功能是由它确定的，尽量采用对象形式写法代替数组形式的写法

`slot` 插槽

分发组件的内容

`event` 组件事件

遵循组件通信原则

## 组件之间相互通信

1. props

2. $emit v-on

3. event_bus

4. $parent / $children

5. $refs

6. vuex

7. provide / inject

## provide 及 inject

`provide/inject` 在 `vue 2.2` 版本之后使用，这对选项需要一起使用，允许一个祖先向其后代子孙中注入一个依赖，不管组件的层次有多深，在上下游建立的时间内都是有效的

`tips` : 该组选项主要是为高阶插件/组件库提供用例，不推荐直接用到代码中

`provide / inject` 如何模拟 `vuex`

在 `app.vue` 这个根组件中将其内部定义的方法和属性暴露出去，并 `inject` 到下游子组件

## 找到任意组件实例

1. 由一个组件，向上寻找最近的指定组件

```js
function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;

  while(parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;

    if (parent) {
      name = parent.$options.name;
    }
  }
  return parent;
}

```

2. 由一个组件，向上找到所有的指定组件

```js
function findComponentsUpward(context, componentName) {
  let parents = [];
  const parent = context.$parent;

  if (parent) {
    if (parent.$options.name == componentName) {
      parents.push(parent);
      return parents.concat(findComponentUpward(parent, componentName));
    }
  } else {
    return [];
  }
}
```

3. 由一个组件，向下找到最近的指定组件
```js
function findComponentDownward (context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;

      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}
```
4. 由一个组件，向下找到所有指定的组件
```js
function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}
```
5. 由一个组件，找到指定组件的兄弟组件

```js
function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}
```