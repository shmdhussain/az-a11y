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
		.state('basic-snippet.home', {
            url: '/',
			controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/how-to-use-zen-coding.html'
        })
		.state('basic-snippet.anchor', {
            url: '/basic-snippet-anchorTag',
			
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/aza.html'
        })
		.state('basic-snippet.image', {
            url: '/basic-snippet-imgTag',
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/azimg.html'
        })
		.state('basic-snippet.abbr', {
            url: '/basic-snippet-abbrTag',
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/azabbr.html'
        })
		.state('basic-snippet.html5Template', {
            url: '/basic-snippet-html5-template',
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/azhtml.html'
        })
		.state('basic-snippet.inputCheckbox', {
            url: '/basic-snippet-inputCheckbox',
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/azinput-checkbox.html'
        })
		.state('basic-snippet.inputRadio', {
            url: '/basic-snippet-inputRadio',
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/azinput-radio.html'
        })
		.state('basic-snippet.inputText', {
            url: '/basic-snippet-inputText',
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/azinput-text.html'
        })
		.state('basic-snippet.table', {
            url: '/basic-snippet-table',
			//controller:'basicsnippetCtrl',
            templateUrl: 'descriptions/aztable.html'
        });
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        // .state('snippet', {
            // // we'll get to this in a bit       
        // });
        
});

