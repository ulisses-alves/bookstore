angular.module('bookstore.book', [])
.controller('BookCtrl', function ($scope, $routeParams, Books) {
  $scope.book = Books.get({id: $routeParams.id})
})
