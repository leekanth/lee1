

var demo=angular.module('test',[]);//angular module
			demo.controller('myapp', function($scope)//angular controller
									{
							var  people=[
									{Name:"leela", DOB: new Date("november 23,1990"), Gender:"Male", Salary: 55000.789, Salary: 55000.789 },
									{Name:"suma", DOB:new Date("september 3,1990"), Gender:"Female", Salary: 66000.789, Salary: 66000.789 },
									{Name:"kalyan", DOB:new Date("november 6,1990"), Gender:"Male", Salary: 77000.789, Salary: 77000.789 },
									{Name:"mani", DOB:new Date("november 3,1990"), Gender:"Female", Salary: 88000.789, Salary: 88000.789 },
									];
								$scope.people=people;
								
								$scope.search = function(item)
								{ 
								if($scope.searchText == undefined)
									{
										return true;
										
									}
									else
										{
											if (item.Name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)// ll
											//item.Salary.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 )
											 
											 {
									return true;
								}
										}
										
								return false;
									}
									});

 