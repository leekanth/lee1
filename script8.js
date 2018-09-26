

var demo=angular.module('test',[]);//angular module
			demo.controller('myapp', function($scope)//angular controller
									{
							var  people=[
									{Name:"leela", DOB: new Date("november 23,1990"), Gender:"Male", Salary: 55000.789, Salary: 55000.789 },
									{Name:"suma", DOB:new Date("september 23,1990"), Gender:"Female", Salary: 66000.789, Salary: 66000.789 },
									{Name:"kalyan", DOB:new Date("november 23,1990"), Gender:"Male", Salary: 77000.789, Salary: 77000.789 },
									{Name:"mani", DOB:new Date("november 23,1990"), Gender:"Female", Salary: 88000.789, Salary: 88000.789 },
									];
								$scope.people=people;
								$scope.rowlimit= 3;
								$scope.sortColumn= "Name";
								$scope.reverseSort=false;
								$scope.sortData=function(column)
								{
									$scope.reverseSort=($scope.sortColumn==column)? !$scope.reverseSort:false;
									$scope.sortColumn= column;
								}		
								$scope.getsortclass=function(column)
								{ if($scope.sortColumn==column)
									{
										return $scope.reverseSort ? 'arrow-down': 'arrow-up'
									}
									return'';
								}
									});

 