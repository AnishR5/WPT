const http=require("http")
var server=http.createServer(function(req,resp){
    resp.writeHeader(200,{"content-type":"text/html"})
    resp.write("<h2>Welcome to IACSD</h2>");
    resp.end("<h2>End of Prog</h2>")
})
server.listen(3015,console.log("Server started at port 3015"))