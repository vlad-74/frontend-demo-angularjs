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
1. <html ng-app='app'> = ТЕПЕРЬ ПРИЛОЖЕНИЕ ANGULAR БУДЕТ НАЗЫВАТЬСЯ app 
 И ВСЕ СОЗДАВАЕМЫЕ СУЩНОСТИ БУДУТ ПРИВЯЗВЫВАТЬСЯ К app
2. ИНИЦИАЛИЗИРОВАТЬ app В ФАЙЛЕ main.js : var app = angular.module('app', []);
3. ДОБАВЛЕНИЕ КОНТРОЛЛЕРА ЧЕРЕЗ ТЕГ ng-controller = <div ng-controller='myCtrl'></div>
3.1. СОЗДАВАЯ НОВЫЙ КОНТРОЛЛЕР СОЗДАЕТСЯ НОВАЯ ОБЛАСТЬ ВИДИМОСТИ - НОВЫЙ СКОУП scope
3.2. !!! app.controller('myCtrl', function ($scope) {}); !!!
3.3. !!! ЧТОБВЫ ВЫВЕСТИ ЧТО-ТО НА ЭКРАН НУЖНО ИСПОЛЬЗОВАТЬ $scope !!!
3.3.1. app.controller('myCtrl', function ($scope) {
	  $scope.hello = 55;
	  $scope.myBook = 'AngularJS';
	}); 
 `
 console.log(str + '\n' + gl_hr);

 myread(__dirname + "/dir/index.html");

 myread(__dirname + "/dir/main.js");

 setTimeout(function(){
	var open = require("open");
	open(__dirname + "/dir/index.html");
}, 5000);