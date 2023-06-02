const express=require("express");
const app=express();
const bodyparser=require("body-parser")
const m=require("./myfunctions");

app.use(bodyparser.urlencoded({extended:false}))

app.get("/form",function(req,resp){
    resp.sendFile("/views/form.html",{root:__dirname})
})

app.post("/submit",function(req,resp){
    console.log(req)
    if(req.body.btn=="Addition")
    {
        var n1=parseInt(req.body.num1)
        var n2=parseInt(req.body.num2)
        var ans=m.addition(n1,n2);
        resp.send(`<h3>Num1= ${n1} Num2=${n2} Addition=${ans}</h3>`)
    }
    else{
        var n1=parseInt(req.body.num1)
        var ans=m.factorial(n1)
        resp.send(`<h3>Num1= ${n1} Factorial=${ans}</h3>`)
    }
})


app.listen(3008,console.log("Server started at port 3008"))