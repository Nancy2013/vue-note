<!--
 * @Author: your name
 * @Date: 2021-03-19 14:26:27
 * @LastEditTime: 2021-07-08 15:16:34
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

## 刘海

### IOS

```js
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, numimum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
/>
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

## flexible

## 适配原理

### 移动端适配

- 目前的解决方案
- flexible、rem、vw、px
- 传统适配方案适合于文本类 APP，在大屏幕上可以看到更多内容
- rem 与 vw 适合展示界面组件多样化，依赖于元素间的位置，大屏幕上相当于矢量图放大
- rem 本质上使用 vw 方案，首先根据屏幕宽度定义 html font-size 大小，根据字体大小定义各个元素宽度

#### rem

#### vw

- postcss-px-to-viewport
- viewport-units-buggyfill
- postcss-viewport-units
- css img hack
  ![vw-layout](./../img/vw-layout.png)
