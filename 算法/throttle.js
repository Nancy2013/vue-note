/*
 * @Author: your name
 * @Date: 2021-06-21 16:32:29
 * @LastEditTime: 2021-06-21 17:31:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\throttle.js
 */

// 节流，每隔固定时间只执行一次
// func是用户传入需要防抖的函数
// wait是等待时间
const _throttle = (func, wait = 50) => {
  let lasttime = 0;

  return function (...args) {
    const now = new Date();
    // 将当前时间和上一次执行函数时间对比
    // 如果差值大于设置的等待时间就执行函数
    if (now - lasttime > wait) {
      lasttime = now;
      func.apply(this, args);
    }
  };
};

setInterval(() => {
  _throttle(() => {}, 100);
}, 1);
