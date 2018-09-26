

var demo=angular.module('test',[]);//angular module
			demo.controller('myapp', function($scope)//angular controller
									{
							var  people=[
									{name:"leela", likes:0, dislikes:0},
									{name:"suma", likes:0, dislikes:0},
									{name:"kalyan", likes:0, dislikes:0},
									{name:"mani", likes:0, dislikes:0},
									];
								$scope.people=people;
								$scope.ilikes= function(p)
												{p.likes++;
												}
								$scope.idlikes= function(p)
												{p.dislikes++;
												}
									});

 