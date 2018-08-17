#### Written By HOHYUNJUN, KOOKMIN UNIV. SW major senior  
Korean Version Link : [한국어 버전](DataVisualizationReport(Kor).md)  
[The Web Site I made for this report](https://neuroassociates.github.io/DataVisualizationReport/HohyunJun/Data_Visualization/DataVisualization.html)  

# Data Visualization Report
Analyze existing data visualization web frameworks
* How many types of the chart does it offer?
* Example codes of each framework for the same graph(pie, line, bar, bubble)
* The Learning curve of each framework(Level of difficulty)
* Compare execution speed of each framework
* How much documentation is supported?
* Strength and Weakness  

**This Report was written based on following version of frameworks**

  | Framework Name | Version |
  |:--------------:|:-------:|
  |      D3.js     |    v4   |
  |   Echarts.js   |  v4.1.0 |
  |    Toast.js    |  v3.3.1 |
  |    Chart.js    |  v2.7.2 |
  |  billboard.js  |  v1.5.1 |

## Comparison of Data Visualization frameworks
---
To tell the conclusion, the comparison result is as follows.
* Execution Speed(Quick Order)

    | Rank | Framework Name | Average Execution time |
    |:----:|:--------------:|:----------------------:|
    |   1  |      D3.js     |         3~10ms         |
    |   2  |    Chart.js    |         11~40ms        |
    |   3  |   Echarts.js   |        62~122ms        |
    |   4  |  billboard.js  |        83~159ms        |
    |   5  |    Toast.js    |        103~181ms       |  

* Level of Difficulty(Easy Order)

    | Rank | Framework Name | Learning Curve |
    |:----:|:--------------:|:--------------:|
    |   1  |    Chart.js    |     Shallow    |
    |      |  billboard.js  |     Shallow    |
    |   2  |    Toast.js    |     Shallow    |
    |      |   Echarts.js   |     Shallow    |
    |   3  |      D3.js     |      Steep     |
* Documentation Level(Well-organized Order)

    | Rank | Framework Name | Well-organized |
    |:----:|:--------------:|:--------------:|
    |   1  |  billboard.js  |     Good       |
    |   2  |   Echarts.js   |     Fair       |
    |      |    Toast.js    |     Fair       |
    |      |    Chart.js    |     Fair       |
    |      |      D3.js     |     Fair       |
* Diversity of Chart(More Flexible Order)

    | Rank | Framework Name | Implementation Flexibility |
    |:----:|:--------------:|:--------------------------:|
    |   1  |      D3.js     |        Very Flexible(You can draw as you like)      |
    |   2  |   Echarts.js   |          Flexible(Chart, Maps, 3D Maps, etc..)          |
    |   3  |    Toast.js    |    Flexible(Chart, Maps)   |
    |   4  |    Chart.js    |      Fair(Only charts)     |
    |   5  |  billboard.js  |      Fair(Only charts)     |

## Comparison of Execution time
---
Using *console.time* and *console.timeEnd* API, measuring the execution speed of each chart

```
1. Bar Chart
  d3.js : 3~9ms
  chart.js : 19~40ms
  billboard.js : 90~130ms
  echarts.js : 68~110ms
  toast.js : 103~161ms  
```
![Bar](/HohyunJun/img/BarChartExecSpeedCompare.png) 

```
2. Pie Chart
  d3.js : 3~9ms
  chart.js : 11~22ms
  billboard.js : 85~115ms
  echarts.js : 62~105ms
  toast.js : 139~181ms
```
![Pie](/HohyunJun/img/PieChart_Exec_Speed_Compare.png) 

```
3. Bubble Chart
  d3.js : 6~10ms
  chart.js : 21~33ms
  billboard.js : 97~159ms
  echarts.js : 70~99ms
  toast.js : 116~150ms
```
![Bubble](/HohyunJun/img/BubbleChart_Exec_Speed_Compare.png) 

```  
4. Line Chart
  d3.js : 6~11ms
  chart.js : 23~35ms
  billboard.js : 83~122ms
  echarts.js : 86~122ms
  toast.js : 114~159ms
```
![Line](/HohyunJun/img/LineChart_Exec_Speed_Compare.png) 

Of course I didn't draw exactly same chart for each framework, but we can see that it shows meaningful execution time difference.  
The fastest one is D3.js and the slowest one is Toast.js.  
**Execution Speed(Quick Order) : D3 > Chart.js > echarts.js >=billboard.js > Toast.js**  
And there wasn't meaningful execution time difference among chart types.  
*For the case of Echarts.js, there wasn't big difference between SVG renderer and Canvas renderer*

## D3.js
---
  ```
  Convenience of Impelementation : poor
  Learning Curve : steep  
  Implementation Flexibility : good
  Execution Speed : fast
  SVG Based
  ```
  ### 1. How many types of the chart does it offer?

  Countless chart types like Bar Chart, Histogram, Pareto, Line and Area Chart, Pie Chart, ScatterPlot, Bubble, etc...  
  You can create various visualization materials such as maps as well as charts.  [D3 Gallery](https://github.com/d3/d3/wiki/Gallery)

  ### 2. Learning Curve?
  Steep Learning Curve.  
  It requires much more learning to create application code than other visualization frameworks.

  ### 3. How much documentation is supported?
  [D3 Tutorial](https://github.com/d3/d3/wiki/Tutorials)  
  The tutorial has a lot of data and is well organized.
  It is difficult to learn, but material for learning is very good.

  ### 4. Strength
  Because it is a tool that draws graph directly, you can implement a wide range of graphs and visulaizations(You can draw as you like).  
  You can debug it easily with built-in browser component checker.  
  It is much easier to implement SVG tags than to implement them using solely SVG tags.  
  It is significantly faster than other visualization web frameworks.  

  ### 5. Weakness
  Usage is very complicated.    
  Because it is based on SVG, the coordinates of each graph must be plotted one by one, so it is difficult and time consuming.  
  It runs only on IE8 + web browser which supports the latest standard technology.  
  Even if you implement the same graph, the code is longer and harder to understand than other framework's code.  

## Chart.js
---
  ```
  Convenience of Impelementation : good  
  Learning Curve : shallow  
  Implementation Flexibility : fair  
  Canvas Based  
  ```
  ### 1. How many types of the chart does it offer?
  The charts vary widely, but are not as diverse as D3.js.  
  In addition, D3 can create charts as well as a variety of other visualizations,  
  Chart.js is specialized in creating charts only.
  
  ### 2. Learning Curve?
  Shallow Learning Curve.  
  Simply put the data or options you want into the API framework defined in Chart.js, you can easily draw the chart you want.  
  You do not need much learning to create simple charts.

  ### 3. How much documentation is supported?
  Documentation is more structured than D3.js.  
  For D3.js, if Github supports documentation, Chart.js provides a separate web page for the tutorial,  
  I felt that it was easier and more structured when I used it.  
  In D3.js and billboard.js, however, sample code for Example was easy to see,  
  In the case of Chart.js, I could not find the Sample Code of Example on the official web page.  
  
  ### 4. Strength
  You can easily and quickly create the graph you want by referring to the specified API.  
  Usage is intuitive and well documented.      
  Because it is based on Canvas, reactive layout is no problem.  
  Detailed customization is also easy.  
  There are a lot of users, so you can solve everything through Google Search.  

  ### 5. Weakness
  Because it is based on Canvas, when the web page is enlarged / reduced, the graph pixels are broken.  
  Compared to D3.js, implementation flexibility is poor.  


## billboard.js
---
  ```
  Convenience of Impelementation : good   
  Learning Curve : shallow  
  Implementation Flexibility : fair  
  D3 version 4+(SVG) Based
  ```

 ### 1. How many types of the chart does it offer?
 Like Chart.js, it provides a wide variety of chart types.   
 It is a web framework specialized in charting.  

 ### 2. Learning Curve?
 Shallow Learning Curve.  
 Simply set the desired data and chart type options in the given API and you can easily draw the chart.  

 ### 3. How much documentation is supported?
 Compared to other web frameworks, it is most understandable and well documented.  
 Sample codes for each API as well as Documentation for each API were also provided on a separate web page.  
 But the thing that I liked the most was PlayGround.  
 It offers a web page to turn all the APIs on and off, and You can see at a glance how the  
 chart changes as you modify the code yourself.  
 I was able to easily understand each API while changing the chart options directly.  

 ### 4. Strength
   You can easily and quickly create the graph you want by referring to the specified API.  
   It is easier to find the API you need than other libraries.  
   [Billboard.js Documentation](https://naver.github.io/billboard.js/)  
   It was well organized to easily find the desired API through Example or Playground.  
   Especially, it was good to be able to apply the API such as Size, SVG, and Transition in the playground with one click.  
   [Billboard.js PlayGround](https://naver.github.io/billboard.js/playground/)

 ### 5. Weakness
  Because it is based on D3, you must also load the D3 JavaScript file to use billboard.js.  
  It is slower than D3 or Chart.js in terms of execution speed.  
  Because it is made recently, it is hard to search about it on Google.  
  Compared to D3.js, implementation flexibility is poor.  

## Echarts.js
---
  ```
  Convenience of Impelementation : fair   
  Learning Curve : shallow  
  Implementation Flexibility : fair  
  Canvas Based(default), but user can change it to SVG Based.
  ```
  [Documentation about Rendering SVG or Canvas](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Render%20by%20Canvas%20or%20SVG)  
  Echarts uses Canvas as the default, but you can change it by specifying the renderer as an argument.  
  For example,  
  *var chart = echarts.init(containerDom, null, {renderer: 'svg'});*  

 ### 1. How many types of the chart does it offer?
 In addition to basic chart types, you can create maps and even 3D graphics.  
 It's not as much as D3, but it seems to be more versatile than Chart.js or Billboard.js.  

 ### 2. Learning Curve?
 Shallow Learning Curve.  
 Just like Chart.js or Billboard.js, you just need to put the desired options in the API.  
 But I felt it is less intuitive than Chart.js or Billboard.js.

 ### 3. How much documentation is supported?
 From starting the Echart.js for the first time to giving the Event and chart action for it,  
 Documentation was well-done step by step.  
 Also, there are a lot of examples and a sample code for them, which helped me to understand.  
 Documentation for each API was also detailed.  
 If anything, there wasn't function like billboard.js's Playground which allows changing  
 each API options directly and check it. 

 ### 4. Strength
 In addition to the benefits of Chart.js and Billboard.js, which allow you to draw charts  
 simply by specifying options in the API, the function which allows you to select the better one  
 between SVG and Canvas for your situation is the greatest strength of Echarts.js.  
 Depending on the intent of the developer, the amount of data, and the development environment,
 you can choose either one(SVG or Canvas).  
 It also provides a wider variety of charts than Chart.js or Billboard.js.  
 Buttons that store charts in image form can also be made into 3 lines of code using API.  

 ### 5. Weakness
 I feel that the API is less intuitive than Chart.js or Billboard.js.  
 It is hard to search about it on Google.  
 Rendering between SVG and Canvas seems to not yet work perfectly.  
 I've rendered the Bubble Chart page to SVG and apparently, it looks the same as Canvas,  
 but when I take the mouse cursor on the graph, an error occurs that the character size becomes  
 abnormally large.
 I was finding about this error, and I found out that SVG renderer is *beta version* now.

## Toast.js
---
  ```
  Convenience of Impelementation : good   
  Learning Curve : shallow  
  Implementation Flexibility : fair  
  Raphael.js(SVG) Based
  ```

 ### 1. How many types of the chart does it offer?
 As with any chart library, it offers a wide variety of chart types.  
 In addition to charts, it also supports creating Map types.  

 ### 2. Learning Curve?
 Shallow Learning Curve.  
 Simply set the desired data and chart type options in the given API and you can easily draw the chart.  

 ### 3. How much documentation is supported?
 Similar to other web frameworks except billboard.js.  
 It was great to categorize the APIs for each chart which users want to create and give them a list of links.  
 [Toast.js Documentation](https://nhnent.github.io/tui.chart/latest/RaphaelRadialLineSeries.html)

 ### 4. Strength
   You can easily and quickly create the graph you want by referring to the specified API.  
   It was nice to be able to provide the export function with xls, csv, png, jpeg file etc without any special options.   

 ### 5. Weakness
  Because it is based on raphael.js, you must also load the JavaScript file for raphael.js to use billboard.js.  
  It is slower than billboard.js based on D3.  
  There is a significant difference in execution speed compared to other web frameworks.
  
