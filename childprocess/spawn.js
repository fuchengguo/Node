const fs = require('fs');
const child_process = require('child_process');
 
for(var i=0; i<3; i++) {
	//不停执行子进程，不等上一个进程结束。上一个进程可能在任何时候结束。而且先执行后退出
   var workerProcess = child_process.spawn('node', ['support.js', i,i+1]);
// console.log(workerProcess.stdout)
   workerProcess.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
   });
 
   workerProcess.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
   });
 
   workerProcess.on('close', function (code) {
      console.log('子进程已退出，退出码 '+code);
   });
}
//$ node master.js stdout: 进程 0 执行。
//
//子进程已退出，退出码 0
//stdout: 进程 1 执行。
//
//子进程已退出，退出码 0
//stdout: 进程 2 执行。
//
//子进程已退出，退出码 0