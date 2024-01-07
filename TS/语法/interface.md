# interface 接口

## 用法

- 可以给对象指定类型
- 只能给对象指定类型

## 继承

```js

interface person={
    name:string,
    age:number,
}

// girl 继承 person 的属性
interface girl extends person={
    sex:string,
}

let her:girl={
    name:'Jone',
    age:18,
    sex:'女',
}
```
