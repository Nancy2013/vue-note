<!--
 * @Author: your name
 * @Date: 2021-06-23 16:28:33
 * @LastEditTime: 2021-06-23 16:46:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Tips\issues.md
-->

# 滚动穿透

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
