/*var fs = require("fs");

// 异步读取
fs.readFile('Node.js', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('Node.js');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");*/
var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('test.html', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");     
});