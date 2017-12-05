var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
  this.myLesson = "MainLesson";

  this.addLesson = function () {
    console.log('addLesson');
  };

  $scope.mainCtrl = this; // ТАКОЙ ВАРИАНТ ЛУЧШЕ НЕ ИСПОЛЬЗОВАТЬ !!!
});

app.controller('firstCtrl', function () { // ВМЕСТО $scope ИСПОЛЬЗУЕТСЯ this.
  this.myLesson = "FirstLesson";
});

app.controller('secondCtrl', function () { // ВМЕСТО $scope ИСПОЛЬЗУЕТСЯ this.
  this.myLesson = "SecondLesson";
});
