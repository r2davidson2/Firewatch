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
   };

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

app.controller('FiresController', ['$http', function($http) {
   this.fires = [];
   this.indexOfFire = null;

   this.test = 5;

   this.showFires = function() {
      $http({
         method: 'GET',
         url: '/fires'
      }).then(
         (response) => {
            this.fires = response.data;
            console.log(this.fires);
         }
      )
   };

   this.addFire = function() {
      $http({
         method: 'POST',
         url: '/fires',
         data: {
            fireName: this.fireName,
            image: this.image,
            fireBeginDate: this.fireBeginDate,
            fireEndDate: this.fireEndDate,
            lat: this.lat,
            long: this.long,
            comments: this.comments
         }
      }).then(
         (response) => {
            this.fires.unshift(response.data);
            this.resetForm();
         }
      )
   }

   this.editFire = function(fire) {
      $http({
         method: 'PUT',
         url: '/fires/' + fire._id,
         data: {
            fireName: this.updatedFireName,
            image: this.updatedImage,
            fireBeginDate: this.updatedFireBeginDate,
            fireEndDate: this.updatedFireEndDate,
            lat: this.updatedLat,
            long: this.updatedLong,
            comments: this.updatedComments
         }
      }).then(
         (response) => {
            this.showFires();
            this.indexOfFire = null
         }
      )
   };

   this.deleteFire = function(fire) {
      console.log('clicked');
      $http({
         method: 'DELETE',
         url: '/fires/' + fire._id
      }).then(
         (response) => {
            this.showFires();
         }
      )
   };

   this.resetForm = function() {
      this.fireName = '';
      this.image = '';
      this.fireBeginDate = '';
      this.fireEndDate = '';
      this.lat = '';
      this.long = '';
      this.comments = '';
   };

   this.showFires();


}]);
