const express=require("express")
const app=express();
const bodyparser=require("body-parser")
const f=require("./myfucntions")

app.use(bodyparser.urlencoded({extended:false}))

app.use("/form",(req,resp)=>{
    resp.sendFile("/public/form.html",{root:__dirname})
})

app.use("/submit",(req,resp)=>{
    var n=parseInt(req.query.num);
    if(n<5)
    {
        var ans=f.factorial(n);
        resp.send(`<h3>Number:${n} Factorial:${ans}</h3>`)
    }
    else if(n>5 && n<10)
    {
        var ans=f.printable(n);
        resp.send(`<h3>Number:${n} Table:${ans}</h3>`)
    }
    else{
        var ans=f.myprime(n);
        resp.send(`<h3>Number:${n} Table: <br> ${ans}</h3>`)
    }


   
})

app.listen(3006,()=>{
    console.log("Server started on port 3006")
})