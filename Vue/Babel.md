<!--
 * @Author: your name
 * @Date: 2020-03-05 13:59:29
 * @LastEditTime: 2020-03-05 17:12:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\Babel.md
 -->
## Babel

#### 功能
- JavaScript编译器，用来编译JavaScript新的语法糖，以支持大多数浏览器的兼容性

#### 配置
- presets(预设)
   - 可以理解为插件的集合，方便我们在plugins中引入一个个的插件
   - 语法转义器
      - 编译JavaScript最新语法糖
      - bable-preset-env/babel-reset-xxxx
      - env版本可以代替后面的xxxx版本
      - stage，不同版本的编译器向上兼容，stage-0包括stage-1
   - 补丁转义器
      - es6中新增了语法与api，语法可以直接使用preset-env编译，但是新api需要安装@babel/polyfill
      - 负责JavaScript新增api和全局对象,如：Iterator、Generator、Set、Maps、Promise等等全局对象
- plugins(插件)
   - es6语法转换：transform-runtime
   - es6新api编译:babel-polyfill
   - 动态引入模块：syntax-dynamic-import