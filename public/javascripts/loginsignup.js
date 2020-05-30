var app = angular.module('loginapp',[])


app.controller('signupController',function($scope,$http){

	$scope.signup = function(reg){
		$http({
			method : 'POST',
			url : '/postsignup',
			data : $scope.reg
		}).then(function success(response){
			alert("Registration Successful");
			$scope.reg={};
		},function error(response){
			alert("Registration Failed!");
		});
	}
});



app.controller('loginController',function($scope,$http,$window){

	$scope.login = function(log){
		$http({
			method : 'POST',
			url : '/postlogin',
			data : $scope.log
		}).then(function success(response){
			//alert('login Successful');
			$window.location.href = '/home';
		},function error(response){
			alert('Invalid email or password');
			$scope.log = {};

	});
	}
});