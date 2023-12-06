# 解决返回需要点击两次

## A(push) → B(push) → C(replace) → B(back,需要点击两次) → A

## 解决办法
```js
// C界面
data(){
    return {
        fromPath: "",
    }
};

back(){
    // 返回
    const toPath='/b'
    this.$router.replace({path:toPath});
    if(fromPath===toPath){
        // 上级路由与目标路由相同，手动返回一次
        this.$router.back();
    }
};

beforeRouteEnter(to, from, next) {
    next((vm) => {
      // 记录上级路由
      vm.fromPath = from.path;
    });
},
```