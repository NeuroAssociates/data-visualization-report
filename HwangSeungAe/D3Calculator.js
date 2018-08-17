//--------------------------D3.js----------------------------//
document.addEventListener('DOMContentLoaded', function () {
  insertD3BarGraph();
  insertD3CircleGraph();
  insertD3LineGraph();
});

//d3  bar-graph
function insertD3BarGraph() {

  var timeStartD3Bar = window.performance.now();

  var svg = d3.select("#d3BarGraph")
              .append("svg")
              .attr("width", "600")
              .attr("height", "700")



  //x축 insert
  var xAxis = svg.append("line")
                 .attr("x1", "75")
                 .attr("x2", "600")
                 .attr("y1", "340")
                 .attr("y2", "340")
                 .style("stroke", "black")


  //y축 insert
  var yAxis = svg.append("line")
                 .attr("x1", "75")
                 .attr("x2", "75")
                 .attr("y1", "0")
                 .attr("y2", "340")
                 .style("stroke", "black")


  //inner axis insert
  var innerAxis = svg.append("line")
                     .attr("x1", "110")
                     .attr("x2", "580")
                     .attr("y1", "280")
                     .attr("y2", "280")
                     .attr("class", "innerAxis")

  var innerAxis = svg.append("line")
                     .attr("x1", "110")
                     .attr("x2", "580")
                     .attr("y1", "220")
                     .attr("y2", "220")
                     .attr("class", "innerAxis")

  var innerAxis = svg.append("line")
                     .attr("x1", "110")
                     .attr("x2", "580")
                     .attr("y1", "160")
                     .attr("y2", "160")
                     .attr("class", "innerAxis")

  var innerAxis = svg.append("line")
                     .attr("x1", "110")
                     .attr("x2", "580")
                     .attr("y1", "100")
                     .attr("y2", "100")
                     .attr("class", "innerAxis")

  var innerAxis = svg.append("line")
                     .attr("x1", "110")
                     .attr("x2", "580")
                     .attr("y1", "40")
                     .attr("y2", "40")
                     .attr("class", "innerAxis")



  //x축 text
  var xAxisText = svg.append("text")
                     .attr("x", "120")
                     .attr("y", "365")
                     .text("1ST")
                     .style("font-size", "18px");

  var xAxisText = svg.append("text")
                     .attr("x", "220")
                     .attr("y", "365")
                     .text("2ND")
                     .style("font-size", "18px");

  var xAxisText = svg.append("text")
                     .attr("x", "320")
                     .attr("y", "365")
                     .text("3RD")
                     .style("font-size", "18px");

  var xAxisText = svg.append("text")
                     .attr("x", "420")
                     .attr("y", "365")
                     .text("4TH")
                     .style("font-size", "18px");

  var xAxisText = svg.append("text")
                     .attr("x", "520")
                     .attr("y", "365")
                     .text("5TH")
                     .style("font-size", "18px");



  //y축 text
  var yAxisText = svg.append("text")
                     .attr("x", "38")
                     .attr("y", "25")
                     .text("100")
                     .style("font-size", "18px");
  var yAxisText = svg.append("text")
                     .attr("x", "44")
                     .attr("y", "95")
                     .text("80")
                     .style("font-size", "18px");

  var yAxisText = svg.append("text")
                     .attr("x", "44")
                     .attr("y", "160")
                     .text("60")
                     .style("font-size", "18px");

  var yAxisText = svg.append("text")
                     .attr("x", "44")
                     .attr("y", "225")
                     .text("40")
                     .style("font-size", "18px");

  var yAxisText = svg.append("text")
                     .attr("x", "44")
                     .attr("y", "285")
                     .text("20")
                     .style("font-size", "18px");

  var yAxisText = svg.append("text")
                     .attr("x", "52")
                     .attr("y", "340")
                     .text("0")
                     .style("font-size", "18px");


  //x라벨
  var xLabel = svg.append("text")
                  .attr("x", "288")
                  .attr("y", "385")
                  .attr("class", "label")
                  .text("CALCULATE")
                  .style("font-size", "18px");



  //y라벨
  var yLabel = svg.append("text")
                  .attr("x", "-2")
                  .attr("y", "195")
                  .attr("class", "label")
                  .text("RESULT")
                  .style("font-size", "18px");

  //insert Bar
  var dataQueue = d3.selectAll("#d3Graph svg rect");

  var xLotation = d3.scaleLinear()
                    .domain([0, 4])
                    .range([120, 520]);

  var yLotation = d3.scaleLinear()
                    .domain([0, 110])
                    .range([339, 339 - (3.00 * 110)]);

  var heightLotation = d3.scaleLinear()
                         .domain([0, 110])
                         .range([0, 3.00 * 110]);

  var data = svg.selectAll("rect")
                .data([20, 60, 40, 100, 80])
                .enter()
                .append("rect")
                .attr("x", function (d, i) {
                    return xLotation(i);
                })
                .attr("width", "30")
                .attr("height", 0)
                .attr("y", 340)
                .transition()
                .duration(1200)
                .attr("y", function (d) {
                    return yLotation(d);
                })
                .attr("height", function (d) {
                    return heightLotation(d);
                })
                .attr("stroke", "yellowgreen")
                .attr("fill", "#FFFAAA");

  var timeEndD3Bar = window.performance.now();
  var timeD3Bar = timeEndD3Bar - timeStartD3Bar;
  document.getElementById("timestamp_d3BarChart").innerText = "D3 Bar Chart Execution Time : " + timeD3Bar;
}

//d3 circle-graph
function insertD3CircleGraph() {

  var timeStartD3Circle = window.performance.now();

  var width = 570;
  var height = 350;
  var colorData = ["lightseagreen", "lightcoral", "gold", "silver", "plum"];
  var data = [90, 70, 50, 30, 10];
  //pie 생성
  var pie = d3.pie();
  //안쪽, 바깥쪽 반지름 설정
  var radius = d3.arc().innerRadius(60).outerRadius(170);


  var svg = d3.select("#d3CircleGraph")
              .append("svg")
              .attr("width", width)
              .attr("height", height)
              // .attr("transform", "translate(620 -1120)");



  //원 그래프 그리기
  var circleGraph = svg.selectAll(".path")
                       .data(pie(data))
                       .enter()
                       .append("g")
                       .attr("class", "circle")
                       .attr("transform", "translate(" + (width/2) + "," + (height/2) + ")");

                    circleGraph.append("path")
                               .style("fill", function(d, i) {
           		                    return colorData[i];
           	                    })
                               .transition()
                               .duration(500)
                               .delay(function(d, i) {
                                 return i * 500;
                               })
                               .attrTween("d", function(d, i) {
                                 var interpolate = d3.interpolate(
                                   {startAngle : d.startAngle, endAngle : d.startAngle},
                                   {startAngle : d.startAngle, endAngle : d.endAngle}
                                 );
                                 return function(t){
                                   return radius(interpolate(t));
                                 }
                               });

                   // text 태그로 결과값 넣기
                    circleGraph.append("text")
                               .attr("class", "circleText")
                             	 .attr("transform", function(d) { return "translate(" + radius.centroid(d) + ")"; })
                             	 .attr("dy", ".5em")
                             	 .style("text-anchor", "middle")
                               .style("font-size", "20px")
                             	 .text(function(d, i) {
                             	  	return data[i];
                             	 });
                    svg.append("text")
                       .attr("transform", "translate(" + (width/2-32) + "," + (height/2+7) + ")")
                       .style("font-size", "20px")
                       .text("RESULT");

      var timeEndD3Circle = window.performance.now();
      var timeD3Circle = timeEndD3Circle - timeStartD3Circle;
      document.getElementById("timestamp_d3CircleChart").innerText = "D3 Circle Chart Execution Time : " + timeD3Circle;

  }

  //d3 line graph
  function insertD3LineGraph() {

    var timeStartD3Line = window.performance.now();

    var dataset = [ {'1ST': 10, '2ND':50, '3RD':30, '4TH':90, '5TH':70} ];

     var keys = d3.keys(dataset[0]);
     var data = [];

     dataset.forEach(function(d, i) {
        data[i] = keys.map(function(key) {
          return {x: key, y: d[key]};
        })
      });

      var margin = {left: 20, top: 10, right: 10, bottom: 20};
      var svg = d3.select("#d3LineGraph")
                  .append("svg")
                  .attr("width", "550")
                  .attr("height", "350")


      var width = parseInt(svg.style("width"), 10) - margin.left - margin.right;
      var height = parseInt(svg.style("height"), 10)- margin.top - margin.bottom;

      var svgG = svg.append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var xScale = d3.scalePoint()
          .domain(keys)
          .rangeRound([0, width]);

      var yScale = d3.scaleLinear()
          .domain([0, d3.max(dataset, function(d) {
              return d3.max(keys, function(key) {
              return d[key];
              });
            })
          ])
          .nice()
          .range([height, 0]);

      var colors = d3.scaleOrdinal(d3.schemeCategory20);

      svgG.append("g")
          .attr("class", "grid")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(xScale)
          .tickSize(-height)
      );

      svgG.append("g")
          .attr("class", "grid")
          .call(d3.axisLeft(yScale)
          .ticks(10)
          .tickSize(-width)
      );

      var line = d3.line()
          .curve(d3.curveBasis)
          .x(function(d) { return xScale(d.x); })
          .y(function(d) { return yScale(d.y); });

      var lineG = svgG.append("g")
          .selectAll("g")
          .data(data)
          .enter()
          .append("g");


      lineG.append("path")
          .attr("class", "lineChart")
          .attr("d", line);

          var timeEndD3Line = window.performance.now();
          var timeD3Line = timeEndD3Line - timeStartD3Line;
          document.getElementById("timestamp_d3LineChart").innerText = "D3 Line Chart Execution Time : " + timeD3Line;
  }
