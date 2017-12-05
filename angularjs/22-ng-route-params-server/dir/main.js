var app = angular.module('app', ['ngRoute']);

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

app.controller('homeCtrl', function ($scope) {
  console.log('HomeCtrl');
  $scope.model = {
    message: 'This is my beautifull homepage'
  }
});

//ДЛЯ postsCtrl ИНЖЕКТИМ postsFactory
app.controller('postsCtrl', function ($scope, postsFactory) {
  console.log('postsCtrl');
  $scope.posts = postsFactory
});

//ДЛЯ postCtrl ИНЖЕКТИМ postsFactory И ДЛЯ ВЫБОРА КОНКРЕТНОЙ СТАТЬИ - $routeParams
//$routeParams - ДОСТУП К ДИНАМИЧЕСКИМ ПЕРЕМЕННЫМ УРЛА
app.controller('postCtrl', function ($scope, $routeParams, postsFactory) {
  console.log($routeParams.postId);
  var postId = Number($routeParams.postId); // $routeParams.postId ЭТО СТРОКА ПОЭТОМУ Number
  $scope.post = _.findWhere(postsFactory, {id: postId});
});

app.factory('postsFactory', function () {
  return [
    {
      id: 1,
      name: 'Why AngularJS is good?'
    },
    {
      id: 2,
      name: 'I love AngularJS'
    },
    {
      id: 3,
      name: 'Is AngularJS easy to learn'
    }
  ]
});
