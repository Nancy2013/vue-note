/*
 * @Author: your name
 * @Date: 2021-06-22 11:06:22
 * @LastEditTime: 2021-09-10 16:40:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\deepEqual.js
 */
const obj1 = {
  name: 'a',
  age: 1,
  info: {
    sex: '女',
    family: {
      is: true,
    },
  },
};

const obj2 = {
  name: 'a',
  age: 1,
  info: {
    sex: '女',
    family: {
      is: true,
    },
  },
};

function checkObject(obj) {
  return typeof obj === 'object' && obj !== null;
}
function deepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const val1 = obj1[keys1[i]];
    const val2 = obj2[keys1[i]];

    const isObj1 = checkObject(val1);
    const isObj2 = checkObject(val2);
    if (isObj1 && isObj2) {
      return deepEqual(val1, val2);
    } else {
      if (val1 !== val2) {
        console.log('val1: ', val1, ' val2: ', val2);
        return false;
      }
    }
  }

  return true;
}

console.log(deepEqual(obj1, obj2));
