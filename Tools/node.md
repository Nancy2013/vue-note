<!--
 * @Author: your name
 * @Date: 2020-05-22 17:00:47
 * @LastEditTime: 2020-05-22 17:10:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Tools\Node.md
-->

# Node 操作

## 关闭进程

> windows7

```javascript
 taskill node
```

> window10

```javascript
先查找PID
netstat -aon|findstr 3001
终止进程
taskkill -f -pid 7028
```

> linux

```javascript
 killall node
```
