console.log("linked");
console.log("events.js loaded");

var skyblue = function(event) {
	console.log(event.target);
	event.target.style.color ="blue";
	console.log("skyblue stuff");
}


// var h1 = document.querySelector('h1');
// h1.addEventListener('mouseover',skyblue);

// var h2 = document.querySelector('h2');
// h2.addEventListener('mouseover',skyblue);

//add makeIt skyblue to the p tag and the anchor tags

// var first = document.querySelector('.first');
// first.addEventListener('mouseover', skyblue);

// var second = document.querySelector('.second');
// second.addEventListener('mouseover', skyblue);



var span = document.querySelector('span');
span.addEventListener('mouseover,')
var a = document.querySelector('a');
a.addEventListener('mouseover', skyblue);



var makeClear = function(event){

	console.log(event.target);
	document.body.style.color = "black";
	console.log("cleared");
}

document.body.addEventListener("dblclick", makeClear);
