 var request = require('request');
 var requestLoop = setInterval(function(){
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
  host     : '172.17.0.2',
  user     : 'app',
  password : 'Ws0823~LL',
  database : 'application'
});


request('http://54.93.38.141/ping', function (error, response, body) {
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
