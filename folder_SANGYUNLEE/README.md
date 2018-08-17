Compare existed Chart library 
======

Draw chart using svg, chart.js, billboard.js, google chart, toast UI and compare each library's running time and diversity.

* How to Call library module?
* Check the level of the construct diffuculty
* Compare execution time for each chart module
* Check chart diversity and using module

<br>
Call chart library
------
1. Chart.js
``` r        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
```
2. Billboard.js
```r
 <link rel="stylesheet" href="lib/billboard.css">
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="lib/billboard.js"></script>
```
3. Google chart
``` r        
   <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script
```
4. Toast UI
``` r
    <link rel="stylesheet" href="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.css">
    <script type='text/javascript' src='https://rawgit.com/nhnent/tui.code-snippet/v1.3.0/dist/tui-code-snippet.js'></script>
    <script type='text/javascript' src='https://rawgit.com/nhnent/raphael/v2.2.0b/raphael.js'></script>
    <script src="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.js"></script>
```

5. D3.js chart
```r
<script src="https://d3js.org/d3.v4.min.js"></script>
```
Chart.js, Google chart and D3.js need only one link to activate module.<br>
However, Billboard.js and Toast UI need two or more script and css to execute library.<br>
You can expect that rest of two chart library are slower the than other chart library.

**Chart.js, Google Chart, D3.js << Billboard.js, Toast UI**

<br>
Difficulty of making chart level of difficulty
------

This is simple type of line chart

1. Chart.js
``` r        
new Chart(document.getElementById(""), {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
          data: [],
          label: "",
        },
      ]
    },
  });
```

2. Billboard.js
``` r        
bb.generate({
    data:{},
    size: {},
    bindto: "#~~"
  });
```

3. Google Chart
``` r
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawGoogleLineChart);
function drawGoogleLineChart(){
  var data = new google.visualization.arrayToDataTable([
  ]);
      var options = {
      };
      var chart = new google.charts.Line(document.getElementById(''));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }
```

4. Toast UI
``` r
function tuiLineChart(){
  var lineContainer = document.getElementById('');
  var lineData = {
      categories: [],
      series: [
          {
              name: '',
              data: []
          },
      ]
  };
  var lineOptions = {
      chart: {
          width: ,
          height: ,
      },
  };
  var chart = tui.chart.lineChart(lineContainer, lineData, lineOptions);
}
```
5. D3.js
```r
function makeD3LineGraph(){
    var svg = d3.select("").append("svg")
        .attr("width", )
        .attr("height", )
        .append("g");

    svg.append("g")
        .attr("class", "")
        .call(d3.axisBottom(xScale));

    svg.append("g")
        .attr("class", "")
        .call(d3.axisLeft(yScale)); 

    svg.append("path")
        .datum(dataset)
        .attr("class", "line") 
        .attr("style", "")
        .attr("d", line)
        .style("opacity","0"); 

    
    svg.selectAll(".dot")
        .data(dataset)
        .enter().append("circle") 
        .attr("class", "dot") 
        .attr("style", "")
        .attr("cx", "")
        .attr("cy", "")
        .attr("r", "")
        .style("opacity", "0");
}
```

D3.js is the most difficult chart library to novice user. D3 have to draw all lines, axis, legends directly. If you need to apply dataset, you have to calculate line or bar position. <br>However, it can offer infinite type of chart. This is the biggest advantage of the D3.js.
<br><br> On the other hands, rest of charts give offer code style to draw it. In Billboard.js, it is created based on D3.js. Billboard.js offer D3.js custom design in several parts.(ex. legends). Rest of other chart library offer standard code style for novice user.
<br><br>
If you want to  write code using Chart.js, Billboard.js and D3.js, you have to type datasets and styles in one function. Google Chart and Toast UI declare data and style variables seperately, and call them in last function. Changing the chart using latter way in realtime is more easier than former. <br>

**D3.js >>>> Chart.js, billboard.js, Toast.js, Google Chart**

<br>
Compare Execution time
------
This time may different in other environment.<br>
Time range count in inital 10 times and in 1 seconds intervals using console time medthod.
<br>

Line Chart
```r 
    Chart.js : 26~30ms
    Billboard.js : 84~100ms
    Google Chart.js : 2~6ms
    Toast UI : 105~124ms
    D3.js : 4~8ms
```
Bar Chart
```r
    Chart.js : 22~28ms
    Billboard.js : 82~90ms
    Google Chart.js : 2~6ms
    Toast UI : 90~109ms
    D3.js : 4~9ms
```
Pie Chart
```r
    Chart.js : 16~22ms
    Billboard.js : 72~80ms
    Google Chart.js : 1~5ms
    Toast UI :  94~110ms
    D3.js : 5~10ms
```
Radar Chart
```r
    Chart.js : 19~22ms
    Billboard.js : 73~89ms
    Toast UI : 75~84ms
    D3.js : 6~12ms
```

All the Chart in the Graph are not the same design and datasets, but we can know of approximate execution time.<br>
**Google Chart >= D3.js > Chart.js > billboard.js > Toast.js**

<br>
Diversity of chart
------

|  | Basic Chart | Scatter | Pie | Radar | Gauge | Bubble | Map | Tree | Custom |
|:--------|:--------|:--------|:--------|:--------|:--------|:--------|:--------|:--------|:--------|
| Chart.js | O | O | O | O | X | O | X | X | X | 
| Billboard.js | O | O | O | O | O | O | X | X | X | 
| Toast UI | O | O | O | O | X | O | O | O | X |
| Google Chart | O | O | O | X | X | X | O | O | X | 
| D3.js | O | O | O | O | O | O | O | O | O |

||Speacial chart|Based system| other option |
|:--------|:--------|:--------|:--------|
|Chart.js||Canvas| |
|Billboard.js||D3.js (SVG)|Can transfrom to other type of Chart easily (ex. Line to Bar)|
|Toast UI|Heat Map|raphael.js (SVG)|Export image to file|
|Google Chart|Histogram, Org, Word Tree| SVG & VML |
|D3.js| Can make Custom|SVG||


<br>
※Basic Chart = Bar, Line, Pie Chart

**D3.js >>>> Other Charts(have charateristic individually)**

