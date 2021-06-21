/*
 * @Author: your name
 * @Date: 2021-06-21 14:18:27
 * @LastEditTime: 2021-06-21 14:33:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\fib.js
 */

// 斐波切列那
const fib = (n) => {
  if (n < 2 && n >= 0) return n;

  return fib(n - 1) + fib(n - 2);
};

const result = fib(10);
console.log(result);
