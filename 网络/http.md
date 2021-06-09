<!--
 * @Author: your name
 * @Date: 2020-03-04 14:57:32
 * @LastEditTime: 2021-06-09 11:06:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\网络\http.md
 -->

## 网络

### http vs https

| 区别     | http                | https                                     |
| -------- | ------------------- | ----------------------------------------- |
| 协议     | http<br/>超文本传输 | http + SSL<br/>超文本传输、加密套接字协议 |
| 安全性   | 不安全              | 安全                                      |
| 端口     | 80                  | 443                                       |
| 传输内容 | 明文                | 加密数据                                  |
| 收费     | 否                  | CA 证书收费                               |
| 请求速度 | 快                  | 慢                                        |

### https 请求过程

![https](./../img/https.png)

### 从浏览器输入 Url 到显示界面的步骤

- DNS 域名解析，发起服务器请求
- 服务器返回 html、js、css 资源
- 浏览器语法解析，生成 dom 数据结构树
- 浏览器渲染页面

### iframe 的缺点

- 搜索引擎不能解析 iframe，不利于 SEO
- iframe 页面会阻塞主页面加载
- 与主页面共享数据池，浏览器有相同域访问限制

### 网站性能优化方法

- content 方面
  - 减少 http 请求：文件合并、使用雪碧图、base64 编码图片；
  - JS 放在页面底部；
  - CSS 放在页面顶部，不使用 CSS 表达式，使用 link 标签；
  - JS 和 CSS 文件压缩
  - 页面空着的 href 和 src 会阻塞下载进程
  - 不使用 iframe
  - 减少数据操作和磁盘读取
- Server 方面
  - DNS 缓存
  - CDN 托管
  - 减小 Cookies 大小
  - 资源使用 Gzip 压缩

### 前端 SEO 注意的地方

- 页面 title、description、keyword 要能描述重点，关键词重复不超过两次；
- 语义化页面结构
- 重要内容不使用 js 输出，搜索引擎不能解析 js 内容
- 非装饰性图片，添加 alt 属性
- 少用 iframe 标签，iframe 不能检索
- 提高网页速度，网页的访问速度是 SEO 的一个重要指标
