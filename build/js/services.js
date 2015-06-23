myApp.factory('basicHTMLElementList', function($http, $q) {
  return {
    get: function() {
	  console.log("start get function of basicHTMLElementList service");
      var deferred = $q.defer();
      $http.get("stubs/data.json")
      .success(deferred.resolve)
      .error(deferred.resolve);
	  console.log("end get function of basicHTMLElementList service");
      return deferred.promise;
    }
  }
});