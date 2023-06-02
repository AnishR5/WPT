const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const m1=require("./myfunctions")

app.use(bodyparser.urlencoded({extended:false}));

app.get("/form",function(req,resp){
    resp.sendFile("/views/form.html",{root:__dirname})
})

app.get("/submit",function(req,resp){
    if(req.query.btn=="Addition")
    {
        var n1=parseInt(req.query.num1)
        var n2=parseInt(req.query.num2)
        var ans=m1.addition(n1,n2);
        resp.send(`<h1>Num1: ${n1}  Num2:${n2}  Addition= ${ans}</h1>`)

    }
    else{
        var n1=parseInt(req.query.num1)
        var ans=m1.factorial(n1)
        resp.send(`<h1>Num1: ${n1} Factorial= ${ans}</h1>`)
    }   
})

app.listen(3002,console.log("server started at port 3002"));