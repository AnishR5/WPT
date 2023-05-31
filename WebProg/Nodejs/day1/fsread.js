const fs=require("fs")
data= fs.readFileSync("test.txt")
console.log(data.toString())