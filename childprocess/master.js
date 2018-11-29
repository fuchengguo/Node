const fs = require('fs');
const child_process = require('child_process');
 
for(var i=0; i<3; i++) {
	//上一个进程结束后执行下一个进程，退出 ——> 执行 ——> 下一个进程退出
    var workerProcess = child_process.exec('node support.js '+i, function (error, stdout, stderr) {
        if (error) {
        	console.log('error',error)
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });
 
    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}
//$ node master.js 
//子进程已退出，退出码 0
//stdout: 进程 1 执行。
//
//stderr: 
//子进程已退出，退出码 0
//stdout: 进程 0 执行。
//
//stderr: 
//子进程已退出，退出码 0
//stdout: 进程 2 执行。
//
//stderr: 