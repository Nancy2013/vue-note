<!--
 * @Author: your name
 * @Date: 2021-06-21 09:44:20
 * @LastEditTime: 2021-06-30 09:40:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Tips\实战\新奥.md
-->

# 实战

## XinAo(新奥新智)

## js(弱,网上整理题库)

- 判断对象为空

  ```js
  <!-- 方法一 -->
  Object.keys(obj).length === 0 ? '空' : '不为空';

  <!-- 方法二 -->
  for (let i in obj) {
    if(obj.hasOwnProperty(key)) {
        return true;
    }
  }
  return false;
  ```

- 判断对象相等

```js
function checkObject(obj) {
  return typeof obj === 'object' && obj !== null;
}
function deepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const val1 = obj1[i];
    const val2 = obj2[i];

    const isObj1 = checkObject(val1);
    const isObj2 = checkObject(val2);
    if (isObj1 && isObj2) {
      deepEqual(val1, val2);
    } else {
      return val1 === val2;
    }
  }

  return true;
}
```

- promise.then 与 setTimeout 的执行顺序
- eventLoop

## css(网上整理题库)

- flex 垂直居中

  ```css
  .flex {
    align-items: center;
    <!-- 水平方向 -->
    justify-content: space-between|space-around|center;
    <!-- 竖直方向 -->
    align-content: space-between|space-around|center;
  }
  ```

- 字体适配方案

## 网络(最基础)

- webSocket
- http 错误码

## 框架(引导,深入)

- 双向绑定
- 响应式原理
- watcher 的 deep 属性
- vuex
- 动态路由

## 笔试

- 遇到的问题，以及解决过程
- 查找数组重复最多次的数值
