<!--
 * @Author: your name
 * @Date: 2021-06-07 10:53:18
 * @LastEditTime: 2021-09-06 14:49:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\vue-directive.md
-->

# vue directive

## 常用的指令

- v-if & v-show (v-else)
- v-for
- v-bind
- v-model
- v-on

## v-if vs v-show

> 相同点：控制 DOM 的显示与隐藏

> 不同点：
>
> > v-if

- 惰性加载，条件首次为真时显示；
- 切换渲染性能消耗大;
- 一般切换少时使用;

> > v-show

- 总是渲染，通过 css 属性 display 控制显示;
- 首次渲染性能消耗大;
- 需要多次切换时使用;

## v-cloak

界面在加载时会出现闪烁，在元素上添加 v-cloak 指令，可以让元素在编译完成后显示。可以隐藏大括号语法，直到实例准备好

```css
[v-cloak] {
  display: none;
}
```
