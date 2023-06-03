const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect");

router.get("/employees",(req,resp)=>{
    connection.query("select * from employee",(err,data)=>{
        if(err){
            resp.status(500).send("Data noy found "+JSON.stringify(err))
        }
        else{
            resp.send(data)
        }
    })
})

router.get("/employees/employee/:empid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.empid],(err,data)=>{
        if(err)
        {
            resp.status(500).send("data not found"+JSON.stringify(err))
        }else{
            resp.send(data[0]);
        }
    })
})


router.post("/employees/employee/insert",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.empname;
    var sal=req.body.salary;
    connection.query("insert into employee values(?,?,?) ",[empid,ename,sal],(err,result)=>{
        console.log(result);
        if(err){
            resp.status(500).send("data not inserted")
        }
        else{
            if(result.affectedRows> 0)
               resp.send("{'msg':'inserted successfully'}")
            else
            resp.send("{'msg':'not inserted '}")
        }
    })
})

router.put("/employees/employee/:empid",(req,resp)=>{
    var empid=req.params.empid;
    var ename=req.body.empname;
    var sal=req.body.salary;
    connection.query("update employee set empname=?,salary=? where empid=?",[empid,ename,sal],(err,result)=>{
        console.log(result)
        if(err)
        {
            resp.status(500).send("Table not updated");
        }
        else{
            if(result.affectedRows> 0)
        resp.send("{'msg':'update successfully'}")
     else
     resp.send("{'msg':'not updated '}")
        }
    })

    router.delete("/employees/employee/:empid",(req,resp)=>{
        var empid=req.params.empid
        connection.query("delete from employee where empid=?",[empid],(err,result)=>{
            if(err)
            {
                resp.status(500).send("data not deleted")
            }
            else{
                if(result.affectedRows>0)
                {
                    resp.send("Data deleted")
                }
                else
                {
                    resp.send("Data not deleted")
                }
            }

        })
    })
})

module.exports=router;