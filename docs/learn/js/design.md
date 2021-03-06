---
title: 设计模式
slidebarDepth: 3
---

## 设计原则（SOLID）

单一职责模式（S）

一个程序只做一件事

如果程序过于复杂就拆开，每个部分保持独立

开放封闭原则 （O）

对扩展开发，对修改关闭

增加需求时，扩展新代码，而非修改已有代码

里式替换原则 （L）

子类能覆盖父类

父类能出现的地方子类就可以出现

接口隔离原则 （I）

保持接口的单一独立，避免出现“胖接口”

依赖倒置原则 （D）

面向接口编程，依赖于抽象而不依赖于个体

使用方只关注接口而不关注具体类的实现

## 工厂模式

将new操作单独封装

遇到new时，就要考虑是否该使用工厂模式了

## 单例模式

系统中被唯一使用

一个类中只有一个实例

vue.use(); 购物车;

## 适配器模式

旧接口格式和使用者不兼容

中间加一个适配转换接口

## 装饰器模式

为对象添加新功能

不改变其原有的结构和功能

## 模块模式

## 代理模式

使用者无权访问目标对象

中间加代理，通过代理做授权和控制

## 外观模式

为子系统中的一组接口提供了一个高层接口

使用者使用这个高层接口

## 观察者模式

发布&订阅

一对多(N)

## 迭代器模式

顺序访问一个集合

使用者无需知道集合的内部结构(封装)

## 状态模式

一个对象有状态变化

每次状态变化都会触发一个逻辑

不能总是用if...else来控制

[常用设计模式讲解](https://juejin.im/post/5c1d1f04e51d4544d544b600)