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


}]).controller('dataTableController', ['$scope', function($scope){

}]);
