 var request = require('request');
 var requestLoop = setInterval(function(){
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
  host     : 'application-db',
  user     : 'app',
  password : 'Ws0823~LL',
  database : 'application'
});


request('http://application-python-server/ping', function (error, response, body) {
var obj = JSON.parse(body);
connection.connect();
connection.query('insert into events (service,datetime,state) values ("application-nodejs-client","' + obj.datetime +'" ,"' + obj.status + '")', function(error, result, fields){
    console.log(result);
    console.log('status:',  obj.status);
    console.log('datetime:',  obj.datetime);

});

connection.end();
});

},5000);
