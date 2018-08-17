document.addEventListener('DOMContentLoaded', function () {
    makeD3LineGraph();
    makeChartJsLineGraph();
    makeBillBoardJsLineGraph();
    makeEchartsJsLineGraph();
    makeToastJsLineGraph();
});
function makeD3LineGraph(){
    console.time("D3.js Execution Time");
    var margin = {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        width = 500 - margin.left - margin.right, 
        height = 350 - margin.top - margin.bottom; 

    
    var n = 21;

    
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

    var svg = d3.select(".d3Graph").append("svg")
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
        .attr("style", "fill: none;stroke: #ffab00; stroke - width: 3;")
        .attr("d", line)
        .style("opacity","0"); 

    
    svg.selectAll(".dot")
        .data(dataset)
        .enter().append("circle") 
        .attr("class", "dot") 
        .attr("style", "fill: #ffab00;stroke: #fff;")
        .attr("cx", function (d, i) {
            return xScale(i);
        })
        .attr("cy", function (d) {
            return yScale(d.y);
        })
        .attr("r", 5)
        .style("opacity", "0");

    //animation(transition)
    svg.selectAll("path")
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .style("opacity", "1.0");
    svg.selectAll(".dot")
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .style("opacity", "1.0");
    var endTime = new Date().getTime();
    console.timeEnd("D3.js Execution Time");
}
function makeChartJsLineGraph(){
    console.time("Chart.js Execution Time");
    var lineCanvas = document.getElementById("ChartJs");
    var lineChart = new Chart(lineCanvas,{
        type:'line',
        data:{
            labels: ["First", "Second", "Third", "Fourth", "Fifth"],
            datasets: [
                {
                    label: '1st',
                    data:[100,200,150,400,500],
                    borderColor:'red',
                    backgroundColor:'red',
                    fill:false
                },
                {
                    lable: '2nd',
                    data:[200,300,250,300,200],
                    borderColor:'blue',
                    backgroundColor: 'blue',
                    fill:false
                },
                {
                    label: '3rd',
                    data:[300, 450, 350, 200, 400],
                    borderColor:'green',
                    backgroundColor: 'green',
                    fill:false
                }
            
            ],
            
        }
    });
    var endTime = new Date().getTime();
    console.timeEnd("Chart.js Execution Time");
}
function makeBillBoardJsLineGraph(){
    console.time("Billboard.js Execution Time");
    var billBoardChart = bb.generate({
        bindto:"#billBoardChart",
        data:{
            type:"line",
            columns:[
                    ["1st", 470, 250, 400, 400, 500],
                    ["2nd", 460, 230, 350, 300, 400], 
                    ["3rd", 450, 200, 300, 200, 300], 
                    ["4th", 400, 180, 400, 100, 200], 
                    ["5th", 380, 170, 330, 500, 100]
            ]
        },
        axis:{
            x:{
                label:"Testing Line Chart",
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
                label:"Line Datas"
            }
        }
    });
    var endTime = new Date().getTime();
    console.timeEnd("Billboard.js Execution Time");
}
function makeEchartsJsLineGraph(){
    console.time("Echarts.js Execution Time");
    var myChart = echarts.init(document.getElementById('eChartsGraph'));
    var option = {
        title: {
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
        },
        grid: {
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: 'First',
                type: 'line',
                stack: 'Sum',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Second',
                type: 'line',
                stack: 'Sum',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Third',
                type: 'line',
                stack: 'Sum',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Fourth',
                type: 'line',
                stack: 'Sum',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Fifth',
                type: 'line',
                stack: 'Sum',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart.setOption(option);
    var endTime = new Date().getTime();
    console.timeEnd("Echarts.js Execution Time");
}

function makeToastJsLineGraph(){
    console.time("Toast.js Execution Time");
    var container = document.getElementById('toastChart');
    var data = {
        categories: ['category 1', 'category 2', 'category 3', 'category 4', 'category 5'],
        series: [
            {
                name: 'First',
                data: [20,30,40,20,10]
            },
            {
                name: 'Second',
                data: [40,40,60,10,80]
            },
            {
                name: 'Third',
                data: [60,50,10,0,50]
            },
            {
                name: 'Fourth',
                data: [80,10,70,30,70]
            }
        ]
    };
    var option = {
        chart:{
            width: 600,
            height: 400,
            title: 'Line Chart'
        },
        yAxis:{
            title: 'Y Axis'
        },
        xAxis:{
            title: 'X Axis',
            labelInterval : 2
        },
        series: {
            hasDot: true,
        },
    };
    tui.chart.lineChart(container, data, option);
    var endTime = new Date().getTime();
    console.timeEnd("Toast.js Execution Time");
}