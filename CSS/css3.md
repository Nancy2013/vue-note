<!--
 * @Author: your name
 * @Date: 2021-07-01 17:30:10
 * @LastEditTime: 2022-05-12 15:48:41
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\CSS\css3.md
-->

# CSS3

## 新特性

- 圆角
- 渐变
- 阴影
- 动画
- border-image
- rgba
- transform
- box-sizing
- 媒体查询
- rem 属性

## transform 转换

- translate 转移
- scale 缩放
- skew 倾斜
  - skew(a,b),元素 x 方向逆时针倾斜角度 a,元素 y 方向顺时针倾斜角度 b
  - 必须以 deg 表示单位，负数表示相反方向
- rotate 旋转
- matrix 矩阵

备注：transform-origin 默认为 center，可以设置变形的基点 transform-origin：top left;
声明 transform:will-change | translate3d(0,0,0) | translateZ(0),可以开启 GPU 硬件加速模式

```css
.box {
  /* 
  可以是1-3个值,其中value相对于左上角
  offX: left center right  | value
  offY: top  center bottom | value
  offZ: value
  浏览器兼容前缀
  -webkit：Chrome & Safari
  -moz: 火狐
  -o: 欧朋
  -ms: IE
  无: w3c标准
   */
  transform-origin: center;
  transform-origin: offX offY offZ;
}
```

## transition 过渡

```css
.transition {
  /* 属性 | 持续时间 | 过渡函数 | 延迟时间*/
  transition: margin-right 4s ease-in-out 1s;
}
```

## 动画

```css
/* 
名称
执行时间
速度曲线
延迟时间
重复次数
 */
.box {
  animation: spin 2s linear 0 infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} ;
```

## transition vs animation

> transform
>
> > 转换，是静态的，表示元素的 width,position 等
> > 加上时间属性后变成动态过程，构成动画

> transition
>
> > 过渡，定义元素在不同状态间切换的过渡效果，
> > 只有开始和结束两个状态
> > 需要事件触发，如:hover 到:active 变化,或者通过 JavaScript 事件实现的状态切换

> animation
>
> > 动画
> > 可以设置多个关键帧
> > 不需要事件触发，可以自动执行

## CSS3 新增伪类

- .father p:only-child 选择父元素唯一的 p 元素
- .father p:nth-child(n) 选择父元素第 n 个 p 元素(2n+1:n 必须放在前面)
- .father p:first-of-type 选择父元素的首个 p 元素(last/only)
- :enabled
- :disabled 表单禁用状态
- :checked 单选框或多选框选中状态

## 页面灰度

```css
body {
  filter: grayscale(60%);
}
```

## 画一条 0.5px 的线

```css
/* 方案一 */
.border {
  border-width:1px;
  transform: scale(0.5);
}
/* 方案二 */
.border {
  border-image: url();
}
/* 方案三 */
<meta name="viewport" content="width=device-width,initial-scale=0.5,maximum-scale=1.0,minimum=1.0,user-scalable=no">
```

## CSS 图形

```css
/* 三角形 */
.triangle {
  width: 0;
  height: 0;
  border-top: 10px solid #f00;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
/* 椭圆形*/
.ellipse {
  width: 100px;
  height: 50px;
  background: #f00;
  border-radius: 50%;
}
/* 梯形 */
.ladder {
  width: 50px;
  height: 0px;
  border-top: 10px solid #f00;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
```

## calc 使用

```css
.div {
  /* 
  + & - 符号两边必须有空格
  *  乘数中至少有一个是number
  / 除号后面必须是number,不能是0,100%为父元素宽度
   */
  width: calc(100% - 10px);
  width: calc(10% + 10em);
  width: calc(10% * 10);
  width: calc(100% / 6);
}
```
