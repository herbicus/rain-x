console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// JS MEDIA QUERY
	// var mq = window.matchMedia('@media all and (max-width: 700px)');
	// if(mq.matches) {
	//     // the width of browser is more then 700px
	// } else {
	//     // the width of browser is less then 700px
	// }

	// JS MEDIA QUERY + LISTENER
	// mq.addListener(function(changed) {
	//     if(changed.matches) {
	//         // the width of browser is more then 700px
	//     } else {
	//         // the width of browser is less then 700px
	//     }
	// });

	// hero section - parallax background
	var heroBgParallax = new TimelineMax({paused: true});
				
	heroBgParallax.to(".l-above-fold", 2, {css:{"background-position-y": 300}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".l-above-fold").waypoint(function() {
			heroBgParallax.seek(parallaxTiming);
			// TweenMax.to(".l-contact-bg" , 0.75, {
			// 	left: "50%",
			// 	top: "50%",
			// 	autoAlpha: 1,
			// 	ease: Back.easeInOut
			// });

		}, { offset: "90%" });
	});

	var heroContentParallax = new TimelineMax({paused: true});
				
	heroContentParallax.to(".l-hero-content", 1, {css:{"top": 1000}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".l-hero-content").waypoint(function() {
			heroContentParallax.seek(parallaxTiming);
			console.log(parallaxTiming);
			// TweenMax.to(".l-contact-bg" , 0.75, {
			// 	left: "50%",
			// 	top: "50%",
			// 	autoAlpha: 1,
			// 	ease: Back.easeInOut
			// });

		}, { offset: "90%" });
	});


	var menuAnimation = new TimelineMax({paused: true});
	menuAnimation.to(".mobile-nav-menu", 0.75, { autoAlpha: 1, left: 0, ease: Back.easeInOut});

	// MOBILE ICON - HAMBURGER
	$(".mobile-nav-btn").on("click", function(){
		$(this).toggleClass("open");

  		if ($(this).hasClass("played")) {
  			menuAnimation.reverse();	
  		} else {
  			menuAnimation.play();
  		}	
  		$(this).toggleClass("played");
	});

	$(".l-desktop-header nav ul li a", ".l-mobile-header ul li a").on("click", function(e){
			e.preventDefault();
		})

	// SCROLL TO
	$(".btn-section-1").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".l-section-1").offset().top -80
	    }, 2000);
	});

	$(".btn-section-2").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".l-section-2").offset().top -80
	    }, 2000);
	});

	$(".btn-section-3").on("click", function(){
		$('html, body').animate({
		    scrollTop: $(".l-section-3").offset().top -80
		}, 2000);
	});

	// $(".section-4").on("click", function(){
	// 	$('html, body').animate({
	// 	    scrollTop: $("footer").offset().top-160
	// 	}, 2000);
	// });


	// init
	var init = function() {
		
	};
	shared.init = init;

	return shared;

}());

$(document).ready(function() {
	cornerstoneAPI.init();
});
