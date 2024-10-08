<!--
 * @Author: your name
 * @Date: 2021-06-07 10:53:18
 * @LastEditTime: 2022-06-24 10:58:28
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

## 自定义组件的 model

```js
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
});

// 使用，当调佣change更新checked值时，lovingVue会同步更新
<base-checkbox v-model='lovingVue'></base-checkbox>;
```

## v-cloak

界面在加载时会出现闪烁，在元素上添加 v-cloak 指令，可以让元素在编译完成后显示。可以隐藏大括号语法，直到实例准备好

```css
[v-cloak] {
  display: none;
}
```

## 修饰符

> 表单修饰符

- lazy input 输入时不实时更新，光标离开后更新，在 change 事件后同步
- trim 自动过滤 input 首尾空白字符，中间空格不清理
- number input 内输入的内容转为数字(数字开头的可以转，字母开头的不可以转)

> 事件修饰符

- stop 阻止事件冒泡，内层 div 事件只在内部处理
- prevent 阻止标签本身的行为，如 a 标签链接跳转，form 标签提交
- once 只执行一次
- capture 改变事件默认冒泡行为，事件机制从包含元素的顶层执行，内部 div 触发事件先在外部处理
- self 只执行自身元素绑定的事件，不响应内部的冒泡事件，冒泡事件可以继续向外触发
- passive 滚动行为立即触发，而不是等待 onScroll 完成，提升移动端性能
- native 将 vue 组件转换成普通 html 标签，监听组件根标签上的方法，普通 html 标签没有作用
- sync 实现子组件与父组件之间双向绑定(子组件可以更改父组件数据，没有明显的数据来源不推荐，建议使用$emit 方式更新)

> > v-on:click.prevent.self VS v-on:click.self.prevent
> > 串联修饰符，执行顺序从左往右，前者禁止所有点击事件，可执行冒泡的事件；后者只禁止自身点击事件

> > 按键修饰符(键盘)

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
- exact(控制由精确的系统修饰符组合触发，不限制其他常规修饰符)

```html
<!-- 可以按ctrl+其他键，不能按其他系统修饰符键 -->
<button type="text" @click.ctrl.exact="shout(4)">ok</button>
<!-- 可以按enter+其他键，不能按系统修饰符键 -->
<input type="text" @keydown.enter.exact="shout('我被触发了')" />
```

> 鼠标修饰符(点击)

- right
- left
- middle

> > 系统修饰键 VS 常规修饰键
> > 监听 keyup 时，系统修饰键不能单独使用，常规修饰键可以；系统修饰键按住条件下，释放其他按键才能有效。v-on:keyup.ctrl，释放 ctrl 键时无效，可以把系统修改为普通键 v-on:keyup.17，为有效
