const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // res.end("Server created")
    fs.writeFileSync("read.txt","Javacsript Class")
    // fs.appendFileSync("read.txt",Hace a nice day!")
    // const buf_data = fs.readFileSync("read.txt")
    // console.log(buf_data);
    // console.log(buf_data.toString());
})

server.listen(8000,"localhost",()=>{
    console.log("server is running on 8000 port");
})