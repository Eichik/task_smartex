//модуль
angular.module('userListApp', [])
//контроллер
.controller('userListCtrl', ["$scope", "$http", function($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/users').success(function(data) {
        $scope.users=data;
    });
}]);



















