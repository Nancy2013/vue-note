<!--
 * @Author: your name
 * @Date: 2020-08-10 09:13:57
 * @LastEditTime: 2022-05-25 16:40:00
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Webpack\loader.md
-->

# Loader

## 常用的 Loader

- vue-loader 解析和转换.vue 文件，作用是把 html 模板，js 逻辑 ，css 样式,提取出来，交给对应的 loader 处理
- less-loader 将 less 文件编译成 css
- css-loader 加载 css 文件，分析@import 和 url()，引用 css 文件与对应的资源
- style-loader 将 css 代码以<style>标签的形式插入到 html 中，并加载到 DOM 结构
- image-loader 加载并压缩图片
- file-loader | url-loader url-loader 是对 file-loader 的升级，可以设置图片大小的阈值，文件小于阈值返回 base64 格式编码，大于阈值使用 file-loader 复制到对应位置
- source-map-loader 加载 source map 文件，方便断点调试
- babel-loader es6 语法转换成 es5
- postcss-loader 扩展 css 语法，可以使用下一代 css，配合 autoprefixer 插件自动补齐前缀
- eslint-loader 标准语法检查

## Loader 的使用

- Webpack 需要通过各种 loader 来处理 js、css 和图片文件；
- less-loader：将 less 文件编译为 css 文件，css-loader：用来加载 css 文件，style-loader:将 css 文件加载到 DOM 结构；
- Webpack 加载文件的顺序为从右到左；
- 使用 less-loader 前需要先安装 less,作用是识别 less 语法；
- url-loader 与 file-loader 的区别：url-loader 可以在 options 里面设置图片的大小限制，当图片小于限制时以 base64 位方式加载图片，而 file-loader 会把文件直接移动到对应文件夹；
- 配置 options 文件名时使用[name]表示变量名，哈希值默认为 32 位[hash:16]表示取 16 位哈希值，[ext]表示文件扩展名；
- babel-loader 可以将 es6 转为 es5 语法，使用时依赖 babel-core，babel-preset-env 为 babel 升级版，可以取代之前的 babel-preset-esXXXX，但需要配置.babelrc 文件;

- 定义

```javascript
<style>
    .red{
        color:#f00;
    }
</style>
```

- 配置

作用等同于在`<style scoped>`定义的局部样式，使用时需要在 webpack 中配置：

```javascript
module:{
    rules:[
        // 其他规则
        {
            test:/\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                'sass-loader',
                ],
        },
    ]
```

- 使用

可以生成\$style 计算属性，使用方式：

```javascript
// html
<template>
    <div :style='$style.red'></div>
</template>
```

```javascript
// js
<script>
 export default{
     created(){
         console.log(this.$style.red);
     },
 };
</script>
```
