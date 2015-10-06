app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new formData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transFormRequest: angular.identity,
            headers: {'Content-Type': undefined }
        })
            .success(function () {

            })
            .error(function () {

            })
    }
}]).service('InitService', ['$q', function ($q) {
    var d = $q.defer();
    return {
        defer: d,
        promise: d.promise
    };
}]).service('$getData', ['$http', '$q', function($http, $q){

    var deferred = $q.defer();

    $http.get('/api/tabledata', {
        transFormRequest: angular.identity,
        headers: {'Content-Type': undefined }
    })
        .success(function (data) {
            console.log(data);
            deferred.resolve(data);
        })
        .error(function () {

        });
    this.getResponse = function(){
        return deferred.promise;
    };
}]);