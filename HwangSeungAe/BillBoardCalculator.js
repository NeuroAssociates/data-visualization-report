//---------------------------BillBoard.js---------------------------
document.addEventListener('DOMContentLoaded', function () {
  insertBillBoardBarGraph();
  insertBillBoardLineGraph();
  insertBillBoardSpLineGraph();
  insertBillBoardStepGraph();
  insertBillBoardAreaGraph();
  insertBillBoardDonutGraph();
});

function insertBillBoardBarGraph() {

  var timeStartBillBoardBar = window.performance.now();

  var billBoardBar = bb.generate({
      bindto: "#billBoardBar",
      data: {
        columns: [
           ["BarResult", 10, 30, 50, 70, 90]
        ],
        type: "bar"
      },
      color: {
        pattern: [
          "#ff6384"
        ]
      },
      axis:{
          x:{
              label:"CALCULATE",
              type: "category",
              categories:[
                  "1ST",
                  "2ND",
                  "3RD",
                  "4TH",
                  "5TH"
              ]
          },
          y:{
              label: "RESULT",
          }
        },
        size :{
            width:590,
            height:390
        },
        grid:{
            y:{
                show:true
            }
        }
    });

    var timeEndBillBoardBar = window.performance.now();
    var timeBillBoardBar = timeEndBillBoardBar - timeStartBillBoardBar;
    document.getElementById("timestamp_billBoardBarChart").innerText = "BillBoard Bar Chart Execution Time : " + timeBillBoardBar;

}


function insertBillBoardLineGraph() {

  var timeStartBillBoardLine = window.performance.now();

  var billBoardLine = bb.generate({
      bindto: "#billBoardLine",
      data: {
        columns: [
           ["BarResult", 90, 70, 50, 30, 10]
        ],
        type: "line"
      },
      color: {
        pattern: [
          "#aec7e8"
        ]
      },
      axis:{
          x:{
              label:"CALCULATE",
              type: "category",
              categories:[
                  "1ST",
                  "2ND",
                  "3RD",
                  "4TH",
                  "5TH"
              ]
          },
          y:{
              label: "RESULT",
          }
        },
        size :{
            width:590,
            height:390
        },
        grid:{
            y:{
                show:true
            }
        }
    });

    var timeEndBillBoardLine = window.performance.now();
    var timeBillBoardLine = timeEndBillBoardLine - timeStartBillBoardLine;
    document.getElementById("timestamp_billBoardLineChart").innerText = "BillBoard Line Chart Execution Time : " + timeBillBoardLine;

}


function insertBillBoardSpLineGraph() {

  var timeStartBillBoardSpLine = window.performance.now();

  var billBoardSpLine = bb.generate({
      bindto: "#billBoardSpLine",
      data: {
        columns: [
           ["BarResult", 10, 50, 30, 90, 70]
        ],
        type: "spline"
      },
      color: {
        pattern: [
          "#ff7f0e"
        ]
      },
      axis:{
          x:{
              label:"CALCULATE",
              type: "category",
              categories:[
                  "1ST",
                  "2ND",
                  "3RD",
                  "4TH",
                  "5TH"
              ]
          },
          y:{
              label: "RESULT",
          }
        },
        size :{
            width:590,
            height:390
        },
        grid:{
            y:{
                show:true
            }
        }
    });

    var timeEndBillBoardSpLine = window.performance.now();
    var timeBillBoardSpLine = timeEndBillBoardSpLine - timeStartBillBoardSpLine;
    document.getElementById("timestamp_billBoardSpLineChart").innerText = "BillBoard SpLine Chart Execution Time : " + timeBillBoardSpLine;

}


function insertBillBoardStepGraph() {

  var timeStartBillBoardStep = window.performance.now();

  var billBoardStep = bb.generate({
      bindto: "#billBoardStep",
      data: {
        columns: [
           ["BarResult", 70, 90, 30, 50, 10]
        ],
        type: "step"
      },
      color: {
        pattern: [
          "#ffbb78"
        ]
      },
      axis:{
          x:{
              label:"CALCULATE",
              type: "category",
              categories:[
                  "1ST",
                  "2ND",
                  "3RD",
                  "4TH",
                  "5TH"
              ]
          },
          y:{
              label: "RESULT",
          }
        },
        size :{
            width:590,
            height:390
        },
        grid:{
            y:{
                show:true
            }
        }
    });

    var timeEndBillBoardStep = window.performance.now();
    var timeBillBoardStep = timeEndBillBoardStep - timeStartBillBoardStep;
    document.getElementById("timestamp_billBoardStepChart").innerText = "BillBoard Step Chart Execution Time : " + timeBillBoardStep;

}


function insertBillBoardAreaGraph() {

  var timeStartBillBoardArea = window.performance.now();

  var billBoardArea = bb.generate({
      bindto: "#billBoardArea",
      data: {
        columns: [
           ["BarResult", 41, 21, 89, 12, 67]
        ],
        type: "area"
      },
      color: {
        pattern: [
          "#2ca02c"
        ]
      },
      axis:{
          x:{
              label:"CALCULATE",
              type: "category",
              categories:[
                  "1ST",
                  "2ND",
                  "3RD",
                  "4TH",
                  "5TH"
              ]
          },
          y:{
              label: "RESULT",
          }
        },
        size :{
            width:590,
            height:390
        },
        grid:{
            y:{
                show:true
            }
        }
    });

    var timeEndBillBoardArea = window.performance.now();
    var timeBillBoardArea = timeEndBillBoardArea - timeStartBillBoardArea;
    document.getElementById("timestamp_billBoardAreaChart").innerText = "BillBoard Area Chart Execution Time : " + timeBillBoardArea;

}


function insertBillBoardDonutGraph() {

  var timeStartBillBoardDonut = window.performance.now();

  var billBoardBar = bb.generate({
      bindto: "#billBoardDonut",
      data: {
        columns: [
           ["data1", 40],
           ["data2", 120]
        ],
        type: "donut"
      },
      color: {
        pattern: [
          "#Ba3da1",
          "#f3bd5a"
        ]
      },
      size :{
          width:610,
          height:380
      },
      donut: {
          title: "RESULT"
      }
  });

  var timeEndBillBoardDonut = window.performance.now();
  var timeBillBoardDonut = timeEndBillBoardDonut - timeStartBillBoardDonut;
  document.getElementById("timestamp_billBoardDonutChart").innerText = "BillBoard Donut Chart Execution Time : " + timeBillBoardDonut;

}
