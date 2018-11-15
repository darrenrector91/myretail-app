describe('HomeController', function () {
    // define variables for the services we want to access in tests
    var HomeController,
        RetailService;

    beforeEach(function () {
        // load the module we want to test
        module('app');

        // get services from injector
        inject(function ($controller, _RetailService_) {
            RetailService = _RetailService_;

            // spy on service method to check if it gets called later
            sinon.spy(RetailService, 'getApiMovies');

            // get controller instance from $controller service
            HomeController = $controller('HomeController');
        });
    });

    afterEach(function () {
        // remove spy from service
        RetailService.getApiMovies.restore();
    });

    describe('constructor', function () {
        it('should do something with the RetailService', function () {
            // Assert
            assert(RetailService.getApiMovies.calledOnce);
        });
    });
});

describe('HomeController', function () {
    // define variables for the services we want to access in tests
    var HomeController,
        RetailService;

    beforeEach(function () {
        // load the module we want to test
        module('app');

        // get services from injector
        inject(function ($controller, _RetailService_) {
            RetailService = _RetailService_;

            // spy on service method to check if it gets called later
            sinon.spy(RetailService, 'getApiMovies');

            // get controller instance from $controller service
            HomeController = $controller('HomeController');
        });
    });

    afterEach(function () {
        // remove spy from service
        RetailService.getApiMovies.restore();
    });

    describe('constructor', function () {
        it('should do something with the RetailService', function () {
            // Assert
            assert(RetailService.getApiMovies.calledOnce);
        });
    });
});