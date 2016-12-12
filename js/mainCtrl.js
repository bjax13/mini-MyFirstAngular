angular.module('friendsList')
.controller('mainCtrl',function ($scope) {

  $scope.friends = ['Scott',  'tom', 'Doug', 'dog','batman'];

  $scope.addFriend = function (addName) {
    $scope.friends.push(addName);
    console.log($scope.friends);
  }

});
