// 图片懒加载

/* 
先给图片一个占位资源
<img src="default.jpg" data-src="http://www.xxx.com/target.jpg" /> 
*/
let img = document.getElementsByTagName("img");
let num = img.length;
let count = 0;//计数器，从第一张图片开始计

lazyload();//首次加载别忘了显示图片

// throttle函数我们上节已经实现
window.addEventListener('scroll', throttle(lazyload, 200));

function lazyload() {
  let viewHeight = document.documentElement.clientHeight;//视口高度
  let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;//滚动条卷去的高度
  for(let i = count; i <num; i++) {
    // 元素现在已经出现在视口中
    if(img[i].offsetTop < scrollHeight + viewHeight) {
      if(img[i].getAttribute("src") !== "default.jpg") continue;
      img[i].src = img[i].getAttribute("data-src");
      count ++;
    }
  }
}