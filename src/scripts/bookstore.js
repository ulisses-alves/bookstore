angular.module('bookstore', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'bookstore.core',
  'bookstore.home',
  'bookstore.book',
  'bookstore.bookshelf'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    .when('/book/:id', {
      templateUrl: 'templates/book.html',
      controller: 'BookCtrl'
    })
    .otherwise('/')
})
