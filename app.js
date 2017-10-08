(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope){
    $scope.foodNames = ""
    $scope.message = ""
    $scope.checkifTooMuch = function () {
      if($scope.foodNames == "") {
        $scope.message = "Please enter data first"
      } else {
        var parsedFoodNames = $scope.foodNames.split(",")
        if(parsedFoodNames.length <= 3 ) {
          $scope.message = "Enjoy!"
        } else if (parsedFoodNames.length > 3) {
          $scope.message = "Too much!";
        }
      }
    };
  });
})();
