//---------------------------Chart.js---------------------------
document.addEventListener('DOMContentLoaded', function () {
  insertChartBarGraph();
  insertChartLineGraph();
  insertChartRadarGraph();
  insertChartCircleGraph();
});


function insertChartBarGraph() {

  var timeStartchartBar = window.performance.now();

  var insertChartBarGraph = new Chart(document.getElementById("chartBarGraph"), {
    type: "bar",
      data: {
          labels: ["1ST", "2ND", "3RD", "4TH", "5TH"],
          datasets: [
              {
                  label: "RESULT",
                  backgroundColor: [
                      'rgba(116, 19, 60)',
                      'rgba(194, 40, 76)',
                      'rgba(244, 243, 238)',
                      'rgba(245, 183, 198)',
                      'rgba(219, 131, 153)'],
                  borderWidth: 2,
                  data: [10, 30, 50, 60, 40]
              }
          ]
      }
  });

  var timeEndchartBar = window.performance.now();
  var timechartBar = timeEndchartBar - timeStartchartBar;
  document.getElementById("timestamp_chartBarChart").innerText = "chart Bar Chart Execution Time : " + timechartBar;

}

function insertChartLineGraph() {

  var timeStartchartLine = window.performance.now();

  var insertChartLineGraph = new Chart(document.getElementById("chartLineGraph"), {
    type: "line",
      data: {
          labels: ["1ST", "2ND", "3RD", "4TH", "5TH"],
          datasets: [
              {
                  label: "RESULT",
                  backgroundColor: [
                      'rgba(85, 117, 138)'],
                  borderWidth: 2,
                  data: [10, 50, 30, 90, 70]
              }
          ]
      }
  });

  var timeEndchartLine = window.performance.now();
  var timechartLine = timeEndchartLine - timeStartchartLine;
  document.getElementById("timestamp_chartLineChart").innerText = "chart Line Chart Execution Time : " + timechartLine;

}

function insertChartRadarGraph() {

  var timeStartchartRadar = window.performance.now();

  var insertChartRadarGraph = new Chart(document.getElementById("chartRadarGraph"), {
    type: "radar",
      data: {
          labels: ["1ST", "2ND", "3RD", "4TH", "5TH"],
          datasets: [
              {
                  label: "RESULT",
                  backgroundColor: [
                      'rgba(151, 131, 166)'],
                  borderWidth: 2,
                  data: [60, 50, 30, 90, 70]
              }
          ]
      }
  });

  var timeEndchartRadar = window.performance.now();
  var timechartRadar = timeEndchartRadar - timeStartchartRadar;
  document.getElementById("timestamp_chartRadarChart").innerText = "chart Radar Chart Execution Time : " + timechartRadar;

}

function insertChartCircleGraph() {

  var timeStartchartCircle = window.performance.now();

  var insertChartCircleGraph = new Chart(document.getElementById("chartCircleGraph"), {
    type: "pie",
      data: {
          labels: ["1ST", "2ND", "3RD", "4TH", "5TH"],
          datasets: [
              {
                  label: "RESULT",
                  backgroundColor: [
                      'rgba(159, 215, 191)',
                      'rgba(82, 180, 155)',
                      'rgba(67, 164, 157)',
                      'rgba(128, 134, 132)',
                      'rgba(148, 180, 179)'],
                  borderWidth: 2,
                  data: [10, 50, 30, 90, 70]
              }
          ]
      }
  });

  var timeEndchartCircle = window.performance.now();
  var timechartCircle = timeEndchartCircle - timeStartchartCircle;
  document.getElementById("timestamp_chartCircleChart").innerText = "chart Circle Chart Execution Time : " + timechartCircle;

}
