<!--
 * @Author: your name
 * @Date: 2020-06-28 09:39:46
 * @LastEditTime: 2021-09-09 15:15:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\ES6\Array.md
-->

# Array

## array

```js
Array(3); // [empty,empty,empty]
Array(3, 4); // [3,4]
```

## fill

Array.fill(val,start,end)

使用 val 填充数组，从 start 开始，end 结束，不包括 end 位置；

```javascript
// 填充数组
[0, 1, 2, 3].fill(5, 1, 4);
```

输出结果：`[1,5,5,5]`

## slice

Array.slice(start,end);

返回数组的浅拷贝，包括 start,不包括 end

```javascript
// 复制数组
[0, 1, 2, 3].slice(0);
```

输出结果：`[0, 1, 2, 3]`

```javascript
// 截取数组
[0, 1, 2, 3].slice(0, 2);
```

输出结果：`[0, 1]`

## find

<!-- 返回数组 -->

Arr.find(e=>e.value>10);

## includes

<!-- 返回true|false，优化了indexOf返回的-1 -->

Arr.includes(val);

## copyWithin

<!-- 复制数组的一部分到特定位置，不改变数组长度 -->
<!--
target: 需要复制到的位置
start: 复制开始的位置
end: 复制结束的位置,不包括end
 -->

Arr.copyWithin(target,start,end)

```javascript
const arr1 = [0, 1, 2, 3, 4];
const arr2 = arr1.copyWithin(0, 2, 4);
```

输出结果：[2,3,2,3,4]

## flat

<!-- 扁平化与数组空项,deep可选默认为1 -->

Arr.flat(deep)

```js
const arr = [1, 2, [3, 4]];
arr.flat();
// [1,2,3,4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1,2,3,4,[5,6]]

arr2.flat(2);
// [1,2,3,4,5,6]
```

## 数组扁平化

```js
let ary = [1, [2, [3, [4, 5]]], 6]; // -> [1, 2, 3, 4, 5, 6]

// 方法一 stringfy
let str = ary.toString();
ary = ary.split(',').map((item) => +item);

// 方法二 扩展运算符+contact
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}

//  方法三 flat
ary.flat(2);
```

## 数组中的高阶函数

参数为函数，或者返回值为函数

- map
- reduce

```js
// 函数参数依次为：累积值，当前值，当前下标，数组
// 第二个参数是初始值，不设置时默认为ary[0],从第二个元素累积
ary.reduce(function (pre, cur, index, ary) {}, 0);
```

- filter
- sort

```js
// sort 不传函数参数时，默认把数组元素转换为字符串，根据Unicode升序排序
// 两个值比较，返回1代表前后调换位置，返回-1代表不调换
ary.sort((a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
```

## 判断是否为数组

```js
let obj = [1, 2, 3];
obj instanceof Array;
obj.constructor === Array;
Object.prototype.toString.call(obj) = '[Object Array]';
Array.isArray(obj);
```

## Set vs WeakSet Map vs WeakMap

> Set vs WeakSet
>
> > set 类似于数组，元素可以为任意值，可以去重
> > WeakSet 数组元素必须为对象，可以垃圾回收不会导致内存泄漏

> Map vs WeakMap
>
> > 类似于对象的键值对，键名可以为任意值
> > WeakMap,键名必须为对象(null 除外)，键值可以是任意值，可以垃圾回收
