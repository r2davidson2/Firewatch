const app = angular.module('MyApp', []);

app.controller("gooleMapController", ['$http', "$scope", "$sce", function($http, $scope, $sce) {

  $scope.trustAsUrl = (url) => {
    return $sce.trustAsResourceUrl(url)
  }
    this.getKey = () => {
      $http({
        method: "GET",
        url: "/config",
      }).then ((response) => {
        this.key = response.data;
        this.url = "https://www.google.com/maps/embed/v1/place?q=47.5951518%2C-122.3316393&key="
        this.src = this.url+this.key
      });
    }

    this.getKey()
}]);
