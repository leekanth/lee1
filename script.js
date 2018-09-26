

var demo=angular.module('test',[]);//angular module
demo.controller('myapp', function($scope)//angular controller
{
	var owner= {
		height:"6ft",
		weight:"200kg",
		color:"white"
	}
		$scope.owner=owner;
$scope.name="leela";
$scope.temp="45 degrees";
});

 