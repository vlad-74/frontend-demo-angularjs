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
1. ПРИМЕНИТЬ ФИЛЬТРЫ - КОГДА ДАННЫЕ КОТОРЫЕ НАХОДЯТСЯ КОНТРОЛЛЕРЕ НУЖНО ВЫВЕСТИ 
   В ДРУГОМ ВИДЕ ИЛИ ФОРМАТЕ.
2. ФИЛЬТРЫ ПОЗВОЛЯЮТ МЕНЯТЬ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ НА КАКОЕ УГОДНОЕ И КАК УГОДНО !!!
3. ФИЛЬТРЫ В HTML ПРИМЕНЯЮТСЯ ЧЕРЕЗ ПАЛКУ | ПЛЮС НАЗВАНИЕ ФИЛЬТРА = {{money1 | moneyFilter}}
4. app.filter('moneyFilter', function () {
  return function (str) {
    var lastChar = str.slice(-1),
        firstChar = str.slice(0, 1),
        slicedPart;

    if (lastChar === '$') {
      slicedPart = str.slice(0, str.length - 1);
      return '$' + slicedPart;
    } else if (firstChar === '$') {
      return str;
    } else {
      return '$' + str;
    }
  };
});
 `
 console.log(str + '\n' + gl_hr);

 myread(__dirname + "/dir/index.html");

 myread(__dirname + "/dir/main.js");

 setTimeout(function(){
	var open = require("open");
	open(__dirname + "/dir/index.html");
}, 5000);
