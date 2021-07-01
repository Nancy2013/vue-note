<!--
 * @Author: your name
 * @Date: 2021-07-01 17:30:10
 * @LastEditTime: 2021-07-01 17:58:33
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
