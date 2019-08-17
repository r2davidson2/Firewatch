

const app = angular.module('MyApp', []).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://www.google.com/maps/embed/v1/place'
  ]);
});
app.controller("MainController", ['$http', function($http) {


  this.getKey = () => {
    $http({
      method: "GET",
      url: "/config",
    }).then ((response) => {
      this.url = `https://www.google.com/maps/embed/v1/place?q=47.5951518%2C-122.3316393&key=`
      this.key = response.data;
      this.sourceUrl = `${this.url}${this.key}`
      console.log("This is the source url for the iframe", this.sourceUrl);
      });
    }

  this.getKey()


}]);
