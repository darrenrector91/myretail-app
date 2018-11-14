app.controller('DetailsController', ['RetailService', '$routeParams', function (RetailService, $routeParams) {
    var self = this;

    self.productdetail = RetailService.productdetail;

    self.movieId = $routeParams.id
    self.getDetails = RetailService.getDetails($routeParams.id);


}])


