<!--
 * @Author: your name
 * @Date: 2020-02-27 09:19:45
 * @LastEditTime: 2022-06-09 14:04:32
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \Vue-note\Vue.md
 -->

# Vue

## Vue 的特点

- 简洁
- 数据驱动:computed 和 watch
- 代码量小
- 组件
- 模板

## Vue 全家桶

> Vue
> Vue-router
> Vuex
> and design Vue | element UI |vant
> axiso

## 版本介绍

- runtime-only 与 runtime-compile 版本的区别

  - runtime-only 是运行时版本，compiler 有编译功能；
  - runtime-compiler 版本中的 Vue 实例：

  runtime-only 版本中 Vue 实例：

```javascript
new Vue({
  el: '#app',
  render: (h) => h(App),
});
```

```javascript
new Vue({
  el: '#app',
  components: {
    App,
  },
  template: '<App/>',
});
```

可以发现 runtime-only 中只支持 render 函数，而 compiler 支持 template 标签；

- 在 webpack 中默认引用的为 runtime-only ,使用 Vue-loader 可以把.Vue 文件编译为 JavaScript 文件，同时需要 Vue-template-compiler 将.Vue 中的 template 标签 编译为 render 函数。也可以通过在 webpack 中配置 Vue\$加载 Vue.esm.js 完整版本

## Vue 实例

- el 与 template 属性的区别
  - el 与 template 都可以将 Vue 实例挂载到 Dom;
  - 使用 template 会把 Vue 实例挂载的 id 树结构直接替换掉；

## data 属性

data 为什么是一个函数

- 一个组件被定义时，data 必须声明为一个返回数据对象的函数
- 因为组件可能被创建为多个实例，如果 data 是一个存粹的数据对象，则所有的组件实例共享引用同一个数据对象
- 通过提供 data 函数，每次创建新实例后，都会返回一个全新初始数据的副本数据对象

## Vue 渲染过程

template --> ast(抽象语法树) --> render --> VDom --> 真实 Dom --> 页面
![Vue-render](./../img/Vue-render.png)

## 编译原理

将 template 编译成 render 函数的过程

> parse:编译模板
>
> > 首先通过正则表达式，将 html 编译成 AST 抽象语法树
>
> optimize:优化抽象树
>
> > Vue 是响应式，其中一些节点渲染后不会再变化，可以将静态节点标记出来，虚拟 DOM diff 过程可以直接跳过
>
> generate:生成代码
>
> > 把 AST 抽象语法树编译成函数

## 响应式原理

![响应式](./../img/response.png)

- 将对象作为 Vue 实例的 data 对象的 property
- Object.defineProperty 遍历 data 属性，生成对应的 getter/setter 方法
- 每个组件实例对应一个 watcher,渲染时会生成每个 property 的记录依赖
- 当 property 进行 getter/setter 操作时，会进行通知变更，通知组件重新渲染

## 生命周期

- beforeCreate
- Created，进行数据请求
- beforeMount
- Mounted，进行 DOM 操作
- beforeUpdate
- Updated
- beforeDestroy
- Destroyed，不能访问 this
- activited : keep-alive 组件专属，组件激活时调用
- deadctivated : keep-alive 组件专属，组件销毁时调用

## Vue 原型链

[![javascript原型链](./../img/proto.png)](https://segmentfault.com/a/1190000021232132)

## Vue 中使用了哪些模式

- 工厂模式 通过参数创建实例
- 单例模式 整个程序只有一个实例
- 发布/订阅模式 响应式数据原理
- 观察者模式
- 装饰模式
- 策略模式

## $set 解决的问题及原理

s
问题：两种情况下修改 Vue 数据不会触发视图更新
1、Vue 实例创建后，给实例新增属性；
2、通过数组下标直接修改数组值；
JavaScript 对象赋值给 data 后，初始化实例时，Object.defineProperty 会遍历属性，并转换为 getter/setter 方法。对于 data 中不存在的属性，没有这个过程因此无法检测到，数据不是响应式的。

原理：
1、当添加不存在的属性时，先对属性进行响应式追踪，会触发 Observer 的 dep 收集的 watcher 去更新
2、数组是通过 splice 方法更新数组。

## nextTick 应用及原理

nextTick 回调函数推迟到下次 DOM 更新完成后执行，在回调函数中可以得到更新后的数据。
原理为：使用异步执行回调函数

异步更新队列

- Vue 在更新 DOM 时是异步执行的，只要检测到数据变化，Vue 会开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。
- 如果同一个 watcher 被多次触发，只会被推入到队列中一次，这种在缓冲时去除重复数据能避免不必要的计算和 DOM 操作。
- 然后在下一个事件循环的 tick 中，Vue 刷新队列执行去除重复数据的实际工作，Vue 在内部对异步队列尝试使用原生的 Promise.then,MutationObserver，setImmediate，如果环境不支持，则会采用 settimeout 代替。

## Vue.extend 的原理

extend 是子类构造器，参数是包含组件选项的对象，也是 Vue 组件的核心 Api，实现思路是通过原型继承返回 Vue 子类，并通过 mergeOptions 方法把传入的 options 和父类的 options 合并

## key 值的作用

key 作为节点的唯一 id,主要使用在 Vue 虚拟 DOM 新旧节点 diff 中,用来查找节点。Vue 默认采用就地更新策略，不使用 key,Vue 会最大限度减少 DOM 移动，就地修改或复用相同类型组件的。使用 key,使 diff 操作更准确和迅速。

## ref 的作用

- 获取 dom 元素
- 获取子元素的属性
- 获取子元素的方法

## delete 与 Vue.delete

- delete 删除的值变成了 empty/undefined，其他数据键值不变
- Vue.delete 直接删除值，其他数据键值变化，通过 Vue.delete 可以监测到数据变化

## 样式穿透

当 style 添加 scoped 标签时，表示样式只对当前组件生效，想修改其他组件样式的方法

- 原生样式使用 .a >>> .b 选择元素
- 使用 less,sass 预处理器的以上方法不生效，可以通过 .a /deep/ .b 选择元素
- Vue-cli3 下，以上方法都不生效，可以通过.a ::v-deep .b 选择元素

## Vue 性能优化

- data 层级不要太深
- 区别使用 v-if 和 v-show
- 区别使用 computed 和 watch
- v-for 与 v-if 不同时使用
- 使用 v-for 时，添加 key
- 使用 keep-alive 缓存
- 图片懒加载、路由懒加载
- 第三方插件按需引入

Webpack 层面：

- 代码分割，公共代码提取(CommonsChunkPlugin)
- js、css 文件提取及压缩(Uglifyjs-webpack-plugin)
- 构建结果输出分析，可视化分析工具(webpack-bundle-analyzer)

其他:

- DNS 预解析，缓存
- CDN 文件缓存
- 图片懒加载，雪碧图，图片格式
- js,css 文件压缩，引入位置，懒加载
