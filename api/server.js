// server için gerekli olanları burada ayarlayın

// posts router'ını buraya require edin ve bağlayın

const express = require('express');
const server = express();
// // check if "Serkan" is sent to check in postman
//  server.get('/',(req,res)=>{
//     res.send("Serkan")
//   })

//Routers-Address
const postRouter = require("./posts/posts-router")



//Middlewares
server.use(express.json());

//Routers
server.use("/api/posts",postRouter);


//Exports

module.exports = server; 