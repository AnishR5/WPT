var buf1=Buffer.alloc(400);
var len=buf1.write("Hello World!!")
console.log(len)
console.log(buf1.toString())