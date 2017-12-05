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
// console.log(gl_hr);
// myread(__dirname + "/dir/index.html");
//-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------
console.log(gl_hr);
 let str = `
1. В КОНТРОЛЛЕРЕ - $scope.getBookmark = function () {return "My bookmark";};
1.1. В HTML (В ng-controller)- {{getBookmark()}}
2. $scope.setHello = function (text) {$scope.hello = text;}; МЕНЯЕМ ИМЕЮЩУЮСЯ ПЕРЕМЕННУЮ
2.1. В HTML ДОБАВИТЬ КНОПКУ - <button ng-click='setHello("Foo")'>Foo</button>
2.1.1. ng-click - ВЕШАЕТ КЛИК НА КНОПКУ
3. ДОБАВЛЯЕМ ФУНКЦИИ В ФАБРИКУ
3.1. app.factory('myFactory', function () {
	return {
		hello: function () {
			return 'hello world!!';
		}
	}
});
3.2. "ПОДМЕШАТЬ" К $scope КОНТРОЛЛЕРА myFactory 
	app.controller('firstCtrl', function($scope, myFactory) {});
3.3. $scope.myFactory = myFactory;
3.4. В HTML ДОБАВИТЬ {{myFactory.hello()}} - ВЫЗЫВАЕМ ФУНКЦИЮ ИЗ ФАБРИКИ
 `
 console.log(str + '\n' + gl_hr);

 myread(__dirname + "/dir/index.html");

 myread(__dirname + "/dir/main.js");

 setTimeout(function(){
	var open = require("open");
	open(__dirname + "/dir/index.html");
}, 5000);
