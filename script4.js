

var demo=angular.module('test',[]);//angular module
			demo.controller('myapp', function($scope)//angular controller
									{
										var  employee={
											firstname:"leela",
											lastname:"ck",
										gender:"male"};
								$scope.employee=employee;
									});

 