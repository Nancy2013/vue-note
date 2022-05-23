/*
 * @Author: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Date: 2022-04-12 14:03:52
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @LastEditTime: 2022-05-23 14:25:06
 * @FilePath: \vue-note\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
