/*
 * @Author: your name
 * @Date: 2021-02-20 09:55:46
 * @LastEditTime: 2021-02-20 15:20:00
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

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    console.log('queueMicrotask');
});

console.log('script end');
