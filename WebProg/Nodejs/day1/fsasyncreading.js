const fs=require("fs")
fs.readFile("myfunctions2.js",function(err,data){             //async file read
    if(err)
    {
        console.log("Err occ")
    }
    else
    {
        console.log(data.toString())
    }
})
fs.readFile("bufferdemo1.js",function(err,data){          //async file read
    if(err)
    {
        console.log("Err occ")
    }
    else
    {
        console.log(data.toString())
    }  
})

data=fs.readFileSync("test.txt")         //sync file read will load first
console.log("Sync read ")
console.log(data.toString()) 
console.log("Async read ")