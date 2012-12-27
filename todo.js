function TodoCtrl($scope){
	

	$scope.todos = [
		{text:'Learn AngularJS',done:false},
		{text:'Build an App', done:false}
	];

	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	};

	$scope.remaining = function(){
		// var todos = $scope.todos;
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			//count += todo.done ? 0 : 1;
			if(!todo.done){
				count+=1;}
		});
		return count;
	};

	$scope.clearTodo = function(){
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});
	};

	$scope.addTodo = function(){
		if (!$scope.formTodoText) { return; }
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = "";
	};

	$scope.archive = function(){
		alert("Hello");
	};
}