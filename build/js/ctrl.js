var a;
myApp.controller("basicsnippetCtrl", function($scope,dataPromise) {
	console.log("basicSnippetCtrl");
	$scope.data=[];
	a=dataPromise;
	//dataPromise.then(function(data){
		$scope.data=dataPromise.data;
	//});
});