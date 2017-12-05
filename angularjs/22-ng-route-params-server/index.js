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
      templateUrl: 'posts.html',
      controller: 'postsCtrl'
    })
    .when('/posts/:postId', { // :postId - КАКОЙ ПАРАМЕТР В УРЛЕ БУДЕТ МЕНЯТЬСЯ
      templateUrl: "post.html",
      controller: 'postCtrl'
    })
    .otherwise({ //ПРАВИЛО КОГДА НИ ОДНО ИЗ УСЛОВИЙ (.when) ВЫШЕ НЕ ПОДХОДИТ 
      template: '<h1>404 no such page</h1>'
    })
});
5. ДЛЯ postsCtrl ИНЖЕКТИМ postsFactory
6. ВЫВОД ПОСТОВ В HTML :
<div ng-repeat="post in posts">
    <a href="#/posts/{{post.id}}">{{post.name}}</a>
</div>
7. ДЛЯ postCtrl ИНЖЕКТИМ postsFactory И ДЛЯ ВЫБОРА КОНКРЕТНОЙ СТАТЬИ - $routeParams
8. $routeParams - ДОСТУП К ДИНАМИЧЕСКИМ ПЕРЕМЕННЫМ УРЛА
9. ВЫВОД ПОСТА В HTML : <h1>{{post.name}}</h1>
`
console.log(str + '\n' + gl_hr);

myread(__dirname + "/dir/index.html");

myread(__dirname + "/dir/main.js");

myread(__dirname + "/dir/posts.html");

myread(__dirname + "/dir/post.html");

setTimeout(function(){
	var child_process = require('child_process');
	child_process.exec("cd 22-ng-route-params-server/dir&node backend.js", function(error, stdout, stderr) {
	    console.log(stdout);
	});
}, 3000);
