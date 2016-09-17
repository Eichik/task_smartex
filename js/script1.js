//модуль
angular.module('vkTaskApp', [])
//контроллер
.controller('vkTaskCtrl', function($scope, $http) {
    $scope.recordingVk = function(){
    $http.get('https:%2F%2Foauth.vk.com%2Fauthorize?client_id=5621033&display=page&redirect_uri=http:%2F%2Flocalhost:8080%2F%2Fcallback&scope=friends&response_type=token&v=5.53&state=123456')
    .success(function(data) {
       alert ('Вы успешно прошли регистрацию через ВК')
    });
    };
});



















