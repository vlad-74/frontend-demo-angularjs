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
1. app.run - ФУНКЦИЯ КОТОРАЯ ВЫПОЛНЯЕТСЯ ПРИ ЗАПУСКЕ ПРИОЖЕНИЯ. 
  ЭТА ФУНКЦИЯ ВЫПОЛНИТСЯ ПЕРВОЙ (и методы внутри него) КОГДА СТАРТУЕТ ANGULAR!!!
2. ОЧЕНЬ УДОБНО КЭШИРОВАТЬ ШАБЛОНЫ ПРИ СТАРТЕ ПРИЛОЖЕНИЯ

 `
 console.log(str + '\n' + gl_hr);

 myread(__dirname + "/dir/index.html");

 myread(__dirname + "/dir/main.js");

 setTimeout(function(){
	var open = require("open");
	open(__dirname + "/dir/index.html");
}, 5000);
