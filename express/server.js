const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
const multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));
app.get('/index.html',(req,res) => {
	res.sendFile(__dirname + '/' + 'index.html');
	
})
app.post('/upload',(req,res) => {
	console.log(req);//上传的文件
	var des_file = __dirname + "/" + req.files[0].originalname;
   	fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   	});
})

const server = app.listen(3300, () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server is running http://',host,port);
})


