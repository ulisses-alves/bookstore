angular.module('bookstore.home', [])
.controller('HomeCtrl', function ($scope, Books) {
  $scope.books = Books.query()

  $scope.search = function () {
    $scope.books.$cancelRequest()
    $scope.books = Books.query({q: $scope.searchText || '.'})
  }
})
