document.addEventListener('DOMContentLoaded', function () {
    makeD3PieGraph();
    makeChartJsBarGraph();
    makeBillBoardJsBarGraph();
    makeBillBoardJsBubbleChart();
    makeEchartGraph();
    makeToastJsGraph();
});
function makeD3PieGraph(){
    var data = [10, 20, 30, 15, 25];

    var width = 400,
        height = 250,
        radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal()
        .range(["blue", "green", "orange", "hotpink", "purple"]);

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.pie()
        .sort(null)
        .value(function (d) {
            return d;
        });

    var svg = d3.select(".d3PieGraph").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc")
        .style("opacity", "0");

    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
            return color(d.data);
        })
        .style('stroke', 'white');

    g.append("text")
        .attr("transform", function (d) {
            return "translate(" + labelArc.centroid(d) + ")";
        })
        .attr("dy", ".35em")
        .text(function (d) {
            return d.data;
        });
    svg.selectAll(".arc")
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .style("opacity", "1.0");

}
function makeChartJsBarGraph(){
    var barCanvas = document.getElementById("ChartJs");
    var barChart = new Chart(barCanvas, {
        type: 'bar',
        data: {
            labels: ["First", "Second", "Third", "Fourth", "Fifth"],
            datasets: [{
                label: 'Result',
                data: [100,200,300,400,500],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ]
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Calculate Sequence",
                        fontSize: 15,
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
function makeBillBoardJsBarGraph(){
        var billBoardChart = bb.generate({
            bindto: "#billBoardChart",
            data: {
                type: "line",
                columns: [
                    ["1st", 470, 250, 400, 400, 500],
                    ["2nd", 460, 230, 350, 300, 400],
                    ["3rd", 450, 200, 300, 200, 300],
                    ["4th", 400, 180, 400, 100, 200],
                    ["5th", 380, 170, 330, 500, 100]
                ]
            },
            axis: {
                x: {
                    label: "Testing Line Chart",
                    type: "category",
                    categories: [
                        "First Data",
                        "Second Data",
                        "Third Data",
                        "Fourth Data",
                        "Fifth Data"
                    ]
                },
                y: {
                    label: "Line Datas"
                }
            },
            size:{
                width: 400,
                height: 250
            }
        });
}

function makeBillBoardJsBubbleChart(){
    var billBoardChart = bb.generate({
        bindto: "#billBoardBubbleChart",
        data: {
            type: "bubble",
            columns: [
                ["1st", 470, 250, 400, 400, 500],
                ["2nd", 460, 230, 350, 300, 400],
                ["3rd", 450, 200, 300, 200, 300],
                ["4th", 400, 180, 400, 100, 200],
                ["5th", 380, 170, 330, 500, 100],
            ],
        },
        axis: {
            x: {
                label: "Testing BubbleChart",
                type: "category",
                categories: [
                    "First Data",
                    "Second Data",
                    "Third Data",
                    "Fourth Data",
                    "Fifth Data"
                ]
            },
            y: {
                label: "Bubbles"
            }
        },
        size:{
            width:400,
            height:250
        }
    });
}

function makeEchartGraph(){
    var myChart = echarts.init(document.getElementById('echartsGraph'), null, {renderer:'svg'});
    var option = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
        },
        grid: {},
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
}

function makeToastJsGraph(){
    var container = document.getElementById('toastGraph');
    var data = {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        series: [{
            name: 'Seoul',
            data: [
                [-8.3, 0.3], // range expression
                [-5.8, 3.1],
                [-0.6, 9.1],
                [5.8, 16.9],
                [11.5, 22.6],
                [16.6, 26.6],
                [21.2, 28.8],
                [21.8, 30.0],
                [15.8, 25.6],
                [8.3, 19.6],
                [1.4, 11.1],
                [-5.2, 3.2]
            ]
        }]
    }
    var options = {
        chart: {
            width: 450,
            height: 300,
            //title: 'Temperature Range'
        },
        yAxis: {
            title: 'Month'
        },
        xAxis: {
            title: 'Temperature(Celcius)'
        },
        series: {
            showLabel: false,
            barWidth: 10
        },
        tooltip: {
            suffix: '℃'
        }
    };
    var theme = {
        series: {
            colors: [
                '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
                '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
            ]
        }
    };

    // apply theme
     tui.chart.registerTheme('myTheme', theme);
     options.theme = 'myTheme';

    tui.chart.barChart(container, data, options);

}