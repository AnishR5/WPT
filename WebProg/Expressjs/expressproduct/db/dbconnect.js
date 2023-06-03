const mysql=require("mysql")

const mysqlconnect=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"admin@123",
    "database":"mydb",
    "port":3306

})

mysqlconnect.connect((err)=>{
    if(err)
    {
        console.log("SQL Connecection Unsuccessful");
    }
    else{
        console.log("SQL connection unsuccessful")
    }
})


module.exports=mysqlconnect;