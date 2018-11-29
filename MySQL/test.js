var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port	   :  3307,
  database : 'test'
});
 
connection.connect();
/*var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
//增
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});*/
/*var sql = 'delete from websites where id=6'
//删
connection.query(sql,(err,result) => {
	if(err) {
		console.log('[DELETE ERROR] - ',err.message);
		return
	}
	console.log('--------------------------DELETE----------------------------')
	console.log('DELETE affectedRows',result.affectedRows)
	console.log('------------------------------------------------------------')
	
})*/
/*var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//改
connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});*/
var sql = 'SELECT *FROM websites';
connection.query(sql,(err,result) => {
	if(err) {
		console.log('err',err)
		return
	}
	console.log('-----------------------------SELECT-------------------------------')
	console.log('UPDATE affectedRows:',result);
	console.log('------------------------------------------------------------------')
	
})
connection.end();