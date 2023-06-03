const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const path=require("path");
const routes=require("./router/router")

app.use(bodyparser.urlencoded({extended:false}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.set(express.static(path.join(__dirname,"public")))

app.use("/css",express.static(path.resolve(__dirname,"public/css")))
app.use("/js",express.static(path.resolve(__dirname,"public/js")))

app.use("/",routes)

app.listen(3005,console.log("Server started at port 3005"));

//this will help to use settings in app in the router
module.exports=app;