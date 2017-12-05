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
1. В HTML СОЗДАТЬ DIV С НЕСУЩЕСТВУЮЩИМ АТРИБУТОМ (например foo) - <div foo>foo</div>
2. В MAIN.JS - app.directive('foo', function () {
  return {
    link: function (scope, element, attrs) {
      element.on('click', function () {
        if (element.text() === 'foo') {
          element.text('bar');
        } else {
          element.text('foo');
        }
      });
    }
  };
});
2.1. link ЭТО ФУНКЦИЯ КОТОРАЯ СРАБАТЫВАЕТ КОГДА ДОМ ЭЛЕМЕНТ УЖЕ ОТРИСОВАЛСЯ НА СТРАНИЦЕ
2.2. scope - ОБЛАСТЬ ВИДИМОСТИ ДИРЕТИВЫ - console.log(scope, 'scope');
2.3. element - JQ ЛАЙТ ЭЛЕМЕНТ - console.log(element, 'element');
2.4. attrs - ВСЕ АТРИБУТЫ КОТОРЫЕ ЕСТЬ НА НАШЕЙ ДИРЕКТИВЕ - console.log(attrs, 'attrs');
 `
 console.log(str + '\n' + gl_hr);

 myread(__dirname + "/dir/index.html");

 myread(__dirname + "/dir/main.js");

 setTimeout(function(){
	var open = require("open");
	open(__dirname + "/dir/index.html");
}, 5000);
