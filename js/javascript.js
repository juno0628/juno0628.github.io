$(document).ready(function(){
	console.log("events.js loaded");
	$('.goto-contact').on('click', function(){
		console.log(this);
		$('body').scrollTo('#contact');
	});
	$('.goto-projects').on('click', function(){
		console.log(this);
		$('body').scrollTo('#projects');
	});
	$('.goto-about').on('click', function(){
		console.log(this);
		$('body').scrollTo('#about');
	});
	$('.goto-home').on('click', function(){
		console.log(this);
		$('body').scrollTop;
	});
});


