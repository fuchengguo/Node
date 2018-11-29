const fs = require('fs');
const child_process = require('child_process');
//执行顺序随机，但必定先执行再推出
for(var i = 0; i < 3; i++) {
	var worker_process = child_process.fork("support.js", [i]);
	worker_process.on('close', function(code) {
		console.log('子进程已退出，退出码 ' + code);
	});
}