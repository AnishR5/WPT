const http=require("http");
const url=require("url");
const fs=require("fs");
const m1=require("./functions")

const server=http.createServer(function(req,resp){

    var ur=url.parse(req.url,true);
    console.log(ur)
    resp.writeHeader(200,{"content-type":"text/html"})

    switch(ur.pathname)
    {
        case "/form" :
            var rs=fs.createReadStream("./form.html");
            rs.pipe(resp);
            break;

        case "/submit" :
            console.log(ur)
            if(ur.query.btn ==="Addition")
            {
                var n1=parseInt(ur.query.n1)
                var n2=parseInt(ur.query.n2)
                var ans=m1.addition(n1,n2)
                resp.write("Addition: "+ans);
            }
            else{
                var n1=parseInt(ur.query.n1)
                var ans=m1.factorial(n1);
                resp.write("Factorial: "+ans)

            }
            resp.end();
           



            
    }

})

server.listen(3015,console.log("Server started on port 3015"));