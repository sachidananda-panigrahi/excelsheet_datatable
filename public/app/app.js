var app = angular.module('excelData', ['ngRoute', 'ngResource', 'angularFileUpload', 'angular-loading-bar', 'ngAnimate', 'angularUtils.directives.dirPagination']);

app.config(function ($routeProvider, $locationProvider, cfpLoadingBarProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/upload.html',
            controller: 'uploadController'
        })
        .when('/datatable', {
            templateUrl: 'views/datatable.html',
            controller: 'dataTableController'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.latencyThreshold = 0;
})
    .run(function ($rootScope, $timeout) {

    });

