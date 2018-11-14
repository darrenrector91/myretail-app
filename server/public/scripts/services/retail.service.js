app.service('RetailService', ['$http', function ($http) {

    var self = this;

    // Lists
    self.movies = {
        list: []
    };

    self.productdetail = {
        list: []
    };

    self.api = {
        list: []
    };

    // Get all data from dB
    self.getMovies = function () {

        $http({
            method: 'GET',
            url: '/movies'
        }).then(function (response) {
            // console.log('response', response);
            self.movies.list = response.data;
        })
    }

    // Get data to display on details page using movie ID
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
    }

    // Get data from Redsky api : id and movie title
    self.getApiMovies = function () {

        $http({
            method: 'GET',
            url: '/movies/api'
        }).then(function (response) {
            // console.log('response', response);
            self.api.list = response.data.product.item;
        })
    }

}]);
