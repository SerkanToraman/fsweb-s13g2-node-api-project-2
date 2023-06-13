// require your server and launch it here

const server = require('./api/server');
const port = 9000;

console.log("deneme")

server.listen(port, ()=>{
    console.log(`Servers running on port ${port}...`)
})
