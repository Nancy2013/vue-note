<!--
 * @Author: your name
 * @Date: 2020-02-25 10:53:46
 * @LastEditTime: 2022-06-09 14:15:56
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\组件.md
 -->

# 组件

## 组件通信

### 父子组件

- props & $emit
- v-model
- inject & provide
- $parent & $children
- $root

### 兄弟组件

- $attr
- $ref
- $listeners

### 通用

- bus 组件
- vuex

- 父组件通过 props 向子组件传递；
- 子组件通过\$emit 事件传递，父组件上监听事件时需要用'-'连接词，事件可以不添加参数，会自动传递；
- $root属性拿到的是Vue实例，$parent 属性返回的是 Vue 实例或 Component 组件；

## 高阶组件

- slot 分为默认插槽和具名插槽，v-slot:default、v-slot:header,独占默认插槽时可以省略 default；
- v-slot 需要在 template 标签上使用，只有出现独占默认插槽时，才可以将 v-slot 直接添加在其他标签上；
- slot 作用域插槽，可以将插槽数据传递到父组件使用,v-slot:default="data"，要在父组件中使用 data.name；
- slot 解构插槽，v-slot:default="{name}";
- slot 语法糖，#,eg:#default、#header、#footer;
- 动态参数名，v-slot:[dynamicAttribute]，真正属性名为 dynamicAttribute 的值；

## 插槽和作用域插槽

插槽的作用域是父级作用域，作用域插槽的作用域是当前子组件；

```html
<!-- todo 普通插槽 -->
<div>
  <slot></slot>
</div>

<Todo> 普通插槽 </Todo>
```

```html
<!-- todo 作用域插槽 -->
<div>
  <slot v-for="item in items" v-bind:user="item">{{item}}</slot>
</div>

<Todo>
  <template v-slot:default="slotProps"> {{slotProps.user}} </template>
</Todo>
```

## 组件缓存

使用 keep-alive 组件可以缓存不活跃的路由组件，缓存组件的 VNode,保留组件状态而不是销毁它们，命中缓存时直接恢复从而避免重新渲染。
使用 LRU(last recently used)算法根据数据访问的历史记录来淘汰数据，最近访问过的数据，将来被访问到的概率也高(墨菲定律)

- 使用后被缓存的组件会多出来两个生命钩子
  - activated：组件被激活时调用，调用顺序组件 mounted -> activated -> beforeRouterEnter 的 next 回调
  - deactivated：组件被停用时调用，此时组件没有 beforDestroy 及 destroyed 钩子
  - 常用的两个属性 include/exclude

## 依赖注入

子组件共享父组件属性

provide：父组件提供
inject：子组件使用

## 混入

- Mixin 混入提供了一种非常灵活的方式，来分发 Vue 组件的可复用功能，一个混入对象可以包含任意组件选项。
- 当组件使用混入对象时，所有混入对象的选项会混合到这个组件本身的选项。
- 当混入和组件含有同名选项时，数据对象类型会递归合并，发生冲突时以组件数据优先。
- 同名钩子函数会合并为一个数组，都会调佣，并且混入对象的钩子在组件自身钩子之前执行。
- 值为对象的选项，会被合并为一个对象，两个对象的键名冲突时，取组件的键值对。
