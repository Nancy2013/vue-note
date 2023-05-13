/*
 * @Author: your name
 * @Date: 2021-06-21 16:52:28
 * @LastEditTime: 2021-09-10 17:00:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\cloneDeep.js
 */
// 浅拷贝

const newObj = oldObj;

const newObj = [...oldObj];

const newObj = oldObj.slice();

const newObj = [].concat(oldObj);

const newObj = Object.assign({}, oldObj);

// 深拷贝

/* 
方式一 使用JSON api 
问题：
1、会忽略undefined，sysbol属性
2、不能序列化函数属性
3、不能解决循环引用对象
let a={
  b:1,
  c:{
    d:2
  }
}
a.b=a.c;
a.c.d=b;
*/
const newObj = JSON.parse(JSON.stringify(oldObj));

/* 
方式二 递归函数
*/
function checkObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function cloneDeep(obj) {
  if (!checkObject(obj)) {
    return obj;
  }
  let copy = obj.constructor === Array ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = cloneDeep(obj[key]);
    }
  }
  return copy;
}

/* 
方式三 第三方库
*/
const newObj = lodash.cloneDeep(oldObj);
