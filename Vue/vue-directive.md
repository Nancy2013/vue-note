<!--
 * @Author: your name
 * @Date: 2021-06-07 10:53:18
 * @LastEditTime: 2021-06-07 10:58:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\vue-directive.md
-->

# vue directive

## v-if vs v-show

- 相同点：控制 DOM 的显示与隐藏
- 不同点：
  v-if
  - 惰性，条件首次为真时显示；
  - 切换渲染性能消耗大;
  - 一般切换少时使用;
    v-show
    - 总是显示，通过 display 属性控制;
    - 首次渲染性能消耗大;
    - 需要多次切换时使用;
