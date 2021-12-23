/*
 * @Author: your name
 * @Date: 2021-12-22 10:43:01
 * @LastEditTime: 2021-12-22 10:44:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\TS\function.ts
 */
function buildName(firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName;
}

let result1 = buildName('Lee', 'hom');
