

var demo = angular.module('test', []);
demo.controller('myapp', function($scope, $location, $anchorScroll) {

  $scope.scrollTo = function(scrollLocation) {
    $location.hash(scrollLocation);
    $anchorScroll.yOffset = 20;
    $anchorScroll();
  }
});
