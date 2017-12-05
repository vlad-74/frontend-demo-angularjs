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
	console.log('\n' + gl_hr + '\n' + "START" + '\n');
	stream.on('readable', function() {
	  var data = stream.read();
	  if(data != null){console.log(data.toString());}
	});

	stream.on('end', function() {
	  console.log("THE END" + '\n' + gl_hr);
	});
};
// console.log(gl_hr);
// myread(__dirname + "/dir/index.html");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
console.log(gl_hr);
 let str = `
1. https://angularjs.org/
2. нажать DOWNLOAD ANGULARJS
3. скопировать ссылку https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js
4. поместить ссылку в html
5. инициализация ANGULARJS - добавить на любой тег (html, body, div) атрибут ng-app = <div ng-app>
6. переменная в html - двойные скобки {{}} = {{1 + 1}}
7. биндинг (связывание) реализуется за счет атрибута ng-model="имя переменной"
7.1. <input type="text" ng-model="hello">  {{hello + " world"}}
 `
console.log(str);

myread(__dirname + "/dir/index.html");

setTimeout(function(){
	var open = require("open");
	open(__dirname + "/dir/index.html");
}, 5000);


// let hf = require('help-functions');

// function myread(NODE_P){
// 	var fs = require('fs'); 
// 	var stream = new fs.ReadStream(NODE_P, {encoding: 'utf-8'});
// 	stream.on('readable', function() {
// 	  var data = stream.read();
// 	  if(data != null){'\n' + console.log('ФАЙЛ ' + NODE_P.split('dir/')[1] + '\n' + gl_hr2 + '\n' 
// 	  	+ data.toString() + '\n' + gl_hr);}
// 	});

// 	stream.on('end', function() {
// 	  // console.log('\n' + gl_hr);
// 	});
// };
// //-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
// console.log(gl_hr);
//  let str = `
// 1. 
// `
// console.log(str + '\n' + gl_hr);

// myread(__dirname + "/dir/index.html");

// myread(__dirname + "/dir/main.js");

// setTimeout(function(){
// 	var open = require("open");
// 	open(__dirname + "/dir/index.html");
// }, 5000);
