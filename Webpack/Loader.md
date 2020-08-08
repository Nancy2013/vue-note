# Loader

## CSS Module

- 定义

```javascript
<style>
    .red{
        color:#f00;
    }
</style>
```

- 配置

作用等同于在`<style scoped>`定义的局部样式，使用时需要在 webpack 中配置：

```javascript
module:{
    rules:[
        // 其他规则
        {
            test:/\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                'sass-loader',
                ],
        },
    ]
```

- 使用

可以生成\$style 计算属性，使用方式：

```javascript
// html
<template>
    <div :style='$style.red'></div>
</template>
```

```javascript
// js
<script>
 export default{
     created(){
         console.log(this.$style.red);
     },
 };
</script>
```
