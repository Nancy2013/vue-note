/*
 * @Author: your name
 * @Date: 2021-06-21 10:41:15
 * @LastEditTime: 2021-09-10 15:37:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\算法\排序.js
 */
const data = [2, 3, 1, 4, 9, 3, 5, 6, 8, 8, 0, 7];
// 判断有效性
const checkArray = (arr) => Array.isArray(arr);
// 交换
const swap = (arr, left, right) => {
  let temp = arr[right];
  arr[right] = arr[left];
  arr[left] = temp;
};

// 冒泡
// 每一轮都把最大数值沉入下面，执行length-1轮
const bubble = (arr) => {
  if (!checkArray(arr)) return;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (arr[i] < arr[k]) {
        swap(arr, i, k);
      }
    }
  }
};
// bubble(data);

// 插入
const insert = (arr) => {
  if (!checkArray(arr)) return;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
};
// insert(data);

// 选择
const select = (arr) => {
  if (!checkArray(arr)) return;
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[i]) {
        swap(arr, i, k);
      }
    }
  }
};
// select(data);

// 快排
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
console.log(quickSort(data));
// console.log(data);
