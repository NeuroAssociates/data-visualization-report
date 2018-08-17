document.addEventListener('DOMContentLoaded', function () {
    barChart();
    pieChart();
    lineChart();
});

function barChart() {
  var timeStartBillboardBar = window.performance.now();

  /* billboard.js BarGraph */
  var billbar = bb.generate({

      bindto: "#billBar",
      data: {
          type: "bar",
          columns: [
              ["Caculate Result", 50, 30, 40, 60, 20]
          ]
      },
      axis: {
          x: {
              label: "TIMES",
              type: "category",
              categories: [
                  "1st",
                  "2nd",
                  "3rd",
                  "4th",
                  "5th"
              ]
          },
          y: {
              label: "RESULT",
          },
      },
      color: {
          pattern: [
              'rgba(255, 99, 132, 0.5)'
          ]
      }
  });

  var timeEndBillboardBar = window.performance.now();
  var timeBillboardBar = timeEndBillboardBar - timeStartBillboardBar;
  document.getElementById("timestamp_BillboardBarChart").innerText = "Billboard Bar Chart : " + timeBillboardBar;

}

function pieChart(){
  var timeStartBillboardPie = window.performance.now();

  var billpie = bb.generate({
    data : {
        type: "pie",
        columns:[
            ["1st", 10],
            ["2nd", 20],
            ["3rd", 30],
            ["4th", 40],
        ],
      onclick: function(d, i) {
  	console.log("onclick", d, i);
     },
      onover: function(d, i) {
  	console.log("onover", d, i);
     },
      onout: function(d, i) {
  	console.log("onout", d, i);
     }
    },
    color: {
        pattern: [
            'rgba(255, 99, 132, 0.5)'
        ]
    },
    bindto: "#billPie"
  });

  var timeEndBillboardPie = window.performance.now();
  var timeBillboardPie = timeEndBillboardPie - timeStartBillboardPie;
  document.getElementById("timestamp_BillboardPieChart").innerText = "Billboard Pie Chart : " + timeBillboardPie;

}

function lineChart() {
  var timeStartBillboardLine = window.performance.now();

  var billline = bb.generate({
    data: {
      columns: [
  	["data1", 30, 200, 100, 400, 150, 250],
  	["data2", 50, 20, 10, 40, 15, 25]
      ]
    },
    color: {
        pattern: [
            'rgba(255, 99, 132, 0.5)'
        ]
    },
    bindto: "#billLine"
  });
  var timeEndBillboardLine = window.performance.now();
  var timeBillboardLine = timeEndBillboardLine - timeStartBillboardLine;
  document.getElementById("timestamp_BillboardLineChart").innerText = "Billboard Line Chart : " + timeBillboardLine;


}
