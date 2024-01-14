# typeof

在上下文中引用变量或属性的类型，相当于类型查询的功能

## 示例

```js
// 应用变量
const p = { x: 1, y: 2 };
function formatPoint(point: { x: number, y: number }) {}
formatPoint(p);
// 也可以使用typeof引用p的类型，直接定义为：
function formatPoint(point: typeof p) {}
```

```js
// 引用属性
const p = { x: 1, y: 2 };
let num: typeof p.x;
```

## 使用

只能用来引用变量或属性的类型，不能引用函数的类型
