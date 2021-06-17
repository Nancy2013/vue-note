<!--
 * @Author: your name
 * @Date: 2021-06-11 10:52:55
 * @LastEditTime: 2021-06-17 10:57:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\ES6\base.md
-->

# 基础点

数据类型、运算、对象、Function、继承、闭包、作用域、原型链、事件、RegExp、JSON、Ajax、DOM、BOM、内存泄漏、跨域、异步装载、模板引擎、前端 MVC、路由、模块化、Canvas、ECMAScript

## ![JavaScript 原型](./../img/proto.png)

函数 vs 构造函数

普通函数被用作通过 new 构造实例才叫构造函数

```js
const Parent=functon(){};
const p=new Parent();
```

每个对象都存在 _proto_ 和 constructor 属性，_proto_ 指向对象原型；
函数是特殊对象，还具有 prototype 属性，当函数对象作为构造函数创建实例时，prototype 会被赋值给 _proto_

instance._proto_=instance.constructor.prototype

当访问对象的属性不存在时，会根据 _proto_ 查找 对象原型 prototype 是否存在，如果还不存在会继续查找 prototype 的 prototype 是否存在，直到找到或为 undefined，就是所说的原型链

## 导致内容泄露

- 使用闭包
- 两个对象互相引用
- 没有使用 var 定义全局变量
- setTimeout 方法的第一个参数是字符串,而不是参数

垃圾回收机制：垃圾回收器会定期扫描对象，并计算被引用的其他对象个数，当被引用次数为 0，会回收该对象内存

## ![this](./../img/this.png)

- new 创建对象时,绑定到新创建的对象

```js
function fun() {
  console.log(this);
}
var fun1 = new fun();
```

- 对象调用时,绑定到调用的对象

```js
function fun() {
  console.log(this);
}
var obj.fun=fun;
obj.fun();
```

- bind,call,apply,严格模式下,绑定到第一个参数;非严格模式下,null 或 undefined 指向全局对象

```js
const obj = {};
function fun() {
  console.log(this);
}
var funObj = fun.bind(obj);
funObj();
```

- 普通函数调用,严格模式指向 undefined,非严格模式指向 window

```js
function fun() {
  console.log(this);
}
fun();
```

- 箭头函数本身没有 this,继承自外层最近的父函数 this,前面几种都是动态绑定，箭头函数是静态的即声明时绑定

```js
const obj = {
  name: 'test',
  fun() {
    return () => {
      console.log(this);
    };
  },
};
```

## var vs let vs const

相同点：作用都是声明变量
不同点：

- var 存在变量提升,可以在声明之前调用,let、const 不可以
- var 全局作用域下声明的变量挂载在 window 下,let、const 不会
- let、const 声明的变量存在作用域,const 声明变量后不能重新赋值

引申：提升指把声明的函数及变量提升到作用域顶部,函数会提升整个函数,变量只会提升声明,相同变量名时函数会覆盖变量
