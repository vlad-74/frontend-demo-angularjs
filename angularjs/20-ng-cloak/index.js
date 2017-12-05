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
1. ЕСЛИ В HTML СКРИПТЫ ПЕРЕНЕСТИ ВНИЗ (В КОНЦЕ body) ТО ПОЯВИТСЯ МИГАНИЕ У ПЕРЕМЕННОЙ {{ 1 + 1 }}
2. ВАРИАНТ 1 : <div ng-bind="{{ 1 + 1 }}"></div>
3. ВАРИАНТ 2 (ПРЕДПОЧТИТЕЛЬНЫЙ) : {{ 1 + 1 }}
3.1. <body ng-cloak> 
3.2. ДОБАВИТЬ В style.css (в виде атрибутов или классов) КОТОРЫЙ ПРИМЕНИТЬСЯ НА ng-cloak
[ng\\:cloak], [ng-cloak], .ng-cloak {
  display: none;
}
3.4. ВЕСЬ КОНТЕНТ ВНУТРИ ng-cloak ПОЛНОСТЬЮ СКРЫТ ДО МОМЕНТА КОГДА ЕГО СКОМПИЛИРУЕТ АНГУЛАР
`
console.log(str + '\n' + gl_hr);

myread(__dirname + "/dir/index.html");

myread(__dirname + "/dir/main.js");

myread(__dirname + "/dir/style.css");

setTimeout(function(){
	var open = require("open");
	open(__dirname + "/dir/index.html");
}, 5000);
