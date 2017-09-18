var app = angular.module('blankApp', ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "home"
            })
            .when('/:page', {// we can enable ngAnimate and implement the fix here, but it's a bit laggy
                templateUrl: function ($routeParams) {
                    return 'views/' + $routeParams.page + '.html';
                }
            })
            .when('/:page/:child*', {
                templateUrl: function ($routeParams) {
                    return 'views/' + $routeParams.page + '/' + $routeParams.child + '.html';
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
});
app.controller('GlobalController', function ($scope, $http, $window) {

});
app.controller('headerController', function ($scope, $http, $window) {
    $scope.gotoParam = "views/home";
});
app.controller('homeController', function ($scope, $http, $window) {
    $http.get("api/allBloodGroup").success(function (data) {
        $scope.bloodGroup = data;
    });

    $http.get("api/allState").success(function (data) {
        $scope.state = data;
    });
    $scope.findDistrict = function (stateId) {
        $http.get("api/allDistrict/" + stateId).success(function (data) {
            $scope.district = data;
        });
    };
    $scope.searchBlood=function(){
       alert("needs Updation");
      
    };

});
app.controller('registerController', function ($scope, $http, $window) {

});
