<!--
 * @Author: your name
 * @Date: 2020-06-01 09:19:33
 * @LastEditTime: 2020-07-07 10:25:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Node\Node API\Path.md
-->

# Path

## join

`path.join([...paths]);`

使用平台特定分隔符，进行路径拼接，生成规范路径。windows 下是'\\',Linux 下是'/'

```javascript
path.join('/src', '/common');
```

输出结果：`/src/common`

```javascript
path.join('/src/common', '..', '/utils');
```

输出结果：`/src/common`

```javascript
// 路径字符串为空时，返回'.'，表示当前目录
path.join('/src', '/common', '..', '..');
```

输出结果：`'.'`

## resolve

`path.resolve([...paths])`

解析字符串，输出绝对路径。path 片段从右到左处理，直到获得一个绝对路径。

```javascript
// 当前路径：C:/Users/Juliette/node/server
path.resolve(__dirname, '/src');
```

输出结果：`C:/Users/Juliette/node/server/src`

```javascript
// 当前路径：C:/Users/Juliette/node/server
// 路径为空时忽略
path.resolve(__dirname, '', '/src');
```

输出结果：`C:/Users/Juliette/node/server/src`
