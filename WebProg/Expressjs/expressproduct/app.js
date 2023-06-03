const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const path = require("path");
const router=require("./router/routers")

app.use(bodyparser.urlencoded({extended:false}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use("/",router);

app.listen(3005,console.log("server started on port 3005"));


module.exports=app;