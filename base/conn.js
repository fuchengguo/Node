const http = require('http');
const url = require("url");

http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
  	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World');
  	response.end();
}).listen(8888);
console.log( __filename );
console.log( __dirname  );
console.log(process.memoryUsage());
    
console.log('Server runing at http:127.0.0.1:8888')
/*var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
//  console.log(1)
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');*/