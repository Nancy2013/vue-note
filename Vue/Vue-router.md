<!--
 * @Author: your name
 * @Date: 2020-03-17 09:32:20
 * @LastEditTime: 2020-03-17 10:10:11
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
