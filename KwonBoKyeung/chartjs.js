document.addEventListener('DOMContentLoaded', function () {
    chartBar();
    chartLine();
    chartPie();
    chartBubble();
});

/* bar chart.js */
function chartBar() {
  var timeStartChartBar = window.performance.now();

  var result1 = document.getElementById("bar_chart");
  var bar = new Chart(result1, {
      type: 'bar',
      data: {
          labels: ["1st", "2nd", "3rd", "4th", "5th"],
          datasets: [
              {
                  label: "Result",
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 235, 0.5)',
                      'rgba(255, 206, 86, 0.5)',
                      'rgba(75, 192, 192, 0.5)',
                      'rgba(153, 102, 255, 0.5)'],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 2,
                  data: [50, 70, 30, 20, 60]
              }
          ]
      },
      options: {
          legend: { display: false },
          title: {
              display: true,
              text: 'Calculate Result'

          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  var timeEndChartBar = window.performance.now();
  var timeChartBar = timeEndChartBar - timeStartChartBar;
  document.getElementById("timestamp_chartjsBar").innerText = "chart.js Bar Chart : " + timeChartBar;

}

function chartLine() {
  var timeStartChartLine = window.performance.now();

  var result2 = document.getElementById("line_chart");
  var line = new Chart(result2, {
      type: 'line',
      data: {
          labels: ["1st", "2nd", "3rd", "4th", "5th"],
          datasets: [
              {
                  label: "Result",
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 235, 0.5)',
                      'rgba(255, 206, 86, 0.5)',
                      'rgba(75, 192, 192, 0.5)',
                      'rgba(153, 102, 255, 0.5)'],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 2,
                  data: [30, 40, 50, 75, 45]
              }
          ]
      },
      options: {
          legend: { display: false },
          title: {
              display: true,
              text: 'Calculate Result'

          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

  var timeEndChartLine = window.performance.now();
  var timeChartLine = timeEndChartLine - timeStartChartLine;
  document.getElementById("timestamp_chartjsLine").innerText = "chart.js Line Chart : " + timeChartLine;

}



/* pie chart.js */
function chartPie() {
  var timeStartChartPie = window.performance.now();

  var result3 = document.getElementById("pie_chart");
  var pie = new Chart(result3, {
      type: 'pie',
      data: {
          labels: ["1st", "2nd", "3rd", "4th", "5th"],
          datasets: [
              {
                  label: "Result",
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 235, 0.5)',
                      'rgba(255, 206, 86, 0.5)',
                      'rgba(75, 192, 192, 0.5)',
                      'rgba(153, 102, 255, 0.5)'],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 2,
                  data: [30, 10, 20, 15, 25]

              }
          ]
      },
      options: {
          legend: { display: false },
          title: {
              display: true,
              text: 'Calculate Result'

          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  var timeEndChartPie = window.performance.now();
  var timeChartPie = timeEndChartPie - timeStartChartPie;
  document.getElementById("timestamp_chartjsPie").innerText = "chart.js Pie Chart : " + timeChartPie;

}

function chartBubble() {
  var timeStartChartBubble = window.performance.now();

  var result4 = document.getElementById("bubble_chart");
  var bubble = new Chart(result4, {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: '1st',
          data: [
            {
              x: 3,
              y: 3,
              r: 30
            }
          ],
          backgroundColor:'rgba(255, 99, 132, 0.5)',
          hoverBackgroundColor:'rgba(255,99,132,1)'
        },
        {
          label: '2rd',
            data: [
              {
                x: 7,
                y: 2,
                r: 30
              }
            ],
            backgroundColor:'rgba(54, 162, 235, 0.5)',
            hoverBackgroundColor: 'rgba(54, 162, 235, 1)'
        },
        {
          label: '3nd',
            data: [
              {
                x: 2,
                y: 6,
                r: 30
              }
            ],
            backgroundColor:'rgba(255, 206, 86, 0.5)',
            hoverBackgroundColor: 'rgba(255, 206, 86, 1)'
        },
        {
          label: '4th',
            data: [
              {
                x: 9,
                y: 6,
                r: 30
              }
            ],
            backgroundColor:  'rgba(75, 192, 192, 0.5)',
            hoverBackgroundColor: 'rgba(75, 192, 192, 1)'
        },
        {
          label: '5th',
            data: [
              {
                x: 5,
                y: 10,
                r: 30
              }
            ],
            backgroundColor:  'rgba(153, 102, 255, 0.5)',
            hoverBackgroundColor: 'rgba(153, 102, 255, 1)'
        }

        ]
    }
  });
  var timeEndChartBubble = window.performance.now();
  var timeChartBubble = timeEndChartBubble - timeStartChartBubble;
  document.getElementById("timestamp_chartjsBubble").innerText = "chart.js Bubble Chart : " + timeChartBubble;
}
