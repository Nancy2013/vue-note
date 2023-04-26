<!--
 * @Author: your name
 * @Date: 2021-02-19 09:27:50
 * @LastEditTime: 2021-06-24 16:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\issues.md
-->

# Issues

## 模板语法

- 你不应该在模板表达式中试图访问用户定义的全局变量

## Props

## style

- 数字样式中，有上下间距

## 响应式计算和侦听

## 响应式

toRefs 与 reactive 的区别

## == vs ===

## style 字体设置

## vue/cli vs vite

## 穿透滚动

## vue3 引用全局样式

## vue3 挂载全局属性和插件

## $attrs 和$listeners 作用

$attrs

包含了父作用域不作为 props 被识别，但是能被获取的属性(不包含 class 和 style)，可以通过 v-bind="$attrs"传递给子组件

$listeners

包含了父作用域中的 v-on 事件监听器(不包含.native 修饰器的),可以通过 v-on="$listeners"传递给子组件

## vue set 的原理

## vue3.0 中 diff 算法的优化

## vue use

## vue nextTick 原理

## css 防止全局污染

## DOM 原生事件与 Vue 自定义组件自定义事件的区别

### 低代码平台

可视化的应用开发方法，以少量代码，较快的速度交付应用程序，将大量的重复代码自动化，称为低代码。不需要通过传统的手写代码进行编程，而是通过图形拖拽，参数配置完成开发工作。

### 微前端

### devOps

development + operation

### 微服务

服务是后台运行的，不间断的提供特定功能的程序，如 web 服务
是采用容器技术的面向服务架构，使用“服务”作为功能单元，轻量级实现的，不是新增一个服务器，而是新建容器(一个进程)，因此叫做微服务

### 单点登录

是在多个系统中，用户只用登录一个系统，就可以访问其他的互相信任的系统

用户第一次登录成功后，服务器会返回一个字符串 token，后面再访问其他系统，只需要携带 token 进行身份验证
