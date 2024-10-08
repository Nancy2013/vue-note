/*
 * @Author: your name
 * @Date: 2021-08-25 09:48:00
 * @LastEditTime: 2022-05-23 14:57:56
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\lazy-load.js
 */
// 图片懒加载
// 思路
// 1、首先给图片设置占位图，设置图片的data-src属性
// 2、获得关键值：视图高度(viewHeight)，滚动条高度(scrollTop)，图片距离视图顶部的高度(offsetTop)
// 3、比较两个高度，当视图高度(viewHeight)+滚动条高度(scrollTop)，大于距离顶部高度(offsetTop)，说明图片出现的视图窗口
// 4、监控页面滚动事件
// 5、使用节流函数提高性能

/* 
先给图片一个占位资源
<img src="default.jpg" data-src="http://www.xxx.com/target.jpg" /> 
*/
let img = document.getElementsByTagName('img');
let count = 0; //计数器，从第一张图片开始计

lazyload(); //首次加载别忘了显示图片

// throttle函数我们上节已经实现
window.addEventListener('scroll', throttle(lazyload, 200));

function lazyload() {
  let viewHeight = document.documentElement.clientHeight; //视口高度
  let scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop; //滚动条卷去的高度
  for (let i = count; i < img.length; i++) {
    // 元素现在已经出现在视口中
    if (img[i].offsetTop < scrollHeight + viewHeight) {
      if (img[i].getAttribute('src') !== 'default.jpg') continue;
      img[i].src = img[i].getAttribute('data-src');
      count++;
    }
  }
}

// 方式二
// 获取所有的图片标签
const imgs = document.getElementsByTagName('img');
// 获取可视区域的高度
const viewHeight = window.innerHeight || document.documentElement.clientHeight;
// count用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let count = 0;
function lazyload() {
  for (let i = count; i < imgs.length; i++) {
    // 用可视区域高度减去元素顶部距离可视区域顶部的高度
    let distance = viewHeight - imgs[i].getBoundingClientRect().top;
    // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
    if (distance >= 0) {
      // 给元素写入真实的src，展示图片
      imgs[i].src = imgs[i].getAttribute('data-src');
      // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
      count++;
    }
  }
}
// 监听Scroll事件
window.addEventListener('scroll', throttle(lazyload, 200), false);
