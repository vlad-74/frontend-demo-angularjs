var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
  $scope.name = 'Bob';
});

app.directive('fooBar', function () {
  return {
    restrict: 'E',
    transclude: true,
    template: 'This is my super directive',
    link: function (scope, element, attrs, ctrl, transclude) {
      transclude(scope, function(clone, scope) {
        element.append(clone); // append - добавить в конец
// element = 'This is my super directive', clone = This is {{name}}
//В ИТОГЕ - This is my super directiveThis is Bob
//ШАБЛОН - This is my super directive ПЛЮС ПЕРВОНАЧАЛЬНОЕ СОДЕРЖИМОЕ ДИРЕКТИВЫ - This is {{name}}
      });
    }
  };
});
