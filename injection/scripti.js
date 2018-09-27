

var demo=angular.module('test',[]);
			demo.controller('myapp', function ($scope,stringService)
									{

								$scope.transformString = function (input)
								{
									$scope.output = stringService.ProceesString(input);
								};
							});
