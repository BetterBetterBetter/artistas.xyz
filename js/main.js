
$(document).ready(function(){
	// Init Impress
	impress().init();


//Maintain section-related semi-transparency
	setInterval(sectionOpacity,5000);
	function sectionOpacity(){
		var $active = $('.step.active');
		var $cardinal = $('.step.cardinal');
		var $fixed = $('.step.fixed');
		var $mutable = $('.step.mutable');
		
		if ( $($active).hasClass('cardinal') ){
			$($cardinal).addClass('semitransp');
			$($fixed).removeClass('semitransp');
			$($mutable).removeClass('semitransp');
		} else if ( $($active).hasClass('fixed') ){
			$($cardinal).removeClass('semitransp');
			$($fixed).addClass('semitransp');
			$($mutable).removeClass('semitransp');
		} else if ( $($active).hasClass('mutable') ){
			$($cardinal).removeClass('semitransp');
			$($fixed).removeClass('semitransp');
			$($mutable).addClass('semitransp');
		} else if ( $($active).hasClass('overview') ){
			$($cardinal).addClass('demitransp');
			$($fixed).addClass('demitransp');
			$($mutable).addClass('demitransp');
		} else if ( !$($active).hasClass('overview') ){
			$($cardinal).removeClass('demitransp');
			$($fixed).removeClass('demitransp');
			$($mutable).removeClass('demitransp');
		}
	}



//Add tooltips
$('.tooltipable').each(function() {
    $(this).qtip({
        content: {
            text: $(this).attr('title')
        },
     	style: { 
			tip: true
		},
		position: {
	        my: 'right center',  // Position my top left...
	        at: 'left center', // at the bottom right of...
	        target: $(this) // my target
	    } 
	    });
});
$('.tooltipableCell').each(function() {
    $(this).qtip({
        content: {
            text: $(this).attr('title')
        },
     	style: {
     		classes: 'QtipCell',
     		width: $('.CRMtable td').width(), 
			tip: true
		},
		position: {
	        my: 'center',  // Position my top left...
	        at: 'center', // at the bottom right of...
	        target: $(this) // my target
	    } 
	    });
});




/////Graphics, Charts, and Graphs, oh my!

//THE (chart) WATCHER
setInterval(chartWatcher,1000);
function chartWatcher(){

	var $active = $('.step.active');
	if ( $($active).hasClass('chart') ) {

		$($active).toggleClass('chart').toggleClass('charted');

		if( $active[0].id === "CPMchartMo"){
			setTimeout(MonthlyCPM,2000);
		} else if( $active[0].id === "CPMchartYear"){
			setTimeout(YearlyCPM,2000);
		} else if( $active[0].id === "CPMchartBig"){
			setTimeout(BigCPM,2000);
		} if( $active[0].id === "CBA1"){
			setTimeout(CBA1,2000);
		}

		

	}


}






function MonthlyCPM() {

	var data = {
	    labels: ["0", "500","1000","1500","2000","2500","3000","3500","4000","4500","5000","5500","6000","6500","7000","7500","8000","8500","9000","9500","10000","15000","20000","25000","50000"],
	    datasets: [
	        {
	            label: "One Ad ",
	            fillColor: "rgba(225, 35, 35, 0.5)",
	            strokeColor: "rgba(225, 35, 35, 1)",
	            pointColor: "rgba(225, 35, 35, 1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(225, 35, 35, 0.5)",
	            data: [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,15,20,25,50]
	        },
	        {
	            label: "Two Ads ",
	            fillColor: "rgba(240, 119, 20, 0.3)",
	            strokeColor: "rgba(240, 119, 20, 1",
	            pointColor: "rgba(240, 119, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 119, 20, 0.5)",
	            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,100]
	        },
	                {
	            label: "Three Ads",
	            fillColor: "rgba(240, 225, 20, 0.25)",
	            strokeColor: "rgba(240, 225, 20, 1)",
	            pointColor: "rgba(240, 225, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 225, 20, 0.5)",
	            data: [0,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15,16.5,18,19.5,21,22.5,24,25.5,27,28.5,30,45,60,75,150]
	        },
	                {
	            label: "Four Ads  ",
	            fillColor: "rgba(71, 240, 20, 0.2)",
	            strokeColor: "rgba(71, 240, 20, 1)",
	            pointColor: "rgba(71, 240, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(71, 240, 20, 0.5)",
	            data: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,60,80,100,200]
	        },
	                {
	            label: "Five Ads   ",
	            fillColor: "rgba(20, 31, 240, 0.15)",
	            strokeColor: "rgba(20, 31, 240, 1)",
	            pointColor: "rgba(20, 31, 240, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(20, 31, 240, 0.5)",
	            data: [0,2.5,5,7.5,10,12.5,15,17.5,20,22.5,25,27.5,30,32.5,35,37.5,40,42.5,45,47.5,50,75,100,125,250]
	        },
	                {
	            label: "Six Ads    ",
	            fillColor: "rgba(203, 20, 240, 0.1)",
	            strokeColor: "rgba(203, 20, 240, 1)",
	            pointColor: "rgba(203, 20, 240, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(203, 20, 240, 0.5)",
	            data:  [0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,90,120,150,300]
	        },
	                {
	            label: "Seven Ads",
	            fillColor: "rgba(240, 20, 119, 0.05)",
	            strokeColor: "rgba(240, 20, 119, 1)",
	            pointColor: "rgba(240, 20, 119, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 20, 119, 0.5)",
	            data:[0,3.5,7,10.5,14,17.5,21,24.5,28,31.5,35,38.5,42,45.5,49,52.5,56,59.5,63,66.5,70,105,140,175,350]
	        }
	    ]
	};

	var options = {

	    pointHitDetectionRadius : 10,

	    multiTooltipTemplate: "$ <%= value %>/mo",

	    legendTemplate : "<ul class=\"slideInTop <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
	};

	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("CPM1_line").getContext("2d");
	var myLineChart = new Chart(ctx).Line(data, options);
	  var legend1 = myLineChart.generateLegend();
	  $('#CPM1_legend').html(legend1);
}
//end of MonthlyCPM

