<!--
 * @Author: your name
 * @Date: 2021-03-19 14:26:27
 * @LastEditTime: 2021-06-04 16:35:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit#
 * @FilePath: \vue-note\CSS\flexible.md
-->

# 概念

## 像素

- 分辨率
  - CSS 分辨率
  - 1080P 纵向分辨率
  - 1920K 横向分辨率
  - 2048K 2K 屏
  - 4096K 4K 屏
- 设备像素 （物理像素）750\*1334
- 设备独立像素 375\*667
- PPI 每英寸的像素
- DPI 设备像素/独立像素

## 视口

    - 布局视口
    - 视觉视口
    - 理想视口

# flexible

## 适配原理

## 刘海

### IOS

```js
<meta name="viewport" content="width=device-width, initial-scale=1, numimum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
```

```css
div {
    top: 20px // 兼容非刘海屏
    top: calc(constant(safe-area-inset-top) + 20px); // 标准
    top: calc(env(safe-area-inset-top) + 20px); // 兼容 ios11

}
```

![方案](./../img/刘海屏适配.png)

### 虚拟键盘
