// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858", "chrome", "firefox");

// var child_process = require('child_process');
// child_process.exec(__dirname + "/g.bat " + __dirname, function(error, stdout, stderr) {
//     console.log(stdout);
// });

// var log = require('./logger')(module);
// var hf = require('help-functions/functions/functions');
// log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ');


let hf = require('help-functions');

function myread(NODE_P){
	var fs = require('fs'); 
	var stream = new fs.ReadStream(NODE_P, {encoding: 'utf-8'});
	stream.on('readable', function() {
	  var data = stream.read();
	  if(data != null){'\n' + console.log('ФАЙЛ ' + NODE_P.split('dir/')[1] + '\n' + gl_hr2 + '\n' 
	  	+ data.toString() + '\n' + gl_hr);}
	});

	stream.on('end', function() {
	  // console.log('\n' + gl_hr);
	});
};
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
console.log(gl_hr);
 let str = `
1. angular-mocks: вместо реальной отправки запроса на backend angular-mocks его перехватывает
  и отдает данные которые вы захотите!!!
2. <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.5/angular-mocks.js"></script>
3. var app = angular.module('app', ['ngMockE2E']);
4. app.run(function ($httpBackend) {})
5. $httpBackend.whenGET('http://localhost:3001/books').respond(200, books);
6. $httpBackend.whenPOST('http://localhost:3001/books').respond(function (method, url, data) {
    var result = JSON.parse(data);
    books.push(result);
    return [200, result];
  });
 `
console.log(str + '\n' + gl_hr);

myread(__dirname + "/dir/index.html");

myread(__dirname + "/dir/main.js");

setTimeout(function(){
	var open = require("open");
	open(__dirname + "/dir/index.html");
}, 3000);