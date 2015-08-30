
$(document).ready(function(){
	// Init Impress
	impress().init();

	sectionOpacity();
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
		}
	setTimeout(function(){
		sectionOpacity();
	},5000);
	}
	









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
