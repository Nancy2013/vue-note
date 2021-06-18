<!--
 * @Author: your name
 * @Date: 2020-11-11 15:14:36
 * @LastEditTime: 2021-06-18 16:04:56
 * @LastEditors: Please set LastEditors
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

## Vue VS React

composition api 与 hooks 区别

## Vue2.0 vs Vue3.0

- 重构响应系统，使用 Proxy 替换 Obje.defineProperty;

  - 可以监测到数组的变化,最多有 13 种拦截方法;
  - 监测的目标是对象本身,不是对象的属性,不需要遍历每个属性;
  - 可直接实现对象的增加/删除

- 新增 Composition Api 接口,更好的逻辑复用和代码组织;
- 重构 Visual Dom
  - 模板编译优化,将静态节点编译成常量;
  - slot 优化,将 slot 编译为 lazy 函数,将 slot 渲染的决定权交给组件;
- 支持 Fragment(多个根节点)，支持 Protal(在 dom 其他部分渲染组件内容)
- 代码结构调整,更便于 Tree shaking, 体积更小;
- 使用 Typescript 替换 Flow;
