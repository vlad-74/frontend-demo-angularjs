var express = require('express');
var cors = require('cors'); // ДЛЯ КРОССДОМЕННОГО ЗАПРОСА (для запросов на localhost)
var bodyParser = require('body-parser'); // ЧТОБЫ ПОЛУЧИТЬ body ИЗ POST ЗАПРОСА
var app = express(); //ИНИЦИАЛИЗАЦИЯ express

//НАСТРОЙКА bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//РАЗРЕШИТЬ КРОССДОМЕННЫЕ ЗАПРОСЫ
app.use(cors());

var books = [
  {
    name: 'AngularJS'
  },
  {
    name: 'EmberJS'
  },
  {
    name: 'ReactJS'
  }
];

app.get('/books', function (req, res) {
  res.send(books); //backend ОТДАЕТ КНИГИ ПО ЗАПРОСУ localhost:3001/books
});

//backend ПОЛУЧАЕТ НОВУЮ КНИГУ
app.post('/books', function (req, res) {
  var book = {
    name: req.body.name // НАЗВАНИЕ ИЗ body
  };
  books.push(book); //В МАССИВ books НА backend ДОБАВЛЕТСЯ КНИГА
  res.send(book); //HTML ОБНОВЛЯЕТСЯ НОВОЙ КНИГОЙ
});

var server = app.listen(3001, function () {
  console.log('backend started');
});
