<!--
 * @Author: your name
 * @Date: 2021-04-29 09:17:04
 * @LastEditTime: 2021-06-28 14:51:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\ES6\eventloop.md
-->

# 事件循环

## 进程

任务，代表一个程序

## 线程

进程的最小单位，渲染进程，JS 引擎进程，Html 解析进程，JS 是单线程运行机制

## 宏任务

- script
- setTimeout
- setInterval
- I/O
- UI rendering

## 微任务

- process.nextTick
- promise
- Object.observe

## 执行顺序

![eventloop](./../img/eventloop.gif)

> 1. 全局代码压入执行栈执行(宏任务);
> 2. 将异步宏任务 setTimeout 压入 macrotask 队列，promise.then 压入 microtask 队列;
> 3. 执行 console,输出 end;
> 4. 执行 promise 回调，输出 promise1,产生新的微任务并压入 microtask 队列;
> 5. 继续执行微任务，执行 promise 回调，输出 promise2;(nextTick 早于其他所有微任务)
> 6. 微任务全部执行完毕，有 UI 渲染时会执行更新，然后开始新一轮宏任务执行 setTimeout 回调;
