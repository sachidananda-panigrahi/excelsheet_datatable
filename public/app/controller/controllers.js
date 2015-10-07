//CONTROLLER
app.controller('uploadController', ['$scope','$location','FileUploader', 'fileUpload', function($scope, $location, FileUploader, fileUpload){
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

    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };

    uploader.onCompleteAll = function() {
        $location.path("/datatable");
    };


}]).controller('dataTableController', ['$getData', '$scope', function ($getData, $scope) {
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $getData.getResponse().then(function(result){
        $scope.data = result;
        $scope.header = $scope.data[0].tableData[0].slice(0,1);
    });
    console.log($scope.data);


}]);
