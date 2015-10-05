var excelData = angular.module('excelData', ['ngRoute', 'ngResource', 'angularFileUpload', 'datatables']);

    excelData.config(function ($routeProvider, $locationProvider) {
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
    })
    .run(function ( $rootScope, $timeout) {

    });

