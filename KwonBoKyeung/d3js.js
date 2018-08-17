window.addEventListener('DOMContentLoaded', function () {
  d3BarGraph();
  drawBar();
  d3CircleGraph();
  d3LineGraph();
});


function d3BarGraph() {
  var timeStartD3Bar = window.performance.now();

    var w = 350;
    var h = 350;
    var margin = { top: 10, right: 5, bottom: 10, left: 25 };

    var svg = d3.select("#d3BarGraph")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    //x,y축 범위 설정.

    var result = ['0', '1st', '2nd', '3rd', '4th', '5th'];
    var xAxisData = [1,2,3,4,5];

    var xAxis = d3.scaleLinear()
        .domain([0, 5])
        .range([0, w - margin.left - margin.right - 10]);

    var xAxisLabel = svg.selectAll("text")
        .data(xAxisData)
        .enter()
        .append("text")
        .attr("x", function (d) { return xAxis(d); })
        .attr("y", "345");

    var yAxis = d3.scaleLinear()
        .domain([0, 100])
        .range([h - margin.bottom - margin.top, 10]);

    var gx = svg.append("g")
        .attr("class", "x-axis")
        .attr('transform', 'translate(' + margin.left + ',' + (h - margin.bottom - margin.top) + ')')
        .call(d3.axisBottom(xAxis));

    var gy = svg.append("g")
        .attr("class", "y-axis")
        .attr('transform', 'translate(' + margin.left + ',0)')
        .call(d3.axisLeft(yAxis));


    svg.selectAll("path.domain")
        .style({
            "fill": "none",
            "stroke": "black",
        });

    svg.selectAll("line")
        .style({
            "stroke": "black",
        });

    svg.selectAll("text")
        .attr("fill", "black")
        .style("font-size", "11px");

    var timeEndD3Bar = window.performance.now();
    var timeD3Bar = timeEndD3Bar - timeStartD3Bar;
    document.getElementById("timestamp_d3BarChart").innerText = "d3 Bar Chart : " + timeD3Bar;
}

function drawBar() {

   var x = d3.scaleLinear()
      .domain([0, 4])
      .range([50, 300]);

  var yValue = d3.scaleLinear()
    .domain([0, 110])
    .range([330, 330 - (3.2 * 110)]);
  var hValue = d3.scaleLinear()
    .domain([0, 110])
    .range([0, 3.2 * 110]);

   var dataBar = d3.select("#d3BarGraph svg");

   dataBar.selectAll("rect")
      .data([50, 40, 30, 60 , 70])
      .enter()
      .append("rect")
      .attr("class", "barDraw")
    .attr("height", function (d) { return hValue(d); })
    .attr("width", "35")
      .attr("x", function (d, i) { return x(i); })
    .attr("y", function (d) { return yValue(d); })
    .attr("fill", 'rgba(255, 99, 132, 0.5)');


}



/* d3.js CircleGraph */
function d3CircleGraph() {
  var timeStartD3Circle = window.performance.now();


  var data = [10, 15, 20, 25 , 30];

    var width = 350,
        height = 350,
        radius = width / 2;

    var color = d3.scaleOrdinal()
                  .range(["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"]);

    var arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.pie()
                .sort(null)
                .value(function(d) {return d;});

   var svg = d3.select("#d3CircleGraph")
               .append("svg")
               .attr("width", width)
               .attr("height", height)
               .append("g")
               .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

   var g = svg.selectAll(".arc")
              .data(pie(data))
              .enter().append("g")
              .attr("class", "arc");

    g.append("path")
     .attr("d", arc)
     .style("fill", function(d) { return color(d.data); })
     .transition()
     .ease(d3.easeLinear)
     .duration(2000);

    g.append("text").transition()
     .ease(d3.easeLinear)
     .duration(2000)
     .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
     .attr("dy", ".35em")
     .text(function(d) { return d.data; });

    svg.selectAll(".arc")
       .transition()
       .duration(1500)
       .ease(d3.easeLinear)
       .style("opacity", "1.0");

       var timeEndD3Circle = window.performance.now();
       var timeD3Circle = timeEndD3Circle - timeStartD3Circle;
       document.getElementById("timestamp_d3CircleChart").innerText = "d3 Circle Chart : " + timeD3Circle;


}

function d3LineGraph(){
  var timeStartD3Line = window.performance.now();

    var margin = {
            top: 15,
            right: 25,
            bottom: 20,
            left: 25
        },
        width = 350 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;


    var n = 10;

    var xScale = d3.scaleLinear()
        .domain([0, n - 1])
        .range([0, width]);


    var yScale = d3.scaleLinear()
        .domain([0, 1])
        .range([height, 0]);

    // 7. d3's line generator
    var line = d3.line()
        .x(function (d, i) {
            return xScale(i);
        })
        .y(function (d) {
            return yScale(d.y);
        })
        .curve(d3.curveMonotoneX); // apply smoothing to the line

    var dataset = d3.range(n).map(function (d) {
        return {
            "y": d3.randomUniform(1)()
        };
    });

    var svg = d3.select("#d3LineGraph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale));

    svg.append("path")
        .datum(dataset)
        .attr("class", "line")
        .attr("style", "fill: none; stroke: rgba(255, 99, 132, 0.5); stroke - width: 3;")
        .attr("d", line)
        .style("opacity","0.5");


    //animation(transition)
    svg.selectAll("path")
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .style("opacity", "1.0");


    var timeEndD3Line = window.performance.now();
    var timeD3Line = timeEndD3Line - timeStartD3Line;
    document.getElementById("timestamp_d3LineChart").innerText = "d3 Line Chart : " + timeD3Line;


}



function d3BubbleGraph(){
  var timeStartD3Bubble = window.performance.now();

      var dataset = {
          "children": [{"TIMES":"1st","RESULT":4319},
                       {"TIMES":"2nd","RESULT":4159},
                       {"TIMES":"3rd","RESULT":2583},
                       {"TIMES":"4th","RESULT":2074},
                       {"TIMES":"5th","RESULT":1268}]
      };

      var diameter = 350;

      var color = d3.scaleOrdinal(d3.schemeCategory20);

      var bubble = d3.pack(dataset)
                  .size([diameter, diameter])
                  .padding(1.5);

      var node = svg.selectAll(".node")
                  .data(bubble(nodes).descendants())
                  .enter()
                  .filter(function(d){
                      return  !d.children
                  })
                  .append("g")
                  .attr("class", "node")
                  .attr("transform", function(d) {
                      return "translate(" + d.x + "," + d.y + ")";
                  });


      var svg = d3.select("#d3BubbleGraph")
          .append("svg")
          .attr("width", diameter)
          .attr("height", diameter)
          .attr("class", "bubble");

      var nodes = d3.hierarchy(dataset)
          .sum(function(d) { return d.Count; });


      node.append("title")
          .text(function(d) {
              return d.Name + ": " + d.Count;
          });

      node.append("circle")
          .attr("r", function(d) {
              return d.r;
          })
          .style("fill", function(d,i) {
              return color(i);
          });

      node.append("text")
          .attr("dy", ".2em")
          .style("text-anchor", "middle")
          .text(function(d) {
              return d.data.Name.substring(0, d.r / 3);
          })
          .attr("font-family", "sans-serif")
          .attr("font-size", function(d){
              return d.r/5;
          })
          .attr("fill", "white");

      node.append("text")
          .attr("dy", "1.3em")
          .style("text-anchor", "middle")
          .text(function(d) {
              return d.data.Count;
          })
          .attr("font-family",  "Gill Sans", "Gill Sans MT")
          .attr("font-size", function(d){
              return d.r/5;
          })
          .attr("fill", "white");

      d3.select(self.frameElement)
          .style("height", diameter + "px");

      var timeEndD3Bubble = window.performance.now();
      var timeD3Bubble = timeEndD3Bubble - timeStartD3Bubble;
      document.getElementById("timestamp_d3BubbleChart").innerText = "d3 Bubble Chart : " + timeD3Bubble;



}
