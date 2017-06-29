(function(){
  'use strict';
  angular.module("LunchCheck",[])



  .controller("LunchCheckController",LunchCheckController);


  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope){
    $scope.input = "";
    $scope.message = "";
    $scope.loadMessage = function (num){
      $scope.num = num;
      if (num < 1) {
        $scope.message = "Please enter data first";
      }else if (num < 4) {
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!"
      }

    }
    $scope.numMeals = function (string){
      if (string == ""){
        return 0;
      }else{
        var meals = string.split(",")
        return meals.length;
      }
    }
  };

}
)();
