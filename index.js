/*
 * @Author: your name
 * @Date: 2021-06-22 09:54:35
 * @LastEditTime: 2021-08-25 10:39:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\index.js
 */
// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2');
// }
// console.log('script start');
// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);
// async1();
// new Promise(function (resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function () {
//   console.log('promise2');
// });
// console.log('script end');

// var a = 0;
// var b = async () => {
//   a = a + (await 10);
//   console.log('2', a); // -> '2' 10
//   a = (await 10) + a;
//   console.log('3', a); // -> '3' 20
// };
// b();
// a++;
// console.log('1', a); // -> '1' 1

// setTimeout(function () {
//   console.log(1);
// }, 0);
// new Promise(function (resolve, reject) {
//   console.log(2);
//   resolve();
// }).then(function () {
//   console.log(3);
// });
// process.nextTick(function () {
//   console.log(4);
// });
// console.log(5);
// var array = [1, 3, 5];
// var obj = { name: 'cc' };
// var sReturn = array.forEach(function (value, index, array) {
//   array[index] = value;
//   console.log(this); // cc被打印了三次, this指向obj
// }, obj);
// main.js
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
