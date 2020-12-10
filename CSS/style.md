<!--
 * @Author: your name
 * @Date: 2020-03-04 14:47:11
 * @LastEditTime: 2020-12-10 11:28:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\CSS\style.md
 -->

# 样式

## 优先级

## position

sticky

## ellipsis

文字不换行，超出部分显示省略号

```css
.text-ellipsis{
  display：inline-block；
  overflow：hidden；
  text-overflow：ellipsis；
  white-space：no-wrap;
}
```

## flex

文字居中显示

```css
.father-box {
  display: flex;
  align-items: center;
}
```

## padding vs margin

padding 不能设置负值，margin 可以

## linear-gradient

渐变

```css
/* 
<type>: to [bottom=0,top=180,right=90,left=270],浏览器前缀规则不加 to
<color>, <color>: red, green, // 默认 red 到green，0-100%渐变
<color pos>: red 0%, green 100%, // red 到 green 渐变，50%为中间点
<color pos pos>: red 0% 10%, green 100%  // 0-10% 持续显示 red，10-100%渐变
<color pos>, <pos>, <color pos>: red 0%, 30%, green 100%  // 30%为渐变中间点
<color pos>,<color pos>,<color,pos>: red 0%, red 10%, green 10%, // red 与 green 之间有一条硬线，red 到 green， 10-100%渐变，
 */
 {
  background-color: #f07575; /* 不支持渐变的浏览器回退方案 */
  background-image: -webkit-linear-gradient(
    top
  ); /* 支持 Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  background-image: -moz-linear-gradient(top); /* 支持 Firefox (3.6 to 15) */
  background-image: -o-linear-gradient(top); /* 支持旧 Opera (11.1 to 12.0) */
  background-image: linear-gradient(to bottom); /* 标准语法; 需要最新版本 */
}
```

## border-image

[边框图片](https://segmentfault.com/a/1190000010969367)

<!--
url:  边框图片位置
slice:  图片裁减大小，number,percent(相对于边框图片)
width:  边框宽度，px
repeat: repeat:重复，round:平铺，stretch:拉伸(默认)
 -->

```css
border-image: url() <slice> / <width> / <repeat>;
```
