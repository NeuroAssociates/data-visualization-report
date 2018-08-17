#### Written By Kwon Bo Kyeung , KOOKMIN UNIV. SW junior

## Data Visualization
### : Various data visualization Web framework analysis results
----
### 1. d3.js
* How many chart types do you offer?
 > Box plots, Bubble, Bullet, Calendar view, Bar, Stream and so on. (Provides the most chart types among 3 charts)

* How to setup?
 > We have to reference the JavaScript file from the head of the HTML file.
 >
 > ``` <script type="text/javascript" src="d3.v2.min.js"></script>```
 >
 > (v2 means version2, Choose d3.js for your version)

* How much learning is needed to create the application code? What is the development difficulty?
 > The difficulty of d3.js is the most difficult among the three libraries. It is complex because it requires you to set various things such as axis and graph position, and each one takes the longest to learn.

* How does the speed of execution compare to other frameworks?
 > It runs much faster than chart.js and billboard.js.

* How much documentation is supported?
 > <https://github.com/d3/d3/wiki/Tutorials>
 >
 > It explains in detail how to use it, along with various chart examples.

* pros and cons
 > It is advantageous to express large amount of data though it is cumbersome to set x axis, y axis, range etc through svg tag directly. Creating a chart takes a long time to get used to and it is difficult to handle because you have to draw each one on the chart.

----

### 2. chart.js
* How many chart types do you offer?
  > Bar, Line, Area, Scatter, Doughnut, Pie, Polar area, Rador, Combo bar/line. (about 9~10)

* How to setup?
> Because chart.js uses canvas tags, we need to include Chart.js in our file.
>
> ```<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script> ```

* How much learning is needed to create the application code? What is the development difficulty?
 > Knowing how to create a chart makes it easy to create charts. I think the beginner is the easiest to understand.

* How does the speed of execution compare to other frameworks?
 > It is slower than d3.js, but it runs faster than billboard.js.

* How much documentation is supported?
 > <http://www.chartjs.org/samples/latest>
 >
 > It explains in detail how to use it, along with various chart examples.

* pros and cons
 > It is the easiest to implement among the three libraries. It's easy to change the desired elements, such as data values ​​and colors, so it's likely that the beginner will be able to use it freely. However, since the chart is drawn using canvas, it sometimes happens that the graphics are broken due to enlargement or reduction.

----

### 3. billboard.js
* How many chart types do you offer?
 > Area, Area range, Bar, Bubble, Combination, Donut, Gauge, Line, Pie, Radar, Scatter, Spline, Stacked bar, Step. (15)

* How to setup?
> Because billboard.js is d3.js based, you must first load the following script in the head of the html file.
>
> ```<script src=https://d3js.org/d3.v4.min.js></script> ``` (d3.js version4)
>
> Also download billboard.js and billboard.css from <https://naver.github.io/billboard.js> and road them.
>
> Loads as follows
> ```<link rel="stylesheet" href="/css/billboard.css">   <script type="text/javascript" src="billboard.js"></script>```

* How much learning is needed to create the application code? What is the development difficulty?
 > You can easily become familiar with creating chart examples.

* How does the speed of execution compare to other frameworks?
 > The slowest of the three framework libraries

* How much documentation is supported?
 > <https://naver.github.io/billboard.js/demo>
 >
 > It explains in detail how to use it, along with various chart examples.

* pros and cons
 > Compared to chart.js, the code is very similar, but billboard.js is a library based on d3, and chart.js is a library that uses the canvas tag. Billboard.js can easily generate charts without damaging the graphics. However, it has the slowest execution speed among the three libraries.

 ----
