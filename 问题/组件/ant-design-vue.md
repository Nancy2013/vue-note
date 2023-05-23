# ant design vue

## Form

### input

> password 类型浏览器下会自动填充密码

> 解决方法

```html
<!-- 设置只读属性，获取焦点后移除只读属性 -->
<a-input v-model:value="password" placeholder="请输入密码" type="password" readonly="readonly" onfocus="this.removeAttribute('readonly')"/>
```

