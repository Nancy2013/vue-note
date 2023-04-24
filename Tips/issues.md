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

## Echarts

需求：通过 Echarts 折线图显示温度，点击 item 圆点，弹出 tooltip 提示框。提示框内有点击操作，点击后底部显示 popup。

难点：1、点击 item 圆点弹出 tooltip 提示框，当提示框下面覆盖其他 item 圆点时，点击提示框，会出现穿透点击；
PC 端没有复现，只会在移动端出现，需要配置 Echart 的属性 enterable:true

难点：2、点击 tooltip 后，PC 端圆点的高亮状态及 tooltip 会同步隐藏，而移动端圆点高亮状态和 tooltip 未隐藏，而点击折线上的遮罩图层 tooltip 隐藏
问题：移动端没有 hover 事件，是通过点击触发的，再次点击才会隐藏。点击遮罩图层触发了 tooltip 的 mouseleave
解决：点击 tooltip 之后，手动派发圆点取消高亮和 tooltip 事件，而官方的 tooltip 隐藏的 dispatch 事件不起作用，使用的 hack 解决方法是，通过 Echart 的 DOM 找到 node 节点，修改 style display 为 none
