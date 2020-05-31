# Common-CRUD

## 定义路由参数

app.use('/node-business/:resource');

## 配置路由

router=express.Router({
mergeParams:true,
})

## 安装依赖

格式化处理
npm i inflection

## 动态加载模型

转换类名
moduleName=infletion.classify(req.params.module);
Module=require(`./../models/${moduleName}`);

## 添加到中间件

app.use('/node-business/:resource',async (req,res,next)=>{
moduleName=infletion.classify(req.params.module);
req.model=require(`./../models/${moduleName}`);
next();
},router);

## 建立关联模型

const user=mongoose.Schema({
name:{type: String},
parent:{type:mongoose.SchemaTypes.objectId,ref:'User'}
});

## 使用

router.get('/',(req,res)=>{
let options={
populate:'', // 关联查询
};
const use=req.model.find().setOptions(options);
});

router.post('/',(req,res)=>{
const use=req.model.create(req.body);

router.put('/:id',(req,res)=>{
const use=req.model.findeByIdAndUpdate(req.params.id,req.body);
});

router.delete('/:id',(req,res)=>{
const use=req.model.findeByIdAndDelete(req.params);
});
