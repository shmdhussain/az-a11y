var myApp = angular.module('az-a11y-search', ['ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/basic-snippet');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('basic-snippet', {
            url: '/basic-snippet',
			resolve:{
					dataPromise:function(basicHTMLElementList){
						console.log("datapromise obj resolve");
						return basicHTMLElementList.get();
					}
			},
			controller:'basicsnippetCtrl',
            templateUrl: 'partials/basic-snippet.html'
        })
		.state('basic-snippet.anchor', {
            url: '/basic-snippet-anchorTag',
			
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/aza.html'
        })
		.state('basic-snippet.abbr', {
            url: '/basic-snippet-anchorTag',
			
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/aza.html'
        });
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        // .state('snippet', {
            // // we'll get to this in a bit       
        // });
        
});

