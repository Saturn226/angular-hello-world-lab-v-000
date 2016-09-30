function MainController($scope) {
  $scope.name = "Ashley";
  $scope.email = "ashley@mail.com";
}



angular
.module('app')
.controller('MainController', MainController);