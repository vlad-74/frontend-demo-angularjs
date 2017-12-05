var app = angular.module('app', ['ngMockE2E']);

app.run(function ($httpBackend) {
  var books = [
    {
      name: 'AngularJS'
    },
    {
      name: 'EmberJS'
    }
  ];

  /*когда отправляем GET на http://localhost:3001/books, то мы хотим 
  чтобы запрос не посылался и нам отвечал - 200(данные дошли успешно)
  и данные которые нужно отдать - books*/
  $httpBackend.whenGET('http://localhost:3001/books').respond(200, books);

  /*когда отправляем POST на http://localhost:3001/books, то мы хотим 
  чтобы запрос не посылался и нам отвечал - 200(данные дошли успешно)
  и данные добавлялись в books*/
  $httpBackend.whenPOST('http://localhost:3001/books').respond(function (method, url, data) {
    console.log('method', method);
    console.log('url', url);
    console.log('data', data);

    var result = JSON.parse(data);
    books.push(result);
    return [200, result];
  });
});

app.controller('mainCtrl', function ($http, $scope) {
  $http.get('http://localhost:3001/books')
    .success(function (result) {
      console.log('sucess', result);
      $scope.books = result;
    })
    .error(function (result) {
      console.log('error');
    });

  $scope.addBook = function (book) {
    console.log(book);
    $http.post('http://localhost:3001/books', book)
      .success(function (result) {
        console.log('Book successfully saved to backend');
        $scope.books.push(book);
        $scope.book = null;
      })
      .error(function (result) {
        console.log('Error in book post');
      });
  };
});
