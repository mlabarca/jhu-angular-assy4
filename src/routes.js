(function () {
'use strict'

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home/home.template.html'
    })
    
    // Fetched categories should be required before transitioning to view
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories/categoryList.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/items/itemsList.template.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    })

}


})();
