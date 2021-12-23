/*
 * @Author: your name
 * @Date: 2021-12-07 16:15:53
 * @LastEditTime: 2021-12-07 16:16:13
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\TS\greeter.ts
 */
function greeter(person) {
  return 'Hello, ' + person;
}

let user = 'Jane User';

document.body.innerHTML = greeter(user);
