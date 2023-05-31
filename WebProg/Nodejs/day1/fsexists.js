const fs=require("fs")
fs.exists("test.txt",function(flag){
    if(flag)
    {
        console.log("exists")
        fs.stat("test.txt",function(er,status){
            if(er)
            {
                console.log("err occ")
            }
            else{
                console.log(status)
            }
        })
    }
    else{
        console.log("not exists")
    }
})