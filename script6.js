

var demo=angular.module('test',[]);//angular module
			demo.controller('myapp', function($scope)//angular controller
									{
							var  countries=[
									{
									name:"banglore",
										cities:[{name:"yelahanka"},
												{name:"maleeswaram"},
												{name:"sivajinagar"}
												]
									},
{
									name:"hyd",
										cities:[{name:"ammer"},
												{name:"begam"},
												{name:"panja"}
												]
									},
{
									name:"nellore",
										cities:[{name:"balaji"},
												{name:"chinna"},
												{name:"padha"}
												]
									}];
								$scope.countries=countries;
									});

 