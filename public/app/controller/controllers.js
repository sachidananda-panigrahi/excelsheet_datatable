//CONTROLLER
excelData.controller('uploadController', ['$scope','$location','FileUploader', 'fileUpload', function($scope, $location, FileUploader, fileUpload){
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

    uploader.onCompleteAll = function() {
       $location.path("/datatable");
    };


}]).controller('dataTableController', ['$scope', 'DTOptionsBuilder', 'DTColumnBuilder', '$resource', function($scope, DTOptionsBuilder, DTColumnBuilder, $resource){
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        return $resource('/api/tabledata').query().$promise;
    }).withPaginationType('full_numbers');


}]);
