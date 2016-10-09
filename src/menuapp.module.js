(function () {
'use strict'
angular.module('MenuApp',['ui.router', 'data']);

angular.module('MenuApp')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'menu.html'
    })

}


})();
