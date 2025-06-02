const http = require('http');


const server = http.createServer((req,res)=>{
    const{url,method,headers} = req; // our interest is in the url and method
    console.log(headers);
    if(url === "/"){
        res.write("<title>Home Page</title>");
        res.write("<h1>Romaisa</h1>");
        res.end();
    }
    else if(url === "/about"){
        res.write("<h1>About Page</h1>");
        res.end();
    }
    else{
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
})

server.listen(4000);


//     console.log("The server has been hit by the client!");
//     console.log("url",url);
//     console.log("method",method);
//     //console.log(req);
//     res.write("<h1>Server is Up & Running</h1>");
//     res.end();