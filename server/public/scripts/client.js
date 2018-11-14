var app = angular.module('MyRetailApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as retail'
    }).when('/:id', {
        templateUrl: '/views/productdetail.html',
        controller: 'DetailsController as details'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
