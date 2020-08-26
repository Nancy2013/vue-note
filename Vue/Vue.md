<!--
 * @Author: your name
 * @Date: 2020-02-27 09:19:45
 * @LastEditTime: 2020-08-26 16:18:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue.md
 -->

## Vue

### 版本介绍

- runtime-only 与 runtime-compile 版本的区别

  - runtime-only 是运行时版本，compiler 有编译功能；
  - runtime-compiler 版本中的 vue 实例：

  ```javascript
  new Vue({
    el: '#app',
    components: {
      App,
    },
    template: '<App/>',
  });
  ```

runtime-only 版本中 vue 实例：

```javascript
new Vue({
  el: '#app',
  render: (h) => h(App),
});
```

可以发现 runtime-only 中只支持 render 函数，而 compiler 支持 template 标签；

- 在 webpack 中默认引用的为 runtime-only ,使用 vue-loader 可以把.vue 文件编译为 JavaScript 文件，同时需要 vue-template-compiler 将.vue 中的 template 标签 编译为 render 函数。也可以通过在 webpack 中配置 vue\$加载 vue.esm.js 完整版本

### Vue 渲染过程

template --> ast(抽象语法树) --> render --> VDom --> 真实 Dom --> 页面
![vue-render](./../img/vue-render.png)

### 响应式原理

![响应式](./../img/response.png)

- 将对象作为 Vue 实例的 data 对象的 property
- Object.defineProperty 遍历 data 属性，生成对应的 getter/setter 方法
- 每个组件对应一个 watcher,渲染时会生成每个 property 的记录依赖
- 当 property 进行 getter/setter 操作时，会进行通知变更，通知组件重新渲染

### 生命周期

- beforeCreate
- Created，进行数据请求
- beforeMount
- Mounted，进行 DOM 操作
- beforeUpdate
- Updated
- beforeDestroy
- Destroyed，不能访问 this

### Vue 实例

- el 与 template 属性的区别
  - el 与 template 都可以将 Vue 实例挂载到 Dom;
  - 使用 template 会把 el 挂载的 id 树结构直接替换掉；

### Vue 原型链