function YearlyCPM() {

	var data = {
	    labels: ["0", "500","1000","1500","2000","2500","3000","3500","4000","4500","5000","5500","6000","6500","7000","7500","8000","8500","9000","9500","10000","15000","20000","25000","50000"],
	    datasets: [
	        {
	            label: "One Ad ",
	            fillColor: "rgba(225, 35, 35, 0.5)",
	            strokeColor: "rgba(225, 35, 35, 1)",
	            pointColor: "rgba(225, 35, 35, 1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(225, 35, 35, 0.5)",
	            data: [0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,180,240,300,600]
	        },
	        {
	            label: "Two Ads ",
	            fillColor: "rgba(240, 119, 20, 0.3)",
	            strokeColor: "rgba(240, 119, 20, 1",
	            pointColor: "rgba(240, 119, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 119, 20, 0.5)",
	            data: [0,12,24,36,48,60,72,84,96,108,120,132,144,156,168,180,192,204,216,228,240,360,480,600,1200]
	        },
	                {
	            label: "Three Ads",
	            fillColor: "rgba(240, 225, 20, 0.25)",
	            strokeColor: "rgba(240, 225, 20, 1)",
	            pointColor: "rgba(240, 225, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 225, 20, 0.5)",
	            data: [0,18,36,54,72,90,108,126,144,162,180,198,216,234,252,270,288,306,324,342,360,540,720,900,1800]
	        },
	                {
	            label: "Four Ads  ",
	            fillColor: "rgba(71, 240, 20, 0.2)",
	            strokeColor: "rgba(71, 240, 20, 1)",
	            pointColor: "rgba(71, 240, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(71, 240, 20, 0.5)",
	            data: [0,24,48,72,96,120,144,168,192,216,240,264,288,312,336,360,384,408,432,456,480,720,960,1200,2400]
	        },
	                {
	            label: "Five Ads   ",
	            fillColor: "rgba(20, 31, 240, 0.15)",
	            strokeColor: "rgba(20, 31, 240, 1)",
	            pointColor: "rgba(20, 31, 240, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(20, 31, 240, 0.5)",
	            data: [0,30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510,540,570,600,900,1200,1500,3000]
	        },
	                {
	            label: "Six Ads    ",
	            fillColor: "rgba(203, 20, 240, 0.1)",
	            strokeColor: "rgba(203, 20, 240, 1)",
	            pointColor: "rgba(203, 20, 240, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(203, 20, 240, 0.5)",
	            data:  [0,36,72,108,144,180,216,252,288,324,360,396,432,468,504,540,576,612,648,684,720,1080,1440,1800,3600]

	        },
	                {
	            label: "Seven Ads",
	            fillColor: "rgba(240, 20, 119, 0.05)",
	            strokeColor: "rgba(240, 20, 119, 1)",
	            pointColor: "rgba(240, 20, 119, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 20, 119, 0.5)",
	            data: [0,42,84,126,168,210,252,294,336,378,420,462,504,546,588,630,672,714,756,798,840,1260,1680,2100,4200]
	        }
	    ]
	};
	var options = {

	    pointHitDetectionRadius : 10,

	    multiTooltipTemplate: "$ <%= value %>/yr",

	    legendTemplate : "<ul class=\"slideInTop <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
	};

	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("CPM2_line").getContext("2d");
	var myChart = new Chart(ctx).Line(data, options);
	  var legend2 = myChart.generateLegend();
	  $('#CPM2_legend').html(legend2);
}
//end of YearlyCPM


function BigCPM() {

	var data = {
	    labels: [".5B","1B","1.5B","2B","2.5B","3B","3.5B","4B","4.5B","5B"],
	    datasets: [
	        {
	            label: "One Ad ",
	            fillColor: "rgba(225, 35, 35, 0.5)",
	            strokeColor: "rgba(225, 35, 35, 1)",
	            pointColor: "rgba(225, 35, 35, 1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(225, 35, 35, 0.5)",
	            data: [6000000,12000000,18000000,24000000,30000000,36000000,42000000,48000000,54000000,60000000]
   			},
	        {
	            label: "Two Ads ",
	            fillColor: "rgba(240, 119, 20, 0.3)",
	            strokeColor: "rgba(240, 119, 20, 1",
	            pointColor: "rgba(240, 119, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 119, 20, 0.5)",
	            data: [12000000,24000000,36000000,48000000,60000000,72000000,84000000,96000000,108000000,120000000]
	        },
	                {
	            label: "Three Ads",
	            fillColor: "rgba(240, 225, 20, 0.25)",
	            strokeColor: "rgba(240, 225, 20, 1)",
	            pointColor: "rgba(240, 225, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 225, 20, 0.5)",
	            data: [18000000,36000000,54000000,72000000,90000000,108000000,126000000,144000000,162000000,180000000]
	        },
	                {
	            label: "Four Ads  ",
	            fillColor: "rgba(71, 240, 20, 0.2)",
	            strokeColor: "rgba(71, 240, 20, 1)",
	            pointColor: "rgba(71, 240, 20, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(71, 240, 20, 0.5)",
	            data: [24000000,48000000,72000000,96000000,120000000,144000000,168000000,192000000,216000000,240000000]
	        },
	                {
	            label: "Five Ads   ",
	            fillColor: "rgba(20, 31, 240, 0.15)",
	            strokeColor: "rgba(20, 31, 240, 1)",
	            pointColor: "rgba(20, 31, 240, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(20, 31, 240, 0.5)",
	            data: [30000000,60000000,90000000,120000000,150000000,180000000,210000000,240000000,270000000,300000000]
	        },
	                {
	            label: "Six Ads    ",
	            fillColor: "rgba(203, 20, 240, 0.1)",
	            strokeColor: "rgba(203, 20, 240, 1)",
	            pointColor: "rgba(203, 20, 240, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(203, 20, 240, 0.5)",
	            data:  [36000000,72000000,108000000,144000000,180000000,216000000,252000000,288000000,324000000,360000000]

	        },
	                {
	            label: "Seven Ads",
	            fillColor: "rgba(240, 20, 119, 0.05)",
	            strokeColor: "rgba(240, 20, 119, 1)",
	            pointColor: "rgba(240, 20, 119, 0.5)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240, 20, 119, 0.5)",
	            data: [42000000,84000000,126000000,168000000,210000000,252000000,294000000,336000000,378000000,420000000]
	        }
	    ]
	};
	var options = {

	    pointHitDetectionRadius : 10,

	    multiTooltipTemplate: "$ <%= value %>/yr",

	    legendTemplate : "<ul class=\"slideInTop <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
	};

	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("CPM3_line").getContext("2d");
	var myChart = new Chart(ctx).Line(data, options);
	  var legend3 = myChart.generateLegend();
	  $('#CPM3_legend').html(legend3);
}
//end of BigCPM

function CBA1() {


var data = {
    labels: ["Website", "Email", "Blog", "Directories", "Social Media", "CRM", "Forum", "Offers", "Events", "Videos", "Community", "Reputation"],
    datasets: [
        {
            label: "Costs/Labor",
            fillColor: "rgba(220,20,20,0.5)",
            strokeColor: "rgba(220,20,20,1)",
            pointColor: "rgba(220,20,20,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,20,20,1)",
            data: [58]
        },
        {
            label: "Revenue",
            fillColor: "rgba(33,88,205,0.2)",
            strokeColor: "rgba(33,88,205,1)",
            pointColor: "rgba(33,88,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(33,88,205,1)",
            data: [92]
        },
         {
            label: "Community Engagement",
            fillColor: "rgba(33,205,33,0.2)",
            strokeColor: "rgba(33,205,33,1)",
            pointColor: "rgba(33,205,33,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(33,205,33,1)",
            data: [28]
        },
    ]
};


var options = 
	{
    
	    legendTemplate : "<ul class=\"slideInTop <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
	}
	var ctx = document.getElementById("CBA1_radar").getContext("2d");
	var CBA1_radar = new Chart(ctx).Radar(data, options);
	  var legend4 = CBA1_radar.generateLegend();
	  $('#CBA1_legend').html(legend4);



	function nextData1(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([58, 92, 28], "Website");
    	}
	}
		function nextData2(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([13, 45, 22], "Email");
    	}
	}
		function nextData3(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([71, 69, 83], "Blog");
    	}
	}
		function nextData4(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([12,45,9], "Directories");
    	}
	}
		function nextData5(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([43,78,85], "Social Media");
    	}
	}
		function nextData6(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([78,57,12], "CRM");
    	}
	}
		function nextData7(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([64,88,90], "Forum");
    	}
	}
		function nextData8(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([19, 45, 30], "Offers");
    	}
	}
		function nextData9(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([45,63,80], "Events");
    	}
	}
		function nextData10(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([91,55,79], "Videos");
    	}
	}
		function nextData11(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([82,100,100], "Online Community");
    	}
	}
	function nextData12(CBA1_radar){
    	return function(){
    		CBA1_radar.addData([18,40,11], "Reputation Monitoring");
    	}
	}

	//setTimeout(nextData1(CBA1_radar),1111);
	setTimeout(nextData2(CBA1_radar),4222);
	setTimeout(nextData3(CBA1_radar),8333);
	setTimeout(nextData4(CBA1_radar),12444);
	setTimeout(nextData5(CBA1_radar),16555);
	setTimeout(nextData6(CBA1_radar),20666);
	setTimeout(nextData7(CBA1_radar),24777);
	setTimeout(nextData8(CBA1_radar),28888);
	setTimeout(nextData9(CBA1_radar),32999);
	setTimeout(nextData10(CBA1_radar),36111);
	setTimeout(nextData11(CBA1_radar),40111);
	setTimeout(nextData12(CBA1_radar),44111);




}
//end CBA1






//First D3 -- Circle Packing
	var margin = 0	,
	    diameter = 600;

	var color = d3.scale.linear()
	    .domain([-1, 5])
	    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
	    .interpolate(d3.interpolateHcl);

	var pack = d3.layout.pack()
	    .padding(2)
	    .size([diameter - margin, diameter - margin])
	    .value(function(d) { return d.size; })

	var svg = d3.select("#chart1").append("svg")
	    .attr("width", diameter)
	    .attr("height", diameter)
	  .append("g")
	    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

	d3.json("SEO.json", function(error, root) {
	  if (error) throw error;

	  var focus = root,
	      nodes = pack.nodes(root),
	      view;

	  var circle = svg.selectAll("circle")
	      .data(nodes)
	    .enter().append("circle")
	      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
	      .style("fill", function(d) { return d.children ? color(d.depth) : null; })
	      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

	  var text = svg.selectAll("text")
	      .data(nodes)
	    .enter().append("text")
	      .attr("class", function(d) { return d.parent === root ? "labelHead" : "label"; })
	      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
	      .style("display", function(d) { return d.parent === root ? null : "none"; })
	      .text(function(d) { return d.name; });

	  var node = svg.selectAll("circle,text");

	  d3.select("#chart1")
	      .on("click", function() { zoom(root); });

	  zoomTo([root.x, root.y, root.r * 2 + margin]);

	  function zoom(d) {

	    var focus0 = focus; focus = d;

	    var transition = d3.transition()
	        .duration(d3.event.altKey ? 7500 : 750)
	        .tween("zoom", function(d) {
	          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
	          return function(t) { zoomTo(i(t)); };
	        });

	    transition.selectAll("text")
	      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
	        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
	        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
	        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
	  }


	  function zoomTo(v) {
	    var k = diameter / v[2]; view = v;
	    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
	    circle.attr("r", function(d) { return d.r * k; });
	  }

	});

	d3.select(self.frameElement).style("height", diameter + "px");










//Second D3 -- layout force
	var w = 600;
	var h = 600;

	var node,
	    link,
	    text,
	    root;

	var vis = d3.select("#chart2").append("svg")
	    .attr("width", w)
	    .attr("height", h);

	var link = vis.selectAll(".link"),
	    node = vis.selectAll(".node")


	var force = d3.layout.force()
	    .linkDistance(function(d) { return d.target._children ? 180 : 130; })
	    .charge(function(d) { return d._children ? -d.size / 500 : -250; })
	    .gravity(.05)
	    .size([w, h])
	    .on("tick", tick);

	d3.json("SEO2.json", function(json) {
	  root = json;
	  root.fixed = true;
	  root.x = w / 2;
	  root.y = h / 2 - 80;
	  update();
	});



	function update() {
	  var nodes = flatten(root),
	      links = d3.layout.tree().links(nodes);

	  // Restart the force layout.
	  force
	      .nodes(nodes)
	      .links(links)
	      .start();

	  link = link.data(links, function(d) { return d.target.id; });


	  // Enter any new links.
	  link.enter().insert("svg:line", ".node")
	      .attr("class", "link")
	      .attr("x1", function(d) { return d.source.x; })
	      .attr("y1", function(d) { return d.source.y; })
	      .attr("x2", function(d) { return d.target.x; })
	      .attr("y2", function(d) { return d.target.y; });

	  // Exit any old links.
	  link.exit().remove();

	  // Update the nodes…

	  node = node.data(nodes, function(d) { return d.id; });

	  node.exit().remove();

	  var nodeEnter = node.enter().append("g")
	      .attr("class", "node")
	      .on("click", click)
	      .call(force.drag);

	  nodeEnter.append("circle")
	      .attr("r", function(d) { return d.children ? 5 : Math.sqrt(d.size) / 10; });

	  nodeEnter.append("text")
	      .attr("dy", ".55em")
	      .text(function(d) { return d.name; });

	  node.select("circle")
	      .style("fill", color2)
	      .transition()
	      .attr("r", function(d) { return d.children ? 5 : Math.sqrt(d.size) / 10; });

	}

	function tick() {
	  link.attr("x1", function(d) { return d.source.x; })
	      .attr("y1", function(d) { return d.source.y; })
	      .attr("x2", function(d) { return d.target.x; })
	      .attr("y2", function(d) { return d.target.y; });

	  node.attr("cx", function(d) { return d.x; })
	      .attr("cy", function(d) { return d.y; })
	      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
	  
	}

	// Color leaf nodes orange, and packages white or blue.
	function color2(d) {
	  return d._children ? "#3182bd" : d.children ? "#5836A9" : "#4DC2CA";
	}

	// Toggle children on click.
	function click(d) {
	  if (d.children) {
	    d._children = d.children;
	    d.children = null;
	  } else {
	    d.children = d._children;
	    d._children = null;
	  }
	  update();
	}

	//Initial collapse
	function collapse(){
		var nodes = flatten(root);
		nodes.forEach(function(d) {
		  if (d.children) {
		    d._children = d.children;
		    d.children = null;
		  } else {
		    d.children = d._children;
		    d._children = null;
		  }
		  update();
		});
	}
	setTimeout(function(){
		collapse();
	},1111);

	// Returns a list of all nodes under the root.
	function flatten(root) {
	  var nodes = [], i = 0;

	  function recurse(node) {
	    if (node.children) node.size = node.children.reduce(function(p, v) { return p + recurse(v); }, 0);
	    if (!node.id) node.id = ++i;
	    nodes.push(node);
	    return node.size;
	  }

	  root.size = recurse(root);
	  return nodes;



	}








});
