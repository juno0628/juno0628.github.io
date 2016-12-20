$(document).ready(function(){
	console.log("added");
	var svgImg = d3.select("div.image-box").append("svg")
                                     .attr("width", 1600)
                                     .attr("height", 300);

	var svgImgHeight = d3.select("svg").attr("height"); 
	var svgImgWidth = d3.select("svg").attr("width");                                     

	var svgRect = svgImg.append("rect")
	.attr("width", "100%")
	.attr("height", "100%")
	.attr("fill", "#89DB5F");

	//Draw the Circle


	for (var i = 0; i < Math.round(Math.random()*500); i++) {
		var circleArray=[];
		var circle = svgImg.append("circle")
		                      .attr("cx", Math.round(Math.random()*1500))
		                      .attr("cy", Math.round(Math.random()*1500))
		                     .attr("r", 15)
		                     .style("fill","#FFFFFF");
	  circle.transition().duration(10).attr("r",35);
		circleArray.push(circle);
	};                    

	d3.select('rect').transition().duration(10000).style("fill","#5AA7F5");
	d3.selectAll('circle').transition().duration(11200).attr("r",10);

	var circleCx = 0;
	var circleCy = 0;


	for (var i = 0; i < Math.round(Math.random()*500); i++) {
		var circleArray=[];
		var circle = svgImg.append("circle")
		                      .attr("cx", Math.round(Math.random()*1500))
		                      .attr("cy", Math.round(Math.random()*1500))
		                     .attr("r", 35)
		                     .style("fill","#FFFFFF");
	  circle.transition().duration(100).attr("r",25);
		circleArray.push(circle);
	};                   


	for (var i = 0; i < Math.round(Math.random()*500); i++) {
		var circleArray=[];
		var circle = svgImg.append("circle")
		                      .attr("cx", Math.round(Math.random()*1500))
		                      .attr("cy", Math.round(Math.random()*1500))
		                     .attr("r", 55)
		                     .style("fill","#FFFFFF");
	  circle.transition().duration(100).attr("r",15);
		circleArray.push(circle);
	};  


	for (var i = 0; i < Math.round(Math.random()*500); i++) {
		var circleArray=[];
		var circle = svgImg.append("circle")
		                      .attr("cx", Math.round(Math.random()*1500))
		                      .attr("cy", Math.round(Math.random()*1500))
		                     .attr("r", 95)
		                     .style("fill","#FFFFFF");
	  circle.transition().duration(100).attr("r",20);
		circleArray.push(circle);
	};          

// 	while (svgImgHeight>circleCy+50) {

// 	circle.transition().duration(1000).attr("cx",30).attr("cy", parseInt(circleCy)+30);
// 	 circleCy = circleCy + 50;  
// 	 console.log(circleCy);
// 	};


// 	console.log("svgImgHeight:" + svgImgHeight +"," + "circleCy:" + circleCy)
// 	if (svgImgHeight < circleCy + 100) {
// 	for (var i =0; i<220; i++) {
// 	   circle.transition().delay(3000).duration(1000).attr("cx", parseInt(circleCx)+30).attr("cy",circleCy);
// 	   circleCx = circleCx + 5;
// 	};
// 	};

// 	for (var i =0; i<150; i++) {
// 	   circle.transition().delay(5000).duration(1000).attr("cx", parseInt(circleCx)+30).attr("cy",circleCy);
// 	   circleCx = circleCx - 5;
// 	   circleCy = circleCy + 1;
// 	};




// 	circle.transition().attr("cx", 30).attr("cy",60);

// 	var circle2 = svgContainer.append("circle")
// 	                      .attr("cx", 60)
// 	                      .attr("cy", 60)
// 	                     .attr("r", 20)
// 	                     .style("fill","#FFFF33");

// 	var circle2 = svgContainer.append("circle")
// 	                      .attr("cx", 90)
// 	                      .attr("cy", 90)
// 	                     .attr("r", 20)
// 	                     .style("fill","#FFFF33");


 });




