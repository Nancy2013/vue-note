<!--
 * @Author: your name
 * @Date: 2020-11-11 15:14:36
 * @LastEditTime: 2022-06-02 11:06:58
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\diff.md
-->

# angularjs VS react VS vue

## 单向绑定 vs 双向绑定

> MVVM 模型，View 视图更新，Model 数据改变，Model 数据改变，View 视图更新
>
> angularjs 双向绑定(脏值检查)
>
> react 是单向绑定(通过 setState 模拟)
>
> vue 双向绑定(发布者-订阅者模式，数据劫持)

## 单向数据流 vs 双向数据流

> 父组件数据单向传递到子组件
>
> angularjs 双向数据流
>
> react 单向数据流
>
> vue 单向数据流

## React VS Vue

> 相同点
>
> > virtual dom
> > props
> > 组件化

> 不同点
>
> > 模板编写：React 是 JSX 语法，Vue 近似于 Html
> > virtual dom 的检测方式不同:Vue 做了颗粒度控制，在组件级别使用 watcher 监听 push 的监测方式，组件内使用 virtual dom 的 pull 监测方式。react 使用的是 pull
> > react 使用 setState 修改数据状态，vue 可以直接修改
> > react 监听数据变化必须手动，vue 提供了 computed 和 watch

## Vue2.0 vs Vue3.0

- 重构响应系统，使用 Proxy 替换 Object.defineProperty;

  - 可以监测到数组的变化,最多有 13 种拦截方法;
  - 懒执行，监测的目标是对象本身,不是对象的属性,不需要遍历每个属性;
  - 可直接实现对象的增加/删除

- 新增 Composition Api 接口,更好的逻辑复用和代码组织;

  - setup 没有 this,返回 props 和 context，props 是父组件传递的响应式数据，context 非响应式包括 attr、slot、emit
  - setup 通过 getCurrentInstance 获得实例，有生命周期 api，onMounted
  - 可以通过 ref、reactive 方法把基本数据类型和对象转换成响应式
  - 还可以通过 watch、computed api 监听数据

- 重构 Virtual Dom，性能优化

  - 静态标记 模板编译优化,标记静态节点，virtual dom diff 过程会跳过这些节点
  - 变量提升 函数中的静态变量提升到函数外面，再次调用函数时不会重新声明
  - 事件缓存 默认情况下事件被认为是动态变量，但是正常情况下视图更新前后的事件没有发生变化，不需要追踪它的变化，vue3 做了这方面的优化

- 支持 Fragment(多个根节点)，支持 Protal(在 dom 其他部分渲染组件内容)
- 代码结构调整,更便于 Tree shaking, 没有使用到的模块都不会被打包，体积更小;
- 使用 Typescript 替换 Flow;
- v-model 指令
- v-if 优先级高于 v-for

## options Api vs Composition Api

> options api
>
> > 是组件选项(data,methods,props)的对象 options
> > 开发复杂组件，会把一个功能拆分到不同的组件选项
> > 多个组件存在相同逻辑，会提取到 mixins，存在的问题是命令冲突和数据来源不清晰

> Composition Api
>
> > 是 vue3 新的 api,基于函数的 api,有更好的的逻辑复用和代码组织
> > 解决了 options api,不好拆分和复用的问题

## Vue hook vs React hook

- react hook 每次更新都会执行，vue setup 只执行一次
- react hook 只能在顶层调用，不能放在条件语句，react hook 是按照声明顺序调用链式结构存储，vue 可以放在条件语句无调用顺序要求
- react hook 更新时，需要调用 hook 的赋值函数，昂贵的计算需要使用 useMemo,而这需要传入正确的依赖数组。vue 可以直接赋值，vue 响应式系统自动收集计算属性和侦听器的依赖，无需手动声明依赖；
- react hook 默认情况下，传给子组件的事件处理函数会导致子组件不必要的更新，并需要显示调用 useCallback 优化。vue 细颗粒的响应式系统确保在绝大多数情况下组件只执行必要的更新，不需要手动缓存回调函数避免不必要的组件更新；

## Vue3 响应式原理

- reactive 设置数据为响应式对象(Proxy 是包含一个对象或者函数，并可以对其进行拦截)
- 跟踪修改它的函数 通过 Proxy 中的 getter，effect 参数是函数访问响应式数据时收集依赖
- 更新数值成最新的值 通过 Proxy 中的 setter 操作，触发 trigger
