<!--
 * @Author: your name
 * @Date: 2020-03-17 09:32:20
 * @LastEditTime: 2020-03-20 11:07:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\Vue-router.md
 -->

# Vue-router

## $router vs $route

$router为VueRouter实例，可以通过$router 进行路由操作，push,replace 等；<br/>
$router使用push方法路由跳转时，{name:'',params{}}方式，或{path:'',query:{}}方式传参；<br/>
$route 为 Object，是当前活跃的路由信息对象，不可以更改可以读取信息，name,params 等；

## 路由懒加载

编译后的 js 文件会比较大，造成加载缓慢问题。使用路由懒加载，可以按需或并行加载 js 文件

- vue 异步路由

  - 异步请求路由组件<br/>

  ```javascript
  const App = () => improt('componentPath/App.vue');
  ```

- webpack 代码分割

  - webpack 会对异步代码进行自动分割

  ```javascript
  module.exports = {
    entry: {
      index: './src/index.js', // 入口文件
    },
    output: {
      filename: '[name].bundle.js', // 入口文件对应的编译文件
      chunkFilename: '[name].bundle.js', // 异步非入口文件
    },
  };
  ```

## 导航守卫

- 全局路由守卫
  - beforeEach
  - beforeResolve，解析守卫
  - afterEach
- 路由独享守卫
  - beforEnter
- 组件内部守卫
  - beforeRouterEnter,不能访问this，next回调在mounted后执行
  - beforeRouterUpdate，解决组件复用数据更新
  - beforeRouterLeave
