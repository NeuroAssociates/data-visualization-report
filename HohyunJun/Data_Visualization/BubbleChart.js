document.addEventListener('DOMContentLoaded', function () {
    makeD3BubbleGraph();
    makeChartJsBubbleGraph();
    makeBillBoardJsBubbleGraph();
    makeEchartsJSBubbleGraph();
    makeToastJsBubbleGraph();
});

function makeD3BubbleGraph() {
    console.time("D3.js Execution Time");
    var xAxisData = [0, 1, 2, 3, 4];
    var yAxisData = [0, 1, 2, 3, 4, 5];
    var yAxisLineData = [1, 2, 3, 4, 5];
    var xLabel = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    var yLabel = ['0', '20', '40', '60', '80', '100'];
    // scale 함수
    var xAxisXScale = d3.scaleLinear()
        .domain([0, 4])
        .range([40, 480]);
    var yAxisYScale = d3.scaleLinear()
        .domain([0, 5])
        .range([340, 20]);
    var circleXScale = d3.scaleLinear()
        .domain([0, 4])
        .range([150, 682]);

    var canvas = d3.select(".d3Graph")
        .append("svg")
        .attr("width", "600")
        .attr("height", "365");
    var axisGroup = canvas.append('g')
        .attr("class", "axis");
    var axis = axisGroup.append("path")
        .attr("d", "M30 10 L30 340 L550 340")
        .attr("stroke", "black")
        .attr("fill", "none");
    var xLabelGroup = canvas.append("g")
        .attr("class", "labels x-labels");
    var xLabelText = xLabelGroup.selectAll("text")
        .data(xAxisData)
        .enter()
        .append("text")
        .attr("x", function (d) {
            return xAxisXScale(d);
        })
        .attr("y", "360")
        .text(function (d) {
            return xLabel[d];
        });
    var yLabelGroup = canvas.append("g")
        .attr("class", "labels y-labels");
    var yLabelLine = yLabelGroup.selectAll("line")
        .data(yAxisLineData)
        .enter()
        .append("line")
        .attr("x1", "30")
        .attr("y1", function (d) {
            return yAxisYScale(d);
        })
        .attr("x2", "550")
        .attr("y2", function (d) {
            return yAxisYScale(d);
        })
        .attr("stroke", "black")
        .attr("stroke-dasharray", "5,5");

    //bubbles
    var dataset = {
        "children": [{
                "Name": "First",
                "Count": 4319
            },
            {
                "Name": "Second",
                "Count": 4159
            },
            {
                "Name": "Third",
                "Count": 2583
            },
            {
                "Name": "Fourth",
                "Count": 2074
            },
            {
                "Name": "Fifth",
                "Count": 1894
            },
            {
                "Name": "Sixth",
                "Count": 3059
            },
            {
                "Name": "Seventh",
                "Count": 2678
            },
        ]
    };

    var diameter = 350;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    var dataGroup = canvas.append('g')
            .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
        .sum(function (d) {
            return d.Count;
        });

    var node = dataGroup.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function (d) {
            return !d.children;
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + (d.x+100) + "," + d.y + ")";
        });

    node.append("title")
        .text(function (d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function (d) {
            return d.r;
        })
        .style("fill", function (d, i) {
            return color(i);
        })
        .style("opacity", "0");

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function (d) {
            return d.data.Name.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function (d) {
            return d.r / 5;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function (d) {
            return d.data.Count;
        })
        .attr("font-family", "Gill Sans", "Gill Sans MT")
        .attr("font-size", function (d) {
            return d.r / 5;
        })
        .attr("fill", "white");

    d3.select(self.frameElement)
        .style("height", diameter + "px");
    
    var circle = node.selectAll("circle")
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .style("opacity", "1.0");
    var endTime = new Date().getTime();
    console.timeEnd("D3.js Execution Time");
}

function makeChartJsBubbleGraph() {
    console.time("Chart.js Execution Time");
    var bubbleCanvas = document.getElementById("ChartJs");
    var bubbleChart = new Chart(bubbleCanvas,{
        type: 'bubble',
        data:{
            datasets:[
                {
                    label:'First',
                    data:[
                        {
                            x:3,
                            y:7,
                            r:30
                        }
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    hoverBackgroundColor: 'rgba(255, 99, 132, 0.6)'
                },
                {
                    label:'Second',
                    data:[
                        {
                            x:2,
                            y:5,
                            r:10
                        }],
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        hoverBackgroundColor: 'rgba(54, 162, 235, 0.6)'
                },
                {
                    label:"Third",
                    data:[
                        {
                            x:10,
                            y:10,
                            r:10
                        }],
                        backgroundColor: 'rgba(255, 206, 86, 0.6)',
                        hoverBackgroundColor: 'rgba(255, 206, 86, 0.6)'
                },
                {
                    label:"Fourth",
                    data:[
                        {
                            x:6,
                            y:6,
                            r:15
                        }],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    hoverBackgroundColor: 'rgba(75, 192, 192, 0.6)'
                },
                {
                    label:"Fifth",
                    data:[
                        {
                            x:9,
                            y:7,
                            r:50
                        }
                    ],
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    hoverBackgroundColor: 'rgba(153, 102, 255, 0.6)'
                }
            ]
        }       
    });
    var endTime = new Date().getTime();
    console.timeEnd("Chart.js Execution Time");
}

function makeBillBoardJsBubbleGraph() {
    console.time("Billboard.js Execution Time");
    var billBoardChart = bb.generate({
        bindto: "#billBoardChart",
        data:{
            type: "bubble",
            columns:[
                ["1st", 470,250,400,400,500],
                ["2nd", 460, 230, 350, 300, 400],
                ["3rd", 450, 200, 300, 200, 300],
                ["4th", 400, 180, 400, 100, 200],
                ["5th", 380, 170, 330, 500, 100],
            ],
        },
        axis:{
            x:{
                label:"Testing BubbleChart",
                type:"category",
                categories:[
                    "First Data",
                    "Second Data",
                    "Third Data",
                    "Fourth Data",
                    "Fifth Data"
                ]
            },
            y:{
                label:"Bubbles"
            }
        }
    });
    var endTime = new Date().getTime();
    console.timeEnd("Billboard.js Execution Time");
}

function makeEchartsJSBubbleGraph(){
    console.time("Echarts.js Execution Time");
    var myChart = echarts.init(document.getElementById('eChartsGraph'), null, {renderer:'canvas'});

    var data = [
        [
            [28604, 77, 17096869, 'Australia', 1990],
            [31163, 77.4, 27662440, 'Canada', 1990],
            [1516, 68, 1154605773, 'China', 1990],
            [13670, 74.7, 10582082, 'Cuba', 1990],
            [28599, 75, 4986705, 'Finland', 1990],
            [29476, 77.1, 56943299, 'France', 1990],
            [31476, 75.4, 78958237, 'Germany', 1990],
            [28666, 78.1, 254830, 'Iceland', 1990],
            [1777, 57.7, 870601776, 'India', 1990],
            [29550, 79.1, 122249285, 'Japan', 1990],
            [2076, 67.9, 20194354, 'North Korea', 1990],
            [12087, 72, 42972254, 'South Korea', 1990],
            [24021, 75.4, 3397534, 'New Zealand', 1990],
            [43296, 76.8, 4240375, 'Norway', 1990],
            [10088, 70.8, 38195258, 'Poland', 1990],
            [19349, 69.6, 147568552, 'Russia', 1990],
            [10670, 67.3, 53994605, 'Turkey', 1990],
            [26424, 75.7, 57110117, 'United Kingdom', 1990],
            [37062, 75.4, 252847810, 'United States', 1990]
        ],
        [
            [44056, 81.8, 23968973, 'Australia', 2015],
            [43294, 81.7, 35939927, 'Canada', 2015],
            [13334, 76.9, 1376048943, 'China', 2015],
            [21291, 78.5, 11389562, 'Cuba', 2015],
            [38923, 80.8, 5503457, 'Finland', 2015],
            [37599, 81.9, 64395345, 'France', 2015],
            [44053, 81.1, 80688545, 'Germany', 2015],
            [42182, 82.8, 329425, 'Iceland', 2015],
            [5903, 66.8, 1311050527, 'India', 2015],
            [36162, 83.5, 126573481, 'Japan', 2015],
            [1390, 71.4, 25155317, 'North Korea', 2015],
            [34644, 80.7, 50293439, 'South Korea', 2015],
            [34186, 80.6, 4528526, 'New Zealand', 2015],
            [64304, 81.6, 5210967, 'Norway', 2015],
            [24787, 77.3, 38611794, 'Poland', 2015],
            [23038, 73.13, 143456918, 'Russia', 2015],
            [19360, 76.5, 78665830, 'Turkey', 2015],
            [38225, 81.4, 64715810, 'United Kingdom', 2015],
            [53354, 79.1, 321773631, 'United States', 2015]
        ]
    ];

    var option = {
        title: {
        },
        legend: {
            right: 10,
            data: ['1990', '2015']
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series: [{
            name: '1990',
            data: data[0],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }])
                }
            }
        }, {
            name: '2015',
            data: data[1],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(129, 227, 238)'
                    }, {
                        offset: 1,
                        color: 'rgb(25, 183, 207)'
                    }])
                }
            }
        }]
    };

    myChart.setOption(option);
    var endTime = new Date().getTime();
    console.timeEnd("Echarts.js Execution Time");
}

