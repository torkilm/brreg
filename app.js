var app = angular.module('myApp', ['ngResource']);

app.controller('brreg', ['$scope', 'Enhetsregisteret', 
  function ($scope, ereg) {
    $scope.searchText = 'Search here...';

    $scope.Search = function () {
      ereg.get({query:$scope.searchText}, function (data) {
        $scope.Resultat = data.entries;
        console.log(data);
      });
    };

  }]);

app.factory('Enhetsregisteret', ['$resource', 
  function ($resource){
    return $resource('http://hotell.difi.no/api/json/brreg/enhetsregisteret');
  }]);
// http://hotell.difi.no/api/json/brreg/enhetsregisteret