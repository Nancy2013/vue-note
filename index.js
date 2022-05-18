/*
 * @Author: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Date: 2022-04-12 14:03:52
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @LastEditTime: 2022-05-18 17:07:24
 * @FilePath: \vue-note\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let ary = [1, [2, [3, [4, 5]]], 6];

while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}

console.log(ary);
