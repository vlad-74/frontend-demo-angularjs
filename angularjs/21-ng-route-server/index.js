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
1. <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular-route.js"></script>
2. <ng-view></ng-view> - ТЕГ ВНУТРЬ КОТОРОГО БУДЕТ ВЫВОДИТСЯ СОДЕРЖИМОЕ КАЖДОГО РОУТА
3. var app = angular.module('app', ['ngRoute']);
4. КОНФИГУРИРУЕМ РОУТЕР :
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })
    .when('/posts', {
      template: '<h1>Posts for my site</h1>'
    })
});
5. МЕНЮ В HTML : 
<a href="#/">Home</a>
<a href="#/posts">Posts</a>
`
console.log(str + '\n' + gl_hr);

myread(__dirname + "/dir/index.html");

myread(__dirname + "/dir/main.js");

myread(__dirname + "/dir/backend.js");

setTimeout(function(){
	var child_process = require('child_process');
	child_process.exec("cd 21-ng-route-server/dir&node backend.js", function(error, stdout, stderr) {
	    console.log(stdout);
	});
}, 3000);
