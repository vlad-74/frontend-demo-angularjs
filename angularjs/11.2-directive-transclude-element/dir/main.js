var app = angular.module('app', []);

app.directive('wrapIn', function ($templateCache) {
  return {
    transclude: 'element',
    link: function (scope, element, attrs, ctrl, transclude) {
      // ВЫГРУЗИМ ИЗ КЕША template С ID = red (red = attrs.wrapIn)
      // html <script type="text/ng-template" id='red'>
      var template = $templateCache.get(attrs.wrapIn); 

      //ГЕНЕРИРУЕМ DOM ЭЛЕМЕНТ (JQ ЭЛЕМЕНТ)
      var templateElement = angular.element(template);

      transclude(scope, function (clone) {
        // ДОБАВЛЯЕМ ЭЛЕМЕНТ КОТОРЫЙ СОЗДАЛИ
        // element - ДИРЕКТИВА
        //В НАЧАЛО ДИРЕКТИВЫ ДОБАВЛЯЕМ <div class='red'></div> И ВНУТРЬ ЕГО append(clone)
        //clone - ФОРМА
        element.after(templateElement.append(clone));
      });
    }
  };
});
