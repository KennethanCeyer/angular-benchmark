var config = {
    path: {
        template: '/app/templates'
    }
};

var app = angular.module('app', [
    'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: config.path.template + '/index.html',
            controller: 'MainCtrl'
        })
        .when('/benchmark/1', {
            templateUrl: config.path.template + '/benchmark/1.html',
            controller: 'Benchmark1Ctrl'
        })
        .when('/benchmark/2', {
            templateUrl: config.path.template + '/benchmark/2.html',
            controller: 'Benchmark2Ctrl'
        })
        .when('/benchmark/3', {
            templateUrl: config.path.template + '/benchmark/3.html',
            controller: 'Benchmark3Ctrl'
        })
        .otherwise({
            redirectTo: '/',
        });
}]);
