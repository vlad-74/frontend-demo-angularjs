var app = angular.module('app', []);

app.directive('uiSource', function () {
  return {
    compile: function (elem) {
      //ЗАМЕНА ОТКРЫВАЮЩИХ И ЗАКРЫВАЮЩИХ ТЕГОВ
      var escape = function (content) {
        return content.replace(/\</g, '&lt;')
                      .replace(/\>/g, '&gt;');
      };
      //СОЗДАЕМ НОВЫЙ АНГУЛАР ЕЛЕМЕНТ 
      var pre = angular.element('<pre class="prettyprint"></pre');

      /*БЕРЕМ HTML КОТОРЫЙ ЛЕЖИТ ВНУТРИ uiSource И ПЕРЕДАЕМ ЕГО ПЕРВЫМ ПАРАМЕТРОМ В prettyPrintOne 
      prettyPrintOne ОБРАМЛЯЕТ НАШ ЭЛЕМЕНТ И ЗАПИСЫВАЕТ ЕГО В pretty*/
      var pretty = prettyPrintOne(escape(elem.html()));
      console.log(pretty);

      /*pretty АППЕНДИМ ВНУТРЬ pre*/
      pre.append(pretty);

      //ЗАМЕНЕМ ЭЛЕМЕНТ (ДИРЕКТИВУ uiSource) НА ТО ЧТО ЗАПИСАЛИ - pre
      elem.replaceWith(pre);
    }
  };
});
