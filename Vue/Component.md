<!--
 * @Author: your name
 * @Date: 2020-02-25 10:53:46
 * @LastEditTime: 2021-02-19 17:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\组件.md
 -->

## 组件

### 父子组件通信

- 父组件通过 props 向子组件传递；
- 子组件通过\$emit 事件传递，父组件上监听事件时需要用'-'连接词，事件可以不添加参数，会自动传递；
- $root属性拿到的是Vue实例，$parent 属性返回的是 Vue 实例或 Component 组件；

### 高阶组件

- slot 分为默认插槽和具名插槽，v-slot:default、v-slot:header,独占默认插槽时可以省略 default；
- v-slot 需要在 template 标签上使用，只有出现独占默认插槽时，才可以将 v-slot 直接添加在其他标签上；
- slot 作用域插槽，可以将插槽数据传递到父组件使用,v-slot:default="data"，要在父组件中使用 data.name；
- slot 结构插槽，v-slot:default="{data}";
- slot 语法糖，#,eg:#default、#header、#footer;
- 动态参数名，v-slot:[dynamicAttribute]，真正属性名为 dynamicAttribute 的值；

## 组件缓存

使用 keep-alive 组件可以缓存不活跃的路由组件，而不是销毁它们，从而避免重新渲染。

- 使用后被缓存的组件会多出来两个生命钩子
  - activated：组件被激活时调用，调用顺序组件 mounted -> activated -> beforeRouterEnter 的 next 回调
  - deactivated：组件被停用时调用，此时组件没有 beforDestroy 及 destroyed 钩子

## 依赖注入

子组件共享父组件属性

provide：父组件提供
inject：子组件使用
