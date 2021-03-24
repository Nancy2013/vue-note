<!--
 * @Author: your name
 * @Date: 2021-03-19 14:26:27
 * @LastEditTime: 2021-03-23 14:42:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit#
 * @FilePath: \vue-note\CSS\flexible.md
-->

# flexible

## 刘海

### IOS

```js
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
```

```css
div {
    top: 20px // 兼容非刘海屏
    top: calc(constant(safe-area-inset-top) + 20px); // 标准
    top: calc(env(safe-area-inset-top) + 20px); // 兼容 ios11

}
```

### 虚拟键盘
