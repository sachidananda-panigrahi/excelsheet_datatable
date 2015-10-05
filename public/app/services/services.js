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
}]);