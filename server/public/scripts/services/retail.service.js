app.service('RetailService', ['$http', function ($http) {

    var self = this;

    // Lists -  where responses are soassed to and stored before bsing passed to controller for display on DOM
    self.movies = {
        list: []
    };

    self.productdetail = {
        list: []
    };

    self.api = {
        list: []
    };

    // GET - service call to database for dummy data
    self.getMovies = function () {

        $http({
            method: 'GET',
            url: '/movies'
        }).then(function (response) {
            // console.log('response', response);
            self.movies.list = response.data;
        })
    }// End GET

    // GET - service call to database for data using :id
    self.getDetails = function (movieId) {

        $http({
            method: 'GET',
            url: '/movies/' + movieId
        }).then(function (response) {
            console.log('response get id', response.data);
            if (response.data[0].id == movieId) {
                self.productdetail.list = response.data;
            } else {
                console.log('error in getDetails by id');
            }
        })
    }// End GET

    // GET - service call to Redsky API
    self.getApiMovies = function () {

        $http({
            method: 'GET',
            url: '/movies/api'
        }).then(function (response) {
            // console.log('response', response);
            self.api.list = response.data.product.item;
        })
    }// End API

}]);
