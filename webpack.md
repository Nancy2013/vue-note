## Webpack

### Webpack的作用
- 对JavaScript模块进行打包；
- 处理各个模块间的依赖关系；
- 对模块的语法转化为浏览器支持的语法；
- Webpack的运行环境依赖于node,node要运行各种编译环境时依赖于各种包，通常是通过npm来管理；

### Loader的使用
- Webpack需要通过各种loader来处理js、css和图片文件；
- css-loader：用来加载css文件，style-loader:将css文件加载到DOM结构，less-loader：将less文件编译为css文件；
- Webpack加载文件的顺序为从右到左；
- 使用less-loader前需要现在安装less,作用是识别less语法；