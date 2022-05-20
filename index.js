/*
 * @Author: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Date: 2022-04-12 14:03:52
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @LastEditTime: 2022-05-20 14:07:55
 * @FilePath: \vue-note\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var a = 'luckyStar';
var obj = {
  a: 'litterStar',
  foo() {
    console.log(this.a);
  },
};

setTimeout(obj.foo, 100); // ③
