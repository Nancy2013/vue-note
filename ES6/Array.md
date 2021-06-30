<!--
 * @Author: your name
 * @Date: 2020-06-28 09:39:46
 * @LastEditTime: 2021-06-30 10:20:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\ES6\Array.md
-->

# Array

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

## 判断是否为数组

```js
let obj=[1,2,3];
obj instanceof Array
obj.constructor===Array;
Object.prototype.toString.call(obj)='[Object Array]'
Array.isArray(obj);
```
