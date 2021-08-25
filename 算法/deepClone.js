/*
 * @Author: your name
 * @Date: 2021-06-21 16:52:28
 * @LastEditTime: 2021-08-25 15:10:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\deepClone.js
 */
// 深拷贝

/* 
方式一 使用JSON api 
问题：
1、会忽略undefined，sysbol属性
2、不能序列化函数属性
3、不能解决循环引用对象
*/
const newObj = JSON.parse(JSON.stringify(oldObj));

/* 
方式二 递归函数
*/
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let copy = obj.constructor === Array ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}

/* 
方式三 第三方库
*/
const newObj = lodash.cloneDeep(oldObj);
