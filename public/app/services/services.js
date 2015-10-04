/**
 * Created by Sachidananda.Panigra on 9/7/2015.
 */
var app = angular.module('contactsApp');
app.service('InitService', ['$q', function ($q) {
    var d = $q.defer();
    return {
        defer: d,
        promise: d.promise
    };
}]);