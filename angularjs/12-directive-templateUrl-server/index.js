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
1. С СЕРВЕРОМ - СОЗДАТЬ ФАЙЛ bookmarks.html И ЕГО СОДЕРЖИМОЕ БУДЕТ ИСПОЛЬЗОВАТЬСЯ В templateUrl
2. БЕЗ СЕРВЕРА - В HTML ВСТАВИТЬ <script type="text/ng-template" id='bookmarks.html'></script>
`
 console.log(str + '\n' + gl_hr);

 myread(__dirname + "/dir/frontend/index.html");

 myread(__dirname + "/dir/frontend/main.js");

 myread(__dirname + "/dir/frontend/bookmarks.html");

 setTimeout(function(){
	var child_process = require('child_process');
	child_process.exec("cd 12-directive-templateUrl-server/dir&node index.js", function(error, stdout, stderr) {
	    console.log(stdout);
	});
}, 5000);
