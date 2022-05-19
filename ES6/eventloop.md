<!--
 * @Author: your name
 * @Date: 2021-04-29 09:17:04
 * @LastEditTime: 2022-05-19 16:39:39
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\ES6\eventloop.md
-->

# 事件循环

## 进程

任务，代表一个程序

## 线程

进程的最小单位，渲染进程，JS 引擎进程，Html 解析进程，JS 是单线程运行机制
（css 加载不会阻塞 DOM 解析，但是渲染 Tree 需要 DOM Tree 与 CSSDOM tree，所以 css 加载会阻塞渲染 tree。JS 可以控制 DOM 及样式，为了防止渲染结果不一样，JS 引擎与 GUI 渲染互斥，因此 JS 加载会阻塞 DOM 解析）

## 宏任务

- script
- setTimeout
- setInterval
- I/O
- UI rendering

## 微任务

- process.nextTick
- Promise.then catch finally
- Object.observe

## 执行顺序

![eventloop](./../img/eventloop.gif)

> 1. 先执行同步代码(宏任务)；
> 2. 将异步宏任务 setTimeout 压入 macrotask 队列，promise.then 压入 microtask 队列;
> 3. 执行 console,输出 end;
> 4. 同步代码全部执行完毕，执行 promise 回调，输出 promise1,产生新的微任务并压入 microtask 队列;
> 5. 继续执行微任务，执行 promise 回调，输出 promise2;(nextTick 早于其他所有微任务)
> 6. 微任务全部执行完毕，有 UI 渲染时会执行更新，然后开始新一轮宏任务执行 setTimeout 回调;

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

async1();

new Promise((resolve) => {
  console.log('Promise1');
  resolve();
}).then(() => {
  console.log('Promise2');
});

console.log('script end');

// 执行顺序
// script start
// async1 start
// async2
// Promise1
// script end
// async1 end
// Promise2
// setTimeout
```

## Promise vs async/await

- setTimeout 不是立即放到队列，由设置的定时器时间决定，所以 setTimeout 的时间不是精确的
- promise 本身是同步函数，会放到主线程直接执行，回调 then 为异步，会先放到微任务队列，promise 状态不是 pending 时放回到主线程
- async 内部没有 await 时如同普通函数，会返回 promise 对象，await 是等待右侧内容执行完，当内部出现 await 并执行到 await 时，会让出主线程，阻塞 async 内后续代码的执行，先执行 async 外部函数，然后再继续执行 await 函数后面的部分
