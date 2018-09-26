

var demo=angular.module('test',[]);//angular module
demo.controller('myapp', function($scope)//angular controller
{
	var country = {
		name:"leela",
		age:"30",
		photo:"photo1.jpg"
	};
		$scope.country=country;
});

 