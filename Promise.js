 function api() {
 	return new Promise((resolve,reject) => {
 		resolve('鸡蛋炒饭');
 	})
 }
 api.then((res) => {
 	console.log(111)
 })