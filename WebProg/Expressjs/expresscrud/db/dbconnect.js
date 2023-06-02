const mysql=require("mysql")

//create conn

var mysqlconnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'admin@123',
    database:'mydb',
    port:3306
});

mysqlconnection.connect((err)=>{
    if(err)
    {
        console.log("Connection failed"+JSON.stringify(err));
    }
    else{
        console.log("Connection successfull!!")
    }
})
module.exports=mysqlconnection;