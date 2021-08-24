<!--
 * @Author: your name
 * @Date: 2021-06-23 16:28:33
 * @LastEditTime: 2021-08-23 16:56:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Tips\issues.md
-->

# issues

## 滚动穿透

> Modal 弹窗弹出后，给 body 添加 fixed 属性，并设置 top
> Modal 弹窗关闭后，恢复 body 的 position 属性，重置 top

```js
function fixedBody() {
  const { body, documentElement } = document;
  const scrollTop = body.scrollTop || documentElement.scrollTop;
  // body fixed定位后，可以防止被拉到顶部
  body.style.position = 'fixed';
  body.style.top = `-${scrollTop}px`;
}

function looseBody() {
  const { body, documentElement } = document;
  const { top } = body.style;
  body.scrollTop = -parseInt(top);
  documentElement.scrollTop = -parseInt(top);
  body.style.position = 'static';
  body.style.top = '';
}
```

## Vue 优化

- 无法检测数组的动态变化
- 使用多个 mixin 时，容易混乱
- 组件内部，不支持手动禁止重新渲染的生命周期，例如 react 中的 shouldComponentUpdate

## 网页图片加载优化

分析图片加载慢的原因：图片数量多、图片体积大

图片数量多的解决方法：

- 如果存在同域请求个数限制，则采用域名切分
- 图片懒加载，先使用占位图，出现在视图窗口中的图片才加载

图片体积大的解决方法：

- 根据屏幕大小，显示不同大小的图片
- 图片格式进行压缩，使用无损压缩或者 webp 格式
