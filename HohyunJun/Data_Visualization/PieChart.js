document.addEventListener('DOMContentLoaded', function () {
    makeD3PieGraph();
    makeChartJsPieGraph();
    makeBillBoardJsPieGraph();
    makeEchartsJsGraph();
    makeToastJsGraph();
});

function makeD3PieGraph(){
    console.time("D3.js Execution Time");
    var data = [10, 20, 30,15,25];

    var width = 500,
        height = 350,
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

    var svg = d3.select(".d3Graph").append("svg")
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
        .style('stroke','white');

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
    var endTime = new Date().getTime();
    console.timeEnd("D3.js Execution Time");
}

function makeChartJsPieGraph(){
    console.time("Chart.js Execution Time");
    var pieCanvas = document.getElementById("ChartJs");
    var pieChart = new Chart(pieCanvas, {
        type: 'pie',
        data: {
            labels: ["First", "Second", "Third", "Fourth", "Fifth"],
            datasets: [{
                //label: 'Result',
                data: [100, 200, 300, 400, 500],
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
            maintainAspectRatio: false
        }
    });
    var endTime = new Date().getTime();
    console.timeEnd("Chart.js Execution Time");
}

function makeBillBoardJsPieGraph(){
    console.time("Billboard.js Execution Time");
    var billBoardPie = bb.generate({
        bindto: "#billBoardChart",
        data : {
            type: "pie",
            columns:[
                ["First", 20],
                ["Second", 30],
                ["Third", 10],
                ["Fourth", 15],
                ["Fifth", 25]
            ]
        },
        size:{
            width: 600,
            height: 400
        }
    });
    var endTime = new Date().getTime();
    console.timeEnd("Billboard.js Execution Time");
}

function makeEchartsJsGraph(){
    console.time("Echarts.js Execution Time");
    var myChart = echarts.init(document.getElementById('eChartsGraph'));
    var option = {
        title:{},
        tooltip:{
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend:{},
        series:[{
            name: 'Testing Pie Graph',
            type: 'pie',
            radius : '80%',
            center : ['50%','60%'],
            data:[
                {value:335, name:'First'},
                {value: 310,name: 'Second'},
                {value: 234,name: 'Third'},
                {value: 135,name: 'Fourth'},
                {value: 1548,name: 'Fifth'}
            ],
            itemStyle:{
                emphasis:{
                    shadowBlur:10,
                    shadowOffsetX:0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            }
        }]
    };
    myChart.setOption(option);
    var endTime = new Date().getTime();
    console.timeEnd("Echarts.js Execution Time");
}

function makeToastJsGraph(){
    console.time("Toast.js Execution Time");
    var container = document.getElementById('toastChart');
    var data = {
        series:[
            {
                name: 'First',
                data:20
            },
            {
                name: 'Second',
                data:50
            },
            {
                name: 'Third',
                data: 60
            },
            {
                name: 'Fourth',
                data: 80
            },
            {
                name: 'Fifth',
                data: 10
            },
            {
                name: 'Sixth',
                data: 30
            }
        ]
    };
    var option = {
        chart: {
            width: 600,
            height: 400,
            title: 'Pie Chart'
        },
        series:{
            showLabel: true
        }
    };
    tui.chart.pieChart(container, data, option);

    var endTime = new Date().getTime();
    console.timeEnd("Toast.js Execution Time");
}