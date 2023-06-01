const http=require("http")
const url=require("url")
const fs=require("fs")
const m=require("./authenticate")

const server=http.createServer(function(req,resp){
    var v=url.parse(req.url,true);
    resp.writeHeader(200,{"content-type":"text/html"});

    switch(v.pathname)
    {
        case "/login":
            var rs=fs.createReadStream("./login.html");
            rs.pipe(resp);
            break;

        case "/register":
            var rs=fs.createReadStream("./registration.html")
            rs.pipe(resp);
            break;

        case "/validateuser" :
            var unm=v.query.uname;
            console.log(unm)
            var pass=v.query.passwd;
            console.log(pass)
          var flag= m.validateuser(unm,pass)
          console.log(flag)
          if(flag)
          {
            resp.write("<h3>Login succesfull</h3>")
            resp.write("<a href='/login'>Login</a>  <a href='/register'>Registration</a>")
            resp.end();
          }
          else
          {
            resp.write("<h3>Login unsuccesfull</h3>")
            resp.write("<a href='/login'>Login</a>  <a href='/register'>Registration</a>")
            resp.end();
          }
        break;

        case "/registeruser" :
            var uname=v.query.uname;
            var pass=v.query.passwd;
            var flag=m.adduser(uname,pass);
            if(flag)
            {
                resp.write("Successfull registration")
                resp.write("<a href='/login'>Login</a>  <a href='/register'>Registration</a>")
                resp.end();

            }
            else
            {
              resp.write("<h3>Registartion unsuccesfull</h3>")
              resp.write("<a href='/login'>Login</a>  <a href='/register'>Registration</a>")
              resp.end();
            }
            break ;

        default :
        resp.write("<h3>Please login or register</h3>")
        resp.write("<a href='/login'>Login</a>  <a href='/register'>Registration</a>")
        resp.end();
        break;
            

    }

})
server.listen(3005,console.log("Server started at port no 3005"))