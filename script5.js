

var demo=angular.module('test',[]);//angular module
			demo.controller('myapp', function($scope)//angular controller
									{
							var  x=[{firstname:"leela",lastname:"ck",gender:"male"},
									{firstname:"suma",lastname:"ck",gender:"female"},
									{firstname:"kalyan",lastname:"c",gender:"male"},
									{firstname:"mani",lastname:"mani",gender:"female"}
										];

								$scope.x=x;
									});

 