var app = angular.module('myApp', ['ngResource']);

app.controller('brreg', ['$scope', 'Enhetsregisteret', 
  function ($scope, ereg) {
    $scope.searchText = 'Search here...';

    $scope.Search = function () {
      ereg.get({query:$scope.searchText}, function (data) {
        $scope.Resultat = data.entries;
        $scope.Antall = data.posts;
        console.log(data);
      });
    }; // End Search

  }]); // End controller

app.factory('Enhetsregisteret', ['$resource', 
  function ($resource){
    return $resource('http://hotell.difi.no/api/json/brreg/enhetsregisteret');
  }]);
// http://hotell.difi.no/api/json/brreg/enhetsregisteret