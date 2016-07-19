angular.module('bookstore.bookshelf', [
  'bookstore.bookshelf.controller'
])
.directive('bookshelf', function () {
  return {
    templateUrl: 'templates/bookshelf.html',
    controller: 'BookshelfCtrl',
    restrict: 'E',
    scope: {
      books: '='
    }
  }
})
