//导入依赖的模块
const express=require("express");
const bodyParser=require("body-parser");
//导入路由
const user=require("./router/user.js")
//构建服务器
var app=express()
app.listen(3000,()=>{
	console.log("连接成功")
})
//静态资源挂载
app.use(express.static('../client'))
//使用body-parse中间件
app.use(bodyParser.urlencoded({extended:false}));
//使用中间件方式连接路由器
app.use("/user",user)
