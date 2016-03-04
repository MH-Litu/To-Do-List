var app = angular.module('myApp', [])

//----- TODO LIST -----//
app.controller('TodoController', function($scope){
	$scope.todos = [
		{'title':'Have your breakfast first.'},
		{'title':'Take a look in AngularJS.'},
		{'title':'Make some app.'},
		{'title':'Say your prayer timely.'}
	];

	$scope.addTodo = function(){
		$scope.todos.push({'title':$scope.newtodo, 'done':false})
		$scope.newtodo = ''
	}

	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done
		});
	};

});