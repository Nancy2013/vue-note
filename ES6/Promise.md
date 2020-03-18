<!--
 * @Author: your name
 * @Date: 2020-03-18 09:35:34
 * @LastEditTime: 2020-03-18 14:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\ES6\Promise.md
 -->

# Promise

Promise简单使用

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
  //  promise返回
 });
```
