<!--
 * @Author: your name
 * @Date: 2020-04-27 11:00:39
 * @LastEditTime: 2020-04-27 14:06:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\Vue API\vue-use.md
 -->

# Vue-use

## 作用

注册全局插件

## 方法

- 需要在 new Vue()之前使用
- Vue.use() 可以防止多次注册同一个插件
- 参数为 Object 时，需要包含 install 方法
- 参数为 Function 时，默认当做 install 方法
