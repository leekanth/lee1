

var demo=angular.module('test',[]); //angular module
			
demo.controller('myapp', function($scope)
				{
							var  people=[
									{Name:"leela", Gender: 1, Salary: 55000.789},
									{Name:"suma", Gender: 2, Salary: 66000.789},
									{Name:"kalyan", Gender:1, Salary: 77000.789},
									{Name:"mani", Gender:3, Salary: 88000.789}
									];
								$scope.people=people;
								$scope.v="table1.html";
								
									});

 