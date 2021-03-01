# composition-api

```js
const count = ref(0);
// count={value:0}
```

<!-- 响应式数据为对象原因 -->

保持数据行为的统一，对象为引用类型。Number 及 String 为值引用，无法同步。
