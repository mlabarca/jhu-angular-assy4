(function(){
'use strict'

angular.module('data')
.service('MenuData', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath){
  var service = this;
  service.getAllCategories = function (){
    var httpParams = {
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    };

    return $http(httpParams);
  };

  service.getItemsForCategory = function (categoryShortName){
    var httpParams = {
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    };

    return $http(httpParams);
  };
}
})();