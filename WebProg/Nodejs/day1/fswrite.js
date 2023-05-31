const fs=require("fs")
fs.writeFile("writefile.txt","Sampling by writing into file by write function",function(err,data){
    if(err)
    {
        console.log("Error".err)
    }
    else
    {
        fs.readFile("writefile.txt",function(err,data){
            if(err)
            {
                console.log("Error".err)
            }
            else{
                console.log(data.toString())
            }
        })
    }
})