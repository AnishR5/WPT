const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect");

router.get("/products",(req,resp)=>{
    connection.query("select * from product",(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("Error occured "+JSON.stringify(err))
        }
        else
        {
            resp.render("index",{prdata:data})
        }
    })
})

router.get("/displayaddform",(req,resp)=>{
    resp.render("addprd")

})

router.post("/insertPrd",(req,resp)=>{
    var pid=req.body.prdid;
    var pname=req.body.pname;
    var price=req.body.price;
    connection.query("insert into product values (?,?,?)",[pid,pname,price],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err))
        }
        else{
                resp.redirect("/products");
        }
    })
})

router.get("/edit/:pid",(req,resp)=>{
    connection.query("select * from product where prdid=?",[req.params.pid],(err,data,fields)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err))
        }
        else
        {
            resp.render("updateprd",{prd:data[0]})
        }
    })
})

router.post("/updatePrd",(req,resp)=>{
    var pid=req.body.prdid;
    var pname=req.body.pname;
    var price=req.body.price;
    connection.query("update product set pname=?,price=? where prdid=?",[pname,price,pid],(err,result)=>{
        if(err){
            resp.status(500).send("data not addes"+JSON.stringify(err))
        }
        else{
            resp.redirect("/products")
        }
    })
})

router.get("/delete/:prdid",(req,resp)=>{
    connection.query("delete from product where prdid=?",[req.params.prdid],(err,result)=>{
        if(err){
            resp.status(500).send("Data not deleted"+JSON.stringify(err))
        }
        else{
            resp.redirect("/products")
        }
    })
})




module.exports=router;