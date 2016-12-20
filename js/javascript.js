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

 // var svgImg = d3.select("div.image-box").append("svg")
 //                                     .attr("width", 1160)
 //                                     .attr("height", 400);

 // var svgImgHeight = d3.select("svg").attr("height"); 
 // var svgImgWidth = d3.select("svg").attr("width");                                     
 
 // var svgRect = svgImg.append("rect")
 //    .attr("width", "100%")
 //    .attr("height", "100%")
 //    .attr("fill", "#46b8da");

 // //Draw the Circle
 // var circle = svgImg.append("circle")
 //                          .attr("cx", 30)
 //                          .attr("cy", 30)
 //                         .attr("r", 20)
 //                         .style("fill","#FFFF33");
  
  
 //  var circleCx = 0;
 //  var circleCy = 0;


 //  while (svgImgHeight>circleCy+50) {

 //    circle.transition().duration(1000).attr("cx",30).attr("cy", parseInt(circleCy)+30);
 //     circleCy = circleCy + 50;  
 //     console.log(circleCy);
 //  };


 //  console.log("svgImgHeight:" + svgImgHeight +"," + "circleCy:" + circleCy)
 // if (svgImgHeight < circleCy + 100) {
 //  for (var i =0; i<220; i++) {
 //       circle.transition().delay(3000).duration(1000).attr("cx", parseInt(circleCx)+30).attr("cy",circleCy);
 //       circleCx = circleCx + 5;
 //    };
 //  };

 //  for (var i =0; i<150; i++) {
 //       circle.transition().delay(5000).duration(1000).attr("cx", parseInt(circleCx)+30).attr("cy",circleCy);
 //       circleCx = circleCx - 5;
 //       circleCy = circleCy + 1;
 //    };




  // circle.transition().attr("cx", 30).attr("cy",60);

 // var circle2 = svgContainer.append("circle")
 //                          .attr("cx", 60)
 //                          .attr("cy", 60)
 //                         .attr("r", 20)
 //                         .style("fill","#FFFF33");

 //  var circle2 = svgContainer.append("circle")
 //                          .attr("cx", 90)
 //                          .attr("cy", 90)
 //                         .attr("r", 20)
 //                         .style("fill","#FFFF33");

});




