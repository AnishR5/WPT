const mysql=require("mysql");

const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"admin@123",
    "port":3306,
    "database":"mydb"
})
mysqlconnection.connect((err)=>{
    if(err)
    {
        console.log("error occ"+JSON.stringify(err));
    }
    else
    {
        console.log("connection successfull")
    }
})

module.exports=mysqlconnection;