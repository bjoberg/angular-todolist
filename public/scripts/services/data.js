'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  //'this' refers to the service itself
  this.helloConsole = function () {
    console.log('This is the hello console service');
  };

  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
      .then(callback);
  };

  this.deleteTodo = function(todo) {
    console.log(todo.name + ' was deleted!');
    //Other logic that would delete the data in a real DB
  };

  this.saveTodos = function(todos) {
    console.log(todos.length + ' todos were saved!');
    //Other logic that would save the data in a real DB
  };
});
