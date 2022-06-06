<!--
 * @Author: your name
 * @Date: 2020-04-27 14:36:59
 * @LastEditTime: 2022-06-06 11:32:10
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\Vue API\plugin.md
 -->

# plugin

## Vue-use

## 作用

注册、安装全局插件

## 方法

- 需要在 new Vue()之前使用
- Vue.use() 可以防止多次注册同一个插件
- 参数为 Object 时，需要包含 install 方法
- 参数为 Function 时，默认当做 install 方法

## 原理

Vue.use 做了什么

- 首先检查插件有没有安装，如果已安装，则不再安装
- 如果没有安装，会调用插件的 install 方法，并传入 Vue 实例
- Vue.use 其实是 Vue 组件与插件之间的桥梁

## 事例

ElementUI install 方法

```js
const install = function (Vue, opts = {}) {
  // 语言国际化
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  // 挂载全局组件
  // components是ElementUI的组件数组，里面有Dialog、Input之类的组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  // 挂载全局方法
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$message = Message;
  Vue.prototype.$confirm = MessageBox.confirm;
  // 自定义参数
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000,
  };
};
```

## Axios

Axios 不需要使用 Vue.use 安装，因为 Axios 是基于 promise 封装的库，完全独立于 Vue,不通过 Vue.use 安装，也可以发送请求；<br/>
VueRouter 需要提供\$router,\$route 之类的属性，以及<router-link>等组件，需要依赖 Vue 实例才可以实现

## plugin vs component vs mixin

plugin : 实现全局功能，如：vue-router,vuex;
component : 一般包含 template script 标签，是可复用的 Vue 实例；
mixin : 用来分发组件功能；
