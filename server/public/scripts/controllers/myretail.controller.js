app.controller('HomeController', ['RetailService', '$routeParams', function (RetailService, $routeParams) {
    var self = this;

    self.movies = RetailService.movies;
    self.api = RetailService.api;

    RetailService.getMovies();
    RetailService.getApiMovies();

}])
