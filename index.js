/*
 * @Author: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Date: 2022-04-12 14:03:52
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @LastEditTime: 2022-05-19 17:07:38
 * @FilePath: \vue-note\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

async1();

new Promise((resolve) => {
  console.log('Promise1');
  resolve();
}).then(() => {
  console.log('Promise2');
});

console.log('script end');
