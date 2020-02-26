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
- url-loader与file-loader的区别：url-loader可以在options里面设置图片的大小限制，当图片小于限制时以base64位方式加载图片，而file-loader会把文件直接移动到对应文件夹；
- 配置options文件名时使用[name]表示变量名，哈希值默认为32位[hash:16]表示取16位哈希值，[ext]表示文件扩展名；
- babel-loader可以将es6转为es5语法，使用时依赖babel-core.babel-preset-env为babel升级版，可以取代之前的babel-preset-esXXXX，但需要配置.babelrc文件;