<!--
 * @Author: your name
 * @Date: 2020-03-17 09:32:20
 * @LastEditTime: 2020-03-25 14:02:04
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

## 后端渲染 vs 前端渲染

|          | 后端渲染                                                                                    | 前端渲染                                                                                                                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 渲染方式 | 路由判断，界面层在后端，后端同时需要处理数据逻辑，前端只负责解析 Html 展示界面              | 路由判断，界面层在前端，前端使用 JS 构建 DOM 生成 Html 文件，后端只负责提供数据                                                                                                                                           |
| 代表框架 | ASP、PHP、JSP                                                                               | AngularJS、React、Vue                                                                                                                                                                                                     |
| 优点     | 1、首屏不需要加载所有 css,js 文件，性能好；<br/>2、有利于 SEO；<br/>3、不用考虑浏览器适配； | 1、局部刷新，每次刷新不用请求全部数据；<br/>2、懒加载，滚动界面时再请求可视界面数据；<br/>3、富交互，可以实现比较炫的效果；<br/>4、节约服务器成本；<br/>5、前后端分离，后端只负责提供及处理数据，前端负责获取及展示数据； |
| 缺点     | 后端需要处理后端又需要写前端样式，代码混乱；服务器要求高                                    | 首页加载慢，可能出现白屏；不利于 SEO                                                                                                                                                                                      |

SEO：传统搜索引擎只会从 html 中抓取数据，导致前端渲染的页面无法被抓取。前端渲染解决 SEO 问题：

- 首先判断系统是否需要 SEO，管理系统一般需要登录才能使用不存在 SEO 需求，或者可以在首页做一些静态内容
- 若为内容系统，可以专门做一些页面给搜索引擎<br/>

首屏优化：SPA 页面会把所有的 js 打包到一个文件，可以通过几个方法优化

- 使用 webpack 的代码分离
- 优化首页，使用 Skeleton Screen 方式展示，先加载占位器再显示数据
- 部分页面使用同构渲染

## 导航守卫

- 全局路由守卫
  - beforeEach
  - beforeResolve，解析守卫
  - afterEach
- 路由独享守卫
  - beforEnter
- 组件内部守卫
  - beforeRouterEnter，不能访问 this，next 回调在 mounted 后执行
  - beforeRouterUpdate，解决组件复用数据更新
  - beforeRouterLeave
