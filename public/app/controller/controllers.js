//MODULE
var excelData = angular.module('excelData', ['ngRoute', 'angularFileUpload']);

//ROUTE
excelData.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/upload.html',
            controller: 'uploadController'
        })
        .when('/datatable', {
            templateUrl: 'views/datatable.html',
            controller: 'dataTableController'
        });
    $locationProvider.html5Mode(true);
});

//SERVICE
excelData.service('fileUpload', ['$http', function($http){
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new formData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transFormRequest: angular.identity,
            headers: {'Content-Type': undefined }
        })
            .success(function(){

            })
            .error(function(){

            })
    }
}])

//CONTROLLER
excelData.controller('uploadController', ['$scope','FileUploader', 'fileUpload', function($scope, FileUploader, fileUpload){
    var uploader = $scope.uploader = new FileUploader({
        url: '/api/upload'
    });

    //FILTERS
    uploader.filters.push({
        name: 'customFilter',
        fn: function(item, options){
            return this.queue.length < 10;
        }
    });

    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
    };

    console.info('uploader', uploader);

}]);

excelData.controller('dataTableController', ['$scope',function($scope){

}]);