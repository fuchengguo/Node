const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(1314,(req,res) => {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server is running http://',host,port);
})
