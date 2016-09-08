//модуль
angular.module('vkUserApp', [])
//контроллер
.controller('vkUserCtrl', ["$scope", "$http", function($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/users').success(function(data) {
        $scope.users=data;
    });
}]);



