function makeToastJsBubbleGraph(){
    console.time("Toast.js Execution Time");
    var container = document.getElementById('toastChart');
    var data = {
        series:[
            {
                name:'First',
                data:[
                    {x : 200, y:40, r: 25, label:'1'},
                    {
                        x: 160,
                        y: 70,
                        r: 50,
                        label: '2'
                    },
                    {
                        x: 50,
                        y: 25,
                        r: 60,
                        label: '3'
                    },
                ]
            },
            {
                name:'Second',
                data:[
                    {
                        x: 150,
                        y: 40,
                        r: 10,
                        label: '1'
                    },
                    {
                        x: 190,
                        y: 20,
                        r: 30,
                        label: '2'
                    },
                    {
                        x: 100,
                        y: 70,
                        r: 60,
                        label: '3'
                    },
                ]
            },
            {
                name: 'Third',
                data: [{
                        x: 60,
                        y: 84,
                        r: 39,
                        label: '1'
                    },
                    {
                        x: 180,
                        y: 20,
                        r: 30,
                        label: '2'
                    },
                    {
                        x: 100,
                        y: 40,
                        r: 60,
                        label: '3'
                    },
                ]
            }
        ]
    };
    var option = {
        chart:{
            width: 600,
            height: 400,
            title: 'Bubble Chart',
            format: function(value, chartType, areaType, valueType){
                if(valueType === 'r' || valueType === 'x'){
                    value = tui.chart.renderUtil.formatToComma(value);
                    if(valueType === 'x') {
                        value = '$' + value;
                    }
                }
                return value;
            }
        },
        yAxis:{
            title: 'YAxis'
        },
        xAxis:{
            title: 'XAxis'
        }
    };
    tui.chart.bubbleChart(container, data, option);
    var endTime = new Date().getTime();
    console.timeEnd("Toast.js Execution Time");
}