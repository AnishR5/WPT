const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require("./router/routers")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use("/",router);

app.listen(3008,console.log("Server started at port 3008"));

module.exports=app;