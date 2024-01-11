# CSS

## Input自动填充

```css
/* 默认样式 */
input.ant-input:-webkit-autofill,
input.ant-input:-webkit-autofill:hover, 
input.ant-input:-webkit-autofill:focus {
    /* 背景 */
  -webkit-box-shadow: 0 0 0 30px white inset !important; 
    /* 字体 */
  -webkit-text-fill-color: rgba(0, 0, 0, 0.9);
}

/* 禁用样式 */
input.ant-input-disabled:-webkit-autofill,
input.ant-input-disabled:-webkit-autofill:hover, 
input.ant-input-disabled:-webkit-autofill:focus {
    /* 背景 */
  -webkit-box-shadow: 0 0 0 30px #EBEDF0 inset !important;
    /* 字体 */
  -webkit-text-fill-color: rgba(0, 0, 0, 0.25);
}
```