const express=require("express")
const router=express.Router()
const connection=require("../db/dbconnect");

router.get("/employees",function(req,resp){
    connection.query("select * from employee",(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("no data found")+JSON.stringyfy(err)
        }
        else{
            resp.render("index",{empdata:data})
        }
    })
})

router.get("/displayaddform",function(req,resp){
    resp.render("addemp")
})

router.post("/insertEmployee",(req,resp)=>{
    var empid=req.body.empid
    var ename=req.body.empname;
    var sal=req.body.salary;
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err))
        }
        else{
            resp.redirect("/employees")
        }
    })
})

router.get("/edit/:eid",(req,resp)=>{
    console.log("empid",req.params.eid)
    connection.query("select * from employee where empid=?",[req.params.eid],(err,data,fields)=>{
        console.log(data);
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }else{
            resp.render("update-emp",{emp:data[0]});
        }
       
    })
})




module.exports=router;
