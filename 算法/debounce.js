/*
 * @Author: your name
 * @Date: 2021-06-21 16:23:22
 * @LastEditTime: 2021-06-21 16:44:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\debounce.js
 */

// 防抖，触发n秒后执行，如果已经存在则清除重新定时
// func是用户传入需要防抖的函数
// wait是等待时间
const _debounce = (func, wait = 100) => {
  // 缓存一个定时器id
  let timer = 0;
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法

  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};
