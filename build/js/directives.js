myApp.directive('mytoggle',function(){
	console.log("inside dir");
	return{
		link: function(scope, elem, attrs) {
			var fnClick=function(){
				 console.log("clicked toggle");
				 elem.next(".content").slideToggle("slow");
			};
			elem.bind('click', fnClick);
		}
	}
});

myApp.directive('prettyDir',function(){
	console.log("inside prettyDir");
	return{
		link: function(scope, elem, attrs) {
			prettyPrint();
		}
	}
});

 