const http = require('http');

const server = http.createServer((req, res) => {
    const{url,method}= req;
    if(url === "/"){
        res.statusCode = 200;
        res.setHeader =("Content-Type","text/html");
        res.write("<h1>Welcome to the home page</h1>");
        return res.end();
    }
    else if(url === "/products"&& method ==="GET"){
        res.statusCode = 200;
        res.setHeader =("Content-Type","text/html");
        const products =["Laptop","Mouse","Cups","Tea set","Doll house","Books"];
        res.write("<h1>Products</h1>");
        res.write("<ul>");
        for(let i=0;i<products.length;i++){
            res.write(`<li>${products[i]}</li>`);
        }
        return res.end("<ul/>");
        }
        else if(url === "/products" && method === "POST"){
            res.statusCode = 200;
            res.setHeader=("content-Type","text/html");
            res.write("<h1>Creating a product functionality is not implemented yet</h1>");
            return res.end();
        }
        else if(url ==="/blogs"){
            res.statusCode = 200;
            res.setHeader=("Contennt-Type","text/html");
            res.write("<h1>Blog: Criminal Psychology</h1>");
            res.write("<h2>How criminals are made?!</h2>");
            res.write("<p>There are two types of criminals on the basis of their origin</p>");
            res.write("<ul>");
            res.write("<li>Born criminals</li>");
            res.write("<li>Made criminals</li>");
            res.write("</ul>");

            res.write("<h3>Made criminals</h3>");
            res.write("<p>There are four basic aspects of psychological theories of crime, which say that crime is result of failures in psychological development, learned behaviors of aggression and violence, inherent personality traits, and the relationship of criminality to mental illness.</p>");

            res.write("<h3>Born criminals</h3>");
            res.write("<p>Some people are born with a genetic predisposition to criminal behavior. This is believed to be due to a combination of factors, including heredity, environment, and upbringing.</p>");
            res.write("<h4>XXY THEORY OF CRIMINALITY</h4>")
            res.write("<p>The XYY (supermale) chromosomal syndrome may act on the brain's limbic system (which regulates man's most primitive drives, including his impulses toward violence) and somehow help trigger violent criminal acts.Thus the myth persisted that males with an extra Y chromosome were likely to manifest excessive violence and other undesirable social traits.")
            return res.end("</p>");
        }
        else{
        
            res.statusCode = 404;
            res.setHeader=("Contennt-Type","text/html");
            res.write("<h1>Route Not Found: 404</h1>")
            res.end();
        }
})

server.listen(4000);