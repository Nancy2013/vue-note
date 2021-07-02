<!--
 * @Author: your name
 * @Date: 2021-07-01 17:30:10
 * @LastEditTime: 2021-07-02 17:17:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\CSS\css3.md
-->

# CSS3

## 新特性

- 圆角
- 渐变
- 阴影
- border-image
- rgba
- transform
- translate
- box-sizing
- 媒体查询
- rem 属性

## transform 转换

- translate 转移
- scale 缩放
- skew 倾斜
- rotate 旋转

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
  animation: spin 2s linear infinite;
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

## CSS3 新增伪类

> p:only-child 选择父元素唯一的 p 元素
> p:nth-child(n) 选择父元素第 n 个 p 元素(2n+1:n 必须放在前面)
> p:first-of-type 选择父元素的首个 p 元素(last/only)
> :after
> :before
> :enabled
> :disabled 表单禁用状态
> :checked 单选框或多选框选中状态

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

##

```css

```
