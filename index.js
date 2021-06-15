/*
 * @Author: your name
 * @Date: 2021-02-20 09:55:46
 * @LastEditTime: 2021-06-15 16:32:40
 * @LastEditors: Please set LastEditors
 * @Description: 测试文件
 * @FilePath: \vue-note\index.js
 */
// await
// var a = 0
// var b = async () => {
//   a = await 10 +a
//   console.log('2', a) // -> ？
// }
// b()
// a++
// console.log('1', a)

// console.log('script start');

// setTimeout(function() {
//     console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//     console.log('queueMicrotask');
// });

// console.log('script end');

let a = {
  name: 'Julia',
  age: 20,
};
function change(o) {
  o.age = 24;
  o = {
    name: 'Kath',
    age: 30,
  };
  return o;
}
let b = change(a); // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b); // 第一个console
console.log(a); // 第二个console
