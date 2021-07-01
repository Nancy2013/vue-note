<!--
 * @Author: your name
 * @Date: 2020-04-28 11:13:34
 * @LastEditTime: 2021-07-01 15:12:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Html\Html.md
 -->

# Html

## 文档结构

- html
- head
- meta
- body

## script 标签 defer 与 async 的区别

> 相同点
> defer 与 async 都是异步加载 script 文件

> 不同点
> defer:浏览器指示脚本异步加载后不会立即执行，在文档解析后执行
> async:脚本异步加载后会立即执行，script 不是按顺序执行的，不适用与存在依赖的脚本

## 语义化

用正确的标签做正确的事

- 即使没有 css，页面也以一种文档结构显示，便于阅读;
- 页面内容结构化，便于浏览器和搜索引擎解析，有利于 SEO;

## 图片格式

> png、jpeg、svg、gif
> webp:谷歌开发的图片格式，压缩体积是 jpeg 的 2/3，可以节省大量的服务器资源和数据空间
