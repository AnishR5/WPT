const express=require("express")
const app=express();
const bodyparser=require("body-parser")
const f=require("./myfunctions")

app.use(bodyparser.urlencoded({extended:false}))

app.use("/form",(req,resp)=>{
    resp.sendFile("/views/form.html",{root:__dirname})
})

app.use("/operation",(req,resp)=>{
    console.log(req);
    if(req.query.btn=="Addition")
    {
        var n1= parseInt(req.query.num1) ;
        var n2=parseInt(req.query.num2) ;
        var ans=f.addition(n1,n2);
        resp.send(`<h3>Num1:${n1}, Num2:${n2} Addition:${ans}</h3>`);
    }
    else if(req.query.btn=="Substract")
    {
        var n1= parseInt(req.query.num1) ;
        var n2=parseInt(req.query.num2) ;
        var ans=f.substraction(n1,n2);
        resp.send(`<h3>Num1:${n1}, Num2:${n2} Substraction:${ans}</h3>`);
    }
    else if(req.query.btn=="Multiply")
    {
        var n1= parseInt(req.query.num1) ;
        var n2=parseInt(req.query.num2) ;
        var ans=f.multiply(n1,n2);
        resp.send(`<h3>Num1:${n1}, Num2:${n2} Multiply:${ans}</h3>`);
    }
    else if(req.query.btn=="Divide")
    {
        var n1= parseInt(req.query.num1) ;
        var n2=parseInt(req.query.num2) ;
        var ans=f.divide(n1,n2);
        resp.send(`<h3>Num1:${n1}, Num2:${n2} Divide:${ans}</h3>`);
    }
    else if(req.query.btn=="Square")
    {
        var n1= parseInt(req.query.num1) ;
        var ans=f.square(n1);
        resp.send(`<h3>Num1:${n1}, Square:${ans}</h3>`);
    }
    else if(req.query.btn=="Sum")
    {
        var n1= parseInt(req.query.num1) ;
        var ans=f.sum(...n1).split(",").map(Number);
        resp.send(`<h3>Num1:${n1}, Sum:${ans}</h3>`);
    }
})

app.listen(3002,()=>{
    console.log("server started at port 3002")
})
