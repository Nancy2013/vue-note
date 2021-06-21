/*
 * @Author: your name
 * @Date: 2021-06-21 14:33:06
 * @LastEditTime: 2021-06-21 14:38:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\promise.js
 */
const P1 = new Promise((resolve, reject) => {
  console.log('promise');
  resolve('promise');
});

P1.then((result) => {
  console.log(`${result} then`);
}).catch((err) => {
  console.error(err);
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);
