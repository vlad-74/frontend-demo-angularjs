var app = angular.module('app', []);

app.controller('firstCtrl', function ($scope) {
  $scope.name = 'Harry';
  $scope.color = '#333333';

  $scope.reverse = function () {
    $scope.name = $scope.name.split('').reverse().join('');
  };
});

app.directive('fooBar', function () {
  return {
    scope: {
      // @ ЭТО ТОЛЬКО ДЛЯ ЧТЕНИЯ, ПЛЮС В HTML: <foo-bar name="{{name}}"></foo-bar>
      name: '@', 
      // = ЭТО ДВУСТОРОННИЙ БИНДИНГ МЕЖДУ ДИРЕКТИВОЙ И КОНТРОЛЛЕРОМ, В HTML: <foo-bar color="color"></foo-bar>
      color: '=', 
      // & ЭТО ВЫПОЛНИТЬ ВЫРАЖЕНИЕ ИЗ РОДИТЕЛЬСКОГО КОНТРОЛЛЕРА, В HTML: <foo-bar reverse='reverse()'></foo-bar>
      reverse: '&'
      // ИТОГ В HTML: <foo-bar name="{{name}}" color="color" reverse='reverse()'></foo-bar>
    },
    template: "<div>My name is {{name}} <input type='text' ng-model='name'></div>" +
      "<div>My color is {{color}} <input type='text' ng-model='color'></div>" +
      "<button ng-click='reverse()'>Reverse</button>",
    link: function ($scope, element, attrs) {
      console.log('fooBar');
    }
  };
});
