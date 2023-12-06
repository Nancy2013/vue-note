# TS VS JS

## TS VS JS 不同

- TypeScript 是 JavaScript 的超基，TypeScript 包括 JavaScript；
- TypeScript 为 JavaScript 提供了类型支持；
- TS 是静态编程语言，JS 是动态编程语言。TS 编译期做类型检查，JS 执行期做类型检查；

## TS 相对于 JS 的优势

- 配合 VS Code 在编写代码时就能找到错误，TS 能更早检查到错误；
- 程序中任何位置的代码都有代码提示；
- 提高了代码的可维护性，方便代码进行重构；
- 支持最新的 ES 语法，可以优先体验最新语法；
- TS 的类型推断机制，不需要在所有位置显示标注类型，降低开发成本；

## TS 安装

- 全局安装： npm i -g typescript
- 查看版本： tsc -v
- TS 通过 tsc 把 ts → js
- 简化步骤：npm i -g ts-node 可以直接在 node 环境中运行 ts 文件
- ts-node 内部自动将 ts → js
