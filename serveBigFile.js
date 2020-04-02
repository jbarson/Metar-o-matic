const fs = require('fs');
const server = require('http').createServer();
// console.log(process.argv)
server.on('request', (req, res) => {
  
  // const src = fs.createReadStream('./big.file');
  // src.pipe(res);
});

server.listen(8000);
