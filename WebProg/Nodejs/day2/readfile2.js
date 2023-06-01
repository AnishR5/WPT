const fs=require("fs");
fs.exists("test2.txt",function(flag){
    if(flag)
    {
        console.log("exists");
            fs.stat("test2.txt",function(err,status){
                if(err)
                {
                    console.log("Err occ ",err)
                }
                else
                {
                    fs.open("test2.txt","r",function(err,fd){
                        var buff=Buffer.alloc(status.size);
                        fs.read(fd,buff,0,500,null,function(err,bytesread,buffer){
                            console.log(buffer.toString());
                        })
                    })

                }

            })

    }else{
        console.log("not exixts")
    }
})
