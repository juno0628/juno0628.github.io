console.log("linked");
var subTotal =0;
var taxRate= 8.85;
var taxAmount = 0;
var total = 0;
var currentPrice =0;
var totalClick = 0; 
var interval = 100;

//frontpage animation

$('#frontcoffee2').on('load', function() {
	$('#frontcoffee1').css({
		opacity: 1});
});

$('a').children('img').on('mouseover',function() {
	$('#frontcoffee2').css({
		transform: 'rotate(45deg) translate(0px,80px)'
	});
	$('#frontcoffee2').css({
		opacity: 0.5
	});
	$('#frontcoffee1').css({
		transform: 'rotate(45deg) translate(105px,50px)'
	});
	$('a').parent().children('h5').css({
		transform: 'translate(0px,-100px)'
	})
});

// mainpage - sliding up and down menu and steps 
$('.tag1').children('h6').click(function() {
	$(this).parent().slideUp();
})

$('.firsttable').children('h2').click(function() {
 $('.tag1').slideDown();
});

$('.tag2').children('h6').click(function() {
	$(this).parent().slideUp();
})

$('.secondtable').children('h2').click(function() {
 $('.tag2').slideDown();
});

$('.tag3').children('h6').click(function() {
	$(this).parent().slideUp();
})

$('.thirdtable').children('h2').click(function() {
 $('.tag3').slideDown();
});


//getting price info from clicking menus and putting to billing and calculator


$('.column').on('mouseover',function() {
	$(this).children('img').css({
		transition: 'all 1s'});
	$(this).children('img').css({
		transform: 'rotate(360deg)'});
});


$('.column').click(function() {
	totalClick += 1; 

	//user GUI for selecting
	$(this).addClass('green');
	$(this).css('color','green');
	$(this).children('img').css('width','9%');
	//adding element to billing 
	console.log($(this).children('span').text());
	$('ul').append('<li>'+$(this).text()+'</li>');
	$('ul').scrollTop(999999999);
	//calculate   
	currentPrice = parseFloat($(this).children('span').text());
	subTotal += currentPrice;
	subTotal = Math.round((subTotal*100))/100
	taxAmount = Math.round((subTotal * taxRate/100)*100)/100;
	total = Math.round((taxAmount + subTotal)*100)/100;
	console.log("subtotal is " +subTotal);
	calculate();
	//billing 
	bill();
})



var bill = function(column){
	$('ul').parent().children('.billtotalclick').text("total items: "+totalClick);
	$('ul').parent().children('.billsubtotal').text("subtotal amount: $"+subTotal);
	$('ul').parent().children('.billtax').text("tax amount: $"+taxAmount);
	$('ul').parent().children('.billtotal').text("total amount: $"+total);
}


//calculating function
var calculate = function(){
  $('.tag2').children('.totalclick').text("total items: "+totalClick);
	$('.tag2').children('.subtotal').text("subtotal amount: "+subTotal);
	$('.tag2').children('.tax').text("tax amount: "+taxAmount); 
	$('.tag2').children('.total').text("total amount: "+total); 
};


//reset function 
var reset = function(){
	//cancel calculation 
	totalClick = 0;
	subTotal = 0; 
	taxAmount = 0;
	total = 0;
	currentPrice =0;
	totalClick = 0; 
	//cancel selection 
	$('.column').css('color','black');
	$('.column').removeClass('green');
	$('.column').children('img').css('width','5%');
	//cancel billing
	$('ul').children('li').text('');
	$('ul').children('li').remove();
}

//restart button
$('.restart').click(function() {
		reset();
		calculate();
		bill();
})


//next customer button 
$('.next').click(function() {
	var response = window.confirm("Are you going to cancel current work?");
 	if (response==true) {
	reset();
	calculate();	
	bill();
	} else {
		alert("Continued");
	}
})

//complete
$('.complete').click(function() {
	var complete = window.confirm("Save and process?");
	if (complete==true) {
		window.alert("completed");
		reset();
		calculate();
		bill();
	}	
})

