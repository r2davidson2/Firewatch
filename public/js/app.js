const app = angular.module('fires', []);

app.controller('AuthController', ['$http', function($http) {
   const controller = this;

   this.createUser = function(){
      $http({
         method: 'POST',
         url: '/users',
         data: {
            username: this.createUsername,
            password: this.createPassword
         }
      }).then(function(response) {
         console.log(response);
         controller.createUsername = null;
         controller.createPassword = null;
      }, function(error) {
         console.log(error);
      })
   };

   this.logIn = function() {
      $http({
         method: 'POST',
         url: '/sessions',
         data: {
            username: this.username,
            password: this.password
         }
      }).then(
         function(response) {
            console.log(response);
            controller.username = null;
            controller.password = null;
            controller.goApp();
         }, function(error) {
            console.log(error);
         }
      )
   }
   this.goApp = function() {
      $http({
         method: 'GET',
         url: '/app'
      }).then(
         function(response) {
            controller.loggedInUsername = response.data.username;
            console.log(controller.loggedInUsername);
         }, function(error) {
            console.log(error);
         }
      )
   }

   this.logout = function() {
      $http({
         method: 'DELETE',
         url: '/sessions'
      }).then(
         function(response) {
            console.log(response);
            controller.loggedInUsername = null;
         }, function(error) {
            console.log(error);
         }
      )
   };

}]);
