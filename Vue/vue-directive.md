<!--
 * @Author: your name
 * @Date: 2021-06-07 10:53:18
 * @LastEditTime: 2022-05-17 18:05:50
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
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

## 修饰符

> 事件修饰符

- stop 阻止事件冒泡，内层 div 事件只在内部处理
- prevent 阻止标签本身的行为，如 a 标签链接跳转，form 标签提交
- once 只执行一次
- capture 改变事件默认冒泡行为，内部 div 触发事件先在外部处理
- self 只执行 div 自身触发的事件，不响应内部的冒泡事件，冒泡事件可以继续向外触发
- passive 滚动立即执行，而不是等待 onScroll 执行完成，提升移动端性能

> 按键修饰符

- enter
- tab
- esc
- delete
- up
- bottom
- left
- right

> 系统修饰符

- alt
- shift
- ctrl
- meta
- exact(精确修饰符才触发)

> 鼠标修饰符

- right
- left
- middle
