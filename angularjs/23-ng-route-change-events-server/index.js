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
1. Подписаться на евенты : 
1.1. начало перехода с одного роута на другой (routeChangeStart)
1.2. успешный переход на какой нибудь роут (routeChangeSuccess)
2. Для этого используется такие евенты как routeChangeStart и routeChangeSuccess
3. app.run выполняется самым первым, как только наше приложение инициализировалось
4. заинджектим в run $rootScope = app.config(function ($routeProvider) {})
4.1. $rootScope - ГЛАВНЫЙ  Scope !!!!!
5. Когда мы используем ngRoute, то мы на любой роут можем повесить event - $on
  $rootScope.$on('$routeChangeStart', function (event, current, previous, reject) {
    console.log('changestart', arguments);
  });
5.1. arguments это: 
Первым обьектом является event. То есть то событие, которое происходит. 
Вторым параметром у нас идет current. Это обьект с данными текущего роута
Мы можем вытащить информацию контролле, originalPath или т.д.
6. $routeChangeSuccess
$rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
  console.log('changesuccess', arguments);
  $rootScope.currentPath = current.$$route.originalPath;
});

`
console.log(str + '\n' + gl_hr);

myread(__dirname + "/dir/index.html");

myread(__dirname + "/dir/main.js");

myread(__dirname + "/dir/posts.html");

myread(__dirname + "/dir/post.html");

setTimeout(function(){
	var child_process = require('child_process');
	child_process.exec("cd 23-ng-route-change-events-server/dir&node backend.js", function(error, stdout, stderr) {
	    console.log(stdout);
	});
}, 3000);
