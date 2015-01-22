var app = angular.module('myApp', ['ngResource','ui.bootstrap']);

app.controller('brreg', ['$scope', 'Enhetsregisteret', 
  function ($scope, ereg) {
    $scope.Side = 1;

    $scope.Search = function () {
      ereg.get({query:$scope.searchText,page:$scope.Side}, function (data) {
        $scope.Resultat = data.entries;
        $scope.Antall = data.posts;
        $scope.Side = data.page;
     
        $scope.Sider = data.pages;
        console.log(data);
      });
    }; // End Search
    $scope.pageChanged = function () {
      console.log($scope.Side);
      $scope.Search();

    };
  }]); // End controller

app.factory('Enhetsregisteret', ['$resource', 
  function ($resource){
    return $resource('http://hotell.difi.no/api/json/brreg/enhetsregisteret');
  }]);
// http://hotell.difi.no/api/json/brreg/enhetsregisteret