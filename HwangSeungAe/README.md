#### Written By Hwang SeungAe, KOOKMIN UNIV. SW major junior

# Data Visualization frameworks


## Types Of Framworks
- #### D3
- #### Chart
- #### BillBoard
- #### Toast Chart

---
*First, Let me introduce D3.js*
## [ D3 ]

### Setting

We need to include D3.js(version 3) in our page.

```bash
<script src="https://d3js.org/d3.v3.min.js"></script>
```

### implemente
D3.js has a lot of information because it is used by many people and there are many types of charts. However, because there is a lot of development difficulty, it is difficult to master if you do not learn or challenge yourself with lots of materials.

**code**
> 1. Create your own chart holder (html)
>```
> <div id="d3BarGraph"></div>
> ```
> 2. Generate a chart with options (Javascript)
>```
> var svg = d3.select("#d3BarGraph")
>            .append("svg")
>            .attr("width", "600")
>            .attr("height", "700")
>
> //xAxis insert
> var xAxis = svg.append("line")
>               .attr("x1", "75")
>               .attr("x2", "600")
>               .attr("y1", "340")
>               .attr("y2", "340")
>               .style("stroke", "black")
>
>/ /yAxis insert
> var yAxis = svg.append("line")
>               .attr("x1", "75")
>               .attr("x2", "75")
>               .attr("y1", "0")
>               .attr("y2", "340")
>               .style("stroke", "black")
>```
>The above code is the code that creates the axis.
>
>```
> //xAxis text
> var xAxisText = svg.append("text")
>                   .attr("x", "120")
>                   .attr("y", "365")
>                   .text("1ST")
>                   .style("font-size", "18px");
>                   
> //yAxis text
> var yAxisText = svg.append("text")
>                   .attr("x", "38")
>                   .attr("y", "25")
>                   .text("100")
>                   .style("font-size", "18px");
>```
>The above code is a code that specifies the characters on the x and y axes.
>
>```
>  var dataQueue = d3.selectAll("#d3Graph svg rect");
>
>  var xLotation = d3.scaleLinear()
>                    .domain([0, 4])
>                    .range([120, 520]);
>
>  var yLotation = d3.scaleLinear()
>                    .domain([0, 110])
>                    .range([339, 339 - (3.00 * 110)]);
>
>  var heightLotation = d3.scaleLinear()
>                         .domain([0, 110])
>                         .range([0, 3.00 * 110]);
>
>  var data = svg.selectAll("rect")
>                .data([20, 60, 40, 100, 80])
>                .enter()
>                .append("rect")
>                .attr("x", function (d, i) {
>                    return xLotation(i);
>                })
>                .attr("width", "30")
>                .attr("height", 0)
>                .attr("y", 340)
>                .transition()
>                .duration(1200)
>                .attr("y", function (d) {
>                    return yLotation(d);
>                })
>                .attr("height", function (d) {
>                    return heightLotation(d);
>                })
>                .attr("stroke", "yellowgreen")
>                .attr("fill", "#FFFAAA");
>```
>The code above creates the bar.


**Run Time**
> One of the most important aspects of JavaScript development is execution time. I'll tell you two ways.
> 1. Check execution time in console window
> ```
>     console.time("D3.js Execution Time");
>
>     console.timeEnd("D3.js Execution Time");
>```
> Write the code that implements the chart, put the code into the function, and write the two at the beginning and end of the function, respectively.
>You can then measure the execution time.
>
>
>2. How to view in chart view browser
>```
>     var timeStartD3Bar = window.performance.now();
>     
>     var timeEndD3Bar = window.performance.now();
>     var timeD3Bar = timeEndD3Bar - timeStartD3Bar;
>     document.getElementById("timestamp_D3BarChart").innerText = "D3 Bar Chart Execution Time : " + timeD3Bar;
>```
>Just like method 1, you can implement the code, put it in a function, and write the code at the beginning and end of the function, respectively.
>You can then view the execution time with the chart in the browser.



**Documentation support**
> d3.js is mostly documented well. Go to the github page and there is a "d3 gallery" link. You will see the d3 examples collected there. If you look at the d3 gallery, you will see that you are well documented.
>However, there is a difficulty in developing d3.js, so it will be difficult to learn without any effort.


**Supported chart types**

>![Chart Types](http://4.bp.blogspot.com/-Ha1kU0e9dAQ/Uh3RPI_CpwI/AAAAAAAAPDA/kBHcZ1JOeyM/s1600/d3%EA%B0%A4%EB%9F%AC%EB%A6%AC.png)
>
>See "chart Example" in Linked below

**Supported Browsers**
> Basically will work on all SVG supported browsers.
> D3 supports so-called 'modern browsers'
>
> |Internet Explorer|Chrome|Firefox|Safari|Opera|
> |---|---|---|---|---|---|
> |9+|Latest|Latest|Latest|Latest|

### Linked
> - [API](https://d3js.org/)
> - [Chart Example](https://bl.ocks.org/mbostock)
> - [Github](https://github.com/d3/d3)



---
*Second, Let me introduce Chart.js*
## [ Chart ]

### Setting

We need to include Chart.js in our page.

```bash
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
```

### implemente
Chart.js implements charts using canvas differently than d3.js.


**code**
> 1. Create your own chart holder (html)
>```
><canvas id="chartBarGraph" width="400" height="400"></canvas>
> ```
> 2. Generate a chart with options (Javascript)
>```
> var insertChartBarGraph = new Chart(document.getElementById("chartBarGraph"), {
>  type: "bar",
>    data: {
>        labels: ["1ST", "2ND", "3RD", "4TH", "5TH"],
>        datasets: [
>            {
>                label: "RESULT",
>                backgroundColor: [
>                    'rgba(116, 19, 60)',
>                    'rgba(194, 40, 76)',
>                    'rgba(244, 243, 238)',
>                    'rgba(245, 183, 198)',
>                    'rgba(219, 131, 153)'],
>                borderWidth: 2,
>                data: [10, 30, 50, 60, 40]
>            }
>        ]
>    }
>});
>```

**Run Time**
> One of the most important aspects of JavaScript development is execution time. I'll tell you two ways.
> 1. Check execution time in console window
> ```
>     console.time("Chart.js Execution Time");
>
>     console.timeEnd("Chart.js Execution Time");
>```
> Write the code that implements the chart, put the code into the function, and write the two at the beginning and end of the function, respectively.
>You can then measure the execution time.
>
>
>2. How to view in chart view browser
>```
>     var timeStartChartBar = window.performance.now();
>     
>     var timeEndChartBar = window.performance.now();
>     var timeChartBar = timeEndChartBar - timeStartChartBar;
>     document.getElementById("timestamp_ChartBarChart").innerText = "Chart Bar Chart Execution Time : " + timeChartBar;
>```
>Just like method 1, you can implement the code, put it in a function, and write the code at the beginning and end of the function, respectively.
>You can then view the execution time with the chart in the browser.



**Documentation support**
>Most of the references to the new library are detailed in github. However, the github page in Chart.js did not provide much information.
>Instead, we have a separate chart.js page that shows the charts in detail. Although it is not shown in detail in the gitgub that many people are looking for, it is also helpful to get information from a separate page.   


**Supported chart types**

>![Chart Types](https://www.xpathmedia.com/wp-content/uploads/2017/05/chartsjs-example.jpg)
>
>See "chart Example" in Linked below

**Supported Browsers**
> Basically will work on all Canvas supported browsers.
>
> |Internet Explorer|Chrome|Firefox|Safari|Edge|
> |---|---|---|---|---|---|
> |11|50+|45+|9+|14+|

### Linked
> - [API](http://www.chartjs.org/docs/latest/)
> - [Chart Example](http://www.chartjs.org/samples/latest/)
> - [Github](https://github.com/chartjs/Chart.js)



---
*Third, Let me introduce Chart.js*
## [ BillBoard ]

### Setting
Billboard.js is very similar to chart.js. However, billboard.js is a library based on d3.
Also, d3.js is based on v3 (version 3) of d3, and billboard.js is a library based on v4 (version 4) of d3.
Therefore, we need to include D3.js(version 4) in our page.
```bash
<script src="https://d3js.org/d3.v4.min.js"></script>
```
In addition, we need to include billboard.js & css in our page.
```bash
<script src="billboard.js"></script>
<link rel="stylesheet" href="billboard.css">
```

### implemente
You can easily create charts by putting data in the supported formats and setting options.
Therefore, the development difficulty of billboard.js is easy.

**code**
> 1. Create your own chart holder (html)
>```
>[ < div id="billBoardBar"></div > ]
> ```
> 2. Generate a chart with options (Javascript)
>```
> var billBoardBar = bb.generate({
>    bindto: "#billBoardBar",
>    data: {
>      columns: [
>         ["BarResult", 10, 30, 50, 70, 90]
>      ],
>      type: "bar"
>    },
>    color: {
>      pattern: [
>        "#ff6384"
>      ]
>    },
>    axis:{
>        x:{
>            label:"CALCULATE",
>            type: "category",
>            categories:[
>                "1ST",
>                "2ND",
>                "3RD",
>                "4TH",
>                "5TH"
>            ]
>        },
>        y:{
>            label: "RESULT",
>        }
>      },
>      size :{
>          width:590,
>          height:390
>      },
>      grid:{
>          y:{
>              show:true
>          }
>      }
>  });
>```

**Run Time**
> One of the most important aspects of JavaScript development is execution time. I'll tell you two ways.
> 1. Check execution time in console window
> ```
>     console.time("Billboard.js Execution Time");
>
>     console.timeEnd("Billboard.js Execution Time");
>```
> Write the code that implements the chart, put the code into the function, and write the two at the beginning and end of the function, respectively.
>You can then measure the execution time.
>
>
>2. How to view in chart view browser
>```
>     var timeStartBillBoardBar = window.performance.now();
>     
>     var timeEndBillBoardBar = window.performance.now();
>     var timeBillBoardBar = timeEndBillBoardBar - timeStartBillBoardBar;
>     document.getElementById("timestamp_billBoardBarChart").innerText = "BillBoard Bar Chart Execution Time : " + timeBillBoardBar;
>```
>Just like method 1, you can implement the code, put it in a function, and write the code at the beginning and end of the function, respectively.
>You can then view the execution time with the chart in the browser.



**Documentation support**
>Billboard.js is easy to understand and easy to use for those new to it For those new to billboard.js.
>In particular, there is a 'playground', where you can edit the code directly and see the results immediately, which helped me to understand billboard.js.
>It seems to be easy to understand and documented in a variety of ways.


**Supported chart types**

>![Chart Types](https://naver.github.io/billboard.js/img/chart-types.png?v=3)

**Supported Browsers**
> Basically will work on all SVG supported browsers.
>
> |Internet Explorer|Chrome|Firefox|Safari|iOS|Android|
> |---|---|---|---|---|---|
> |9+|Latest|Latest|Latest|8+|4+|

### Linked

>- [Github](https://naver.github.io/billboard.js/)
>- [Chart Example](https://naver.github.io/billboard.js/demo/)
>- [Playground](https://naver.github.io/billboard.js/playground/)


---
*Finally, Let me introduce Chart.js*
## [ Toast ]

###Setting
ToastChart is a library based on raphael.js(SVG). So first add a script to include the library.
```bash
<script type='text/javascript' src='https://rawgit.com/nhnent/tui.code-snippet/v1.3.0/dist/tui-code-snippet.js'></script>
<script type='text/javascript' src='https://rawgit.com/nhnent/raphael/v2.2.0b/raphael.js'></script>
```
In addition, we need to include tui-chart.js & toastChart.js in our page.(Download link at the bottom Note)
```bash
<script src='tui-chart.js'></script>
<script type="text/javascript" src="toastChart.js"></script>
```


### implemente
Like the Chart.js and BillBoard.js, this is a development difficulty level that is relatively easy to understand.


**code**
> 1. Create your own chart holder (html)
>```
>[ < div id="toastBarChart"></div > ]
> ```
> 2. Generate a chart with options (Javascript)
>```
>var toastChart = document.getElementById('toastBarChart');
>var data = {
>    categories: ['1ST', '2ND', '3RD', '4TH', '5TH'],
>    series: [
>        {
>            name: 'Budget',
>            data: [50, 30, 70, 60, 40]
>        },
>        {
>            name: 'Income',
>            data: [80, 10, 100, 20, 50]
>        }
>    ]
>};
>```
> - toastChart is the element that will contain the chart to be created.
data is the data to be expressed in a chart.
> - tui.chart.barChart (toastChart, data, options);
If you insert data like above, you can see that the chart is created.
>
>
>```
> var theme = {
>      title: {
>          fontSize: 24,
>          fontFamily: 'Verdana',
>          color: 'black'
>        }
>        series: {
>          colors: ['#8EC0E4', '#f6ea8c']
>        }
>      };
>      tui.chart.registerTheme('newTheme', theme);
>```
> - You can change design elements by using themes.
> - In addition to chart, xAxis, yAxis .. You can specify the design you want to change.

**Run Time**
> One of the most important aspects of JavaScript development is execution time. I'll tell you two ways.
> 1. Check execution time in console window
> ```
>     console.time("Toast Chart Execution Time");
>
>     console.timeEnd("Toast Chart Execution Time");
>```
> Write the code that implements the chart, put the code into the function, and write the two at the beginning and end of the function, respectively.
>You can then measure the execution time.
>
>
>2. How to view in chart view browser
>```
>     var timeStartToastdBar = window.performance.now();
>     
>     var timeEndToastdBar = window.performance.now();
>     var timeToastdBar = timeEndToastdBar - timeStartToastdBar;
>     document.getElementById("timestamp_ToastBarChart").innerText = "Toastd Bar Chart Execution Time : " + timeToastdBar;
>```
>Just like method 1, you can implement the code, put it in a function, and write the code at the beginning and end of the function, respectively.
>You can then view the execution time with the chart in the browser.



**Documentation support**
>Toast chart is a framework that many people have not used yet. That's why we do not have a lot of data. However, there is a page that code and results present very well.


**Supported chart types**

>![Chart Types](https://user-images.githubusercontent.com/35218826/37026890-1e2bcfe0-2173-11e8-9b06-3db329d5f477.png)
>
>The Toast chart also supports the creation of chart of map type.


**Supported Browsers**
><img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
>| :---------: | :---------: | :---------: | :---------: | :---------: |
>| Yes | 8+ | Yes | Yes | Yes |

### Linked
>- [Starting](https://github.com/nhnent/tui.chart/blob/production/docs/wiki/getting-started.md)
>- [Chart Example](https://nhnent.github.io/tui.chart/latest/tutorial-example01-01-bar-chart-basic.html)
>- [Installar](https://github.com/nhnent/tui.chart/tree/production/dist)



### Web FrameWorks Compare
> * Chart Type :  *D3.js > Toast.js > chart.js >= billboard.js*
> * Development Difficulty : *D3.js > Toast.js > Chart.js == Billboard.js*
> * Execution time : *D3.js > Chart.js > billboard.js > Toast.js*
> * Documentation : *billboard.js == Toast.js >=  D3.js >= chart.js*
