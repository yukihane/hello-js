'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date();
  console.info('[' + now + '] Requested by ' + req.connection.remoteAddress);
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });

  switch (req.method) {
    case 'GET':
      res.write('GET ' + req.url);
      break;
    case 'POST':
      res.write('POST ' + req.url);
      let rawData = '';
      req.on('data', (chunk) => {
        rawData = rawData + chunk;
      }).on('end', () => {
        console.info('[' + now + '] Data posted: ' + rawData);
      });
      break;
    default:
      break;
  }
  res.end();
}).on('error', (e) => {
  console.error('[' + new Date() + '] Server Error', e);
}).on('clientError', (e) => {
  console.error('[' + new Date() + '] Client Error', e);
});
const port = 8000;
server.listen(port, () => {
  console.info('[' + new Date() + '] Listening on ' + port);
});
