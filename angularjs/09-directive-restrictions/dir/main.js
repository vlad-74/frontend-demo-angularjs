var app = angular.module('app', []);

app.directive('fooBar', function () {
  return {
    restrict: 'EACM', // ДЛЯ ЭЛЕМЕНТА, АТРИБУТА, КЛАСС, КОММЕНТАРИЙ
    link: function () {
      console.log('fooBar');
    }
  };
});
