<!--
 * @Author: your name
 * @Date: 2020-03-18 09:35:34
 * @LastEditTime: 2020-03-24 11:11:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\ES6\Promise.md
 -->

# Promise

## 产生的意义

JavaScript 是单线程，即一个任务完成后才能进行另外的任务。当一个任务耗费比较长时间时，会拖延整个程序的进行。比如在 http 请求缓慢时，会造成浏览器假死。为此 JavaScript 将执行模式分为两种。

- 同步模式(sync)，上面说的执行顺序
- 异步模式(async)，任务执行后会去执行已经请求完数据的回调，而不是下个任务。任务不是等上个任务执行完再执行，可能会同时执行，这样任务执行顺序与任务排列顺序可能是不一致的，代表性应用如 Ajax。

Promise 不是一种新的语法，只是为了解决异步请求的地狱回调问题，通过使用链式调用，可以提高可读性使代码更优雅。

## 简单使用

```javascript
 const promise = new Promise((relove,reject)=>{
   if(success){
    //  成功
     resolve({data:{result:1});
   }else{
    //  失败
     reject(error);
   }
 })
 promise.then((result)=>{
  //  promise 的回调 then 方法有两个参数，成功回调 success 以及失败回调 fail，这个两个参数必须是函数，否则 promise 返回的数据会一直向下传递
 },err=>{

 });
```
