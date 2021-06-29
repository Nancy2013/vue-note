/*
 * @Author: your name
 * @Date: 2021-06-21 16:52:28
 * @LastEditTime: 2021-06-28 16:21:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\deepClone.js
 */
// 深拷贝

// 简单版
const newObj = JSON.parse(JSON.stringify(oldObj));

// 优化版
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
