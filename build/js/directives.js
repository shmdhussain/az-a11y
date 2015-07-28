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

myApp.directive('prismcode',function(){
	console.log("inside prismcode");
	return{
		link: function(scope, elem, attrs) {
            Prism.highlightElement(elem.get(0));
		}
	}
});

myApp.directive('videopost',function(){
	return{
		scope:{},
		link: function(scope, elem, attrs) {
            elem.bind("click",function(e){
				elem.addClass("removeBanner");
				//console.log("next "+ elem.next('video').attr("id"));
				elem.next('video')[0].play();
				scope.$apply();
				e.stopImmediatePropagation();
			});
		}
	}
});

 