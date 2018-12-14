var dns = require('dns');
var options = {all: true};

dns.lookup('a.cgtt3344.com', options, function(err, address, family){
    if(err) throw err;
    console.log('例子B: ' + JSON.stringify(address));
});