# Vue2 配置全局变量

## Less
> 1、安装less
> 2、安装less-loader

```less
// 变量文件
// assets/style/variables.less
@primary-color:#005685;
```

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
          globalVars: {
            ...getLessVariables(
                path.resolve(__dirname, '../src/assets/style/variables.less')
            ),
        }
      },
    }
  }
}


/**
 *
 * 生成全局变量文件
 * @param {*} file 文件url
 * @returns 全局变量
 */
function getLessVariables(file) {
  var themeContent = fs.readFileSync(file, 'utf-8');
  var variables = {};
  themeContent.split('\n').forEach(function(item) {
    if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
      return;
    }
    var _pair = item.split(':');
    if (_pair.length < 2) return;
    var key = _pair[0].replace('\r', '').replace('@', '');
    if (!key) return;
    var value = _pair[1]
      .replace(';', '')
      .replace('\r', '')
      .replace(/^\s+|\s+$/g, '');
    variables[key] = value;
  });
  return variables;
}
```

## Scss
> 1、安装node-sass
> 2、安装sass-loader
> 3、安装sass-resources-loader

```scss
//  变量文件 
//  assets/style/variables.scss
$primary-color:#005685;
```

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 注意：在 sass-loader 版本=v8 中，这个选项名是 "prependData"
      //      在 sass-loader 版本<=v7 中，这个选项名是 "data"
      scss: {
        prependData: `@import "~@/assets/style/variables.scss";`
      },
    }
  }
}
```
```vue
<style scoped lang="scss">
body{
    background:$primary-color;
}
</style>
```


# Vue3 配置全局变量
## Less & Scss
```less
// 变量文件
// assets/style/variables.less
@primary-color:#005685;
```

```scss
//  变量文件 
//  assets/style/variables.scss
$primary-color:#005685;
```

```js
// vue.config.js
export default defineConfig({
    css:{
    preprocessorOptions: {
      less: {
        // less
        additionalData: `@import "@/assets/style/variables.less";`
      }
      scss: {
        // less
        additionalData: `@import "@/assets/style/variables.scss";`
      }
    }
  },
});
```