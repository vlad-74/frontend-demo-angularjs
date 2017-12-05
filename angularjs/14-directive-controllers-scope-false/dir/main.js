var app = angular.module('app', []);


app.controller('mainCtrl', function ($scope) {
  $scope.hello = "Привет из $scope контроллера!"
  $scope.posts = [
    {
      name: "This is post about cats"
    },
    {
      name: "This is post about dogs"
    }
  ];

  $scope.getPosts = function () {
    return $scope.posts;
  };
});


app.directive('post', function () {
  return {
    scope: false,
    template: "<div ng-repeat='post in getPosts()'>{{post.name}}</div>",
    link: function (scope, element, attrs) {
      console.log('scope', scope);
      //при scope: false - ЗАТИРАЕТ $scope.hello из контроллера!" (при scope:true-нет)
      scope.hello = "Привет из $scope директивы!" 
    }
  };
});
