## Vue

- 全家桶

  - vue
  - vue-router
  - vuex
  - axiso
  - element ui/ antv

- 生命周期

  - create/beforeCreate
  - mounted/beforeMounted
  - update/beforeUpdate
  - destoryed/beforeDstoryed

- 双向绑定原理

  - 发布者-订阅者模式
  - Object.defineProperty data get/set
  - 劫持数据
  - 通知订阅者

- MVVM 框架

  - Model data
  - View template
  - ViewModel vue

- 路由钩子

  - 全局守卫 beforeEach/afterEach
  - 路由独享 beforeEnter
  - 组件内部 beforeRouteEnter/beforeRouteUpdate/beforeRouteLeave

- 修饰符

  - 事件修饰符
    - stop 防止冒泡
    - prevent 阻止默认事件
    - native 监听原生
    - once
    - sync
    - passive
  - 按键修饰符
  - 系统修饰符
    - ctrl
    - shift
    - alt
    - meta
    - exact
    - 鼠标修饰符
  - 表单修饰符
    - lazy
    - number
    - trim

* 深拷贝与浅拷贝

  - 浅拷贝
    - Object.assign()
    - 扩展运算符...
  - 深拷贝
    - JSON.String(),缺点对象包含 undefined/function/symbol 会报错
    - Lodash.cloneDeep 深拷贝

* 组件数据传递

  - 父传子 props
  - 子传父 \$emit
  - provide/inject
  - 组件间 bus 总线
  - vuex
    -$parent & $children
  - $root
  - $ref

* Vuex

  - 单一状态树，状态共享池
  - 需要在多个组件间共享信息时才使用
  - state 状态
  - mutation 修改 state
  - action 异步请求
  - getter 读取 state
  - module

* Computed vs Watch vs Methods
  - computed
    - 需要有返回值；
    - 主要通过 get,set 获得/设置属性值；
    - data 值改变时执行，有缓存功能，效率高；
  - watch
    - 监听的属性发生变化就执行；
  - methods
    - 不一定有返回值；
    - 调用时才执行；

## ES6

- 新特性

  - const/let

    - 块级作用域
    - 解决了变量提升问题

  - 解构赋值
  - 扩展运算符
  - for of
  - 模板字符串
  - 箭头函数

    - 指向所在对象指向的 this，即外面最近普通函数的 this
    - 自身 this 不可以改变，但是可以改变继承自的 this
    - 可以不用 return，写法更简洁

  - sysmbol
    - 第七种数据类型（Number/String/undefined/null/boolean/Object）
  - await
  - set 给数组去重
  - Map 类似于 Object，但是键名可以不是字符串

- 闭包

  - 函数嵌套函数，外部函数调用内部函数，解决作用域问题

- promise
  - 异步回调的解决方案
  - 自身是立即执行函数
  - 状态：进行中/已成功/已失败
  - 链式调用

## CSS

- 新特性
  - transform
  - transfer
  - translate
  - flex
  - grid
  - rgba
  - border
  - background
  - linear-gradient 渐变
  - 媒体查询

## 网络

- 跨域请求的解决方案

  - 本地 webpack 配置 proxy
  - 发布 jsonp 只能做 get 请求
  - CORS
  - nginx 反代理
