var app = angular.module('app', []);

app.controller('mainCtrl', function ($http, $scope) {
  $http.get('http://localhost:3001/books') // ПОЛУЧАЕМ КНИГИ
    .success(function (result) {
      console.log('sucess', result);
      $scope.books = result;
    })
    .error(function (result) {
      console.log('error');
    });

  $scope.addBook = function (book) {
    console.log(book);
    // СОХРАНЯЕМ КНИГУ
    $http.post('http://localhost:3001/books', book) // ДОБАВЛЯЕМ КНИГУ
      .success(function (result) {
        console.log('Book successfully saved to backend');
        $scope.books.push(book); // ОБНОВЛЯЕМ HTML - ДОБАВЛЯЕТСЯ НОВАЯ КНИГА
        $scope.book = null; // ОЧИЩАЕМ ИНПУТ
      })
      .error(function (result) {
        console.log('Error in book post');
  });
}
});
