angular.module('todoListApp')
.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'todoCtrl',
    replace: true
  };
});
