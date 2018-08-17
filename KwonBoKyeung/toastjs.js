document.addEventListener('DOMContentLoaded', function () {
    barChart();
    lineChart();
    pieChart();
    bubbleChart();
});

/* bar chart.js */
function barChart() {
  var timeStartToastBar = window.performance.now();

  var bar = document.getElementById('toastBarChart');
  var data = {
      categories: ['1st', '2nd', '3rd', '4th', '5th'],
      series: [
          {
              name: 'RESULT1',
              data: [30, 40, 20, 60, 70]
          },
          {
              name: 'RESULT2',
              data: [80, 70, 60, 50, 40]
          }
      ]
  };

  var theme = {
      chart: {
          fontFamily: 'cursive',
          fontSize: '25px',

      },
      xAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'cursive',
              color: '#606F82'
          }
      },
      yAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'cursive',
              color: '#606F82'
          }
      },
      series: {
          colors: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)']
      }
  };
  tui.chart.registerTheme('newTheme', theme);

  var options = {
      chart: {
          width: 450,
          height: 350,
      },
      xAxis: {
          min: 0,
          max: 100
      },
       series: {
           showLabel: true
       },
       theme : 'newTheme'
  };

  tui.chart.barChart(bar, data, options);

  var timeEndToastBar = window.performance.now();
  var timeToastBar = timeEndToastBar - timeStartToastBar;
  document.getElementById("timestamp_toastBarChart").innerText = "toast Bar Chart : " + timeToastBar;

}



function lineChart() {
  var timeStartToastLine = window.performance.now();

  var container = document.getElementById('toastLineChart');

  var data = {
      categories: ['1st', '2nd', '3rd', '4th', '5th'],
      series: [
          {
              name: 'RESULT1',
              data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 24.9, 25.2, 20.4, 13.9, 6.6, -0.6]
          },
          {
              name: 'RESULT2',
              data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.4, 3.7]
          },
          {
              name: 'RESULT3',
              data: [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 17.6, 19.4, 21.2]
          }
      ]
  };
  var options = {
      chart: {
          width: 450,
          height: 350,
      },
      xAxis: {
        min: 0,
        max: 100
      }
  };
  var theme = {
      series: {
          colors: [
              'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'
          ]
      }
  };

  var chart = tui.chart.lineChart(container, data, options);

  var timeEndToastLine = window.performance.now();
  var timeToastLine = timeEndToastLine - timeStartToastLine;
  document.getElementById("timestamp_toastLineChart").innerText = "toast Line Chart : " + timeToastLine;

}



function pieChart() {
  var timeStartToastPie = window.performance.now();
  var container = document.getElementById('toastPieChart');
  var data = {
      categories: ['RESULT'],
      series: [
          {
              name: 'RESULT1',
              data: 45
          },
          {
              name: 'RESULT2',
              data: 23
          },
          {
              name: 'RESULT3',
              data: 17
          },
          {
              name: 'RESULT4',
              data: 5
          },
          {
              name: 'RESULT5',
              data: 10
          }
      ]
  };

  var options = {
      chart: {
          width: 400,
          height: 400,
          format: function(value, chartType, areaType, valuetype, legendName) {
              if (areaType === 'makingSeriesLabel') { // formatting at series area
                  value = value + '%';
              }
              return value;
          }
      },
      series: {
          radiusRange: ['30%', '100%'],
          showLabel: true
      },
      tooltip: {
          suffix: '%'
      }
  };
  var theme = {
      series: {
          series: {
              colors: [
                'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'
              ]
          }
      }
  };

  tui.chart.pieChart(container, data, options);
  var timeEndToastPie = window.performance.now();
  var timeToastPie = timeEndToastPie - timeStartToastPie;
  document.getElementById("timestamp_toastPieChart").innerText = "toast Pie Chart : " + timeToastPie;

}



function bubbleChart() {
  var timeStartToastBubble = window.performance.now();

  var container = document.getElementById('toastBubbleChart');
  var data = {
      series: [
          {
              name: '1st',
              data:
                  { x: 190, y: 70.35, r: 32209101, label: '1st' }

          },
          {
              name: '2nd',
              data:
                  { x: 120, y: 74.64, r: 32209101, label: '2nd' }
          },
          {
              name: '3rd',
              data:
                  { x: 10, y: 71.96, r: 92988000, label: '3rd' }
          },
          {
              name: '4th',
              data:
                  { x: 300, y: 71.12, r: 92988000, label: '4th' }
          },
          {
              name: '5th',
              data:
                  { x: 290, y: 64.56, r: 92988000, label: '5th' }
          }
      ]
  };
  var options = {
      chart: {
          width: 450,
          height: 380,
      }
  };
  var theme = {
      series: {
          colors: [
            'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'
          ]
      }
  };



  tui.chart.bubbleChart(container, data, options);
  var timeEndToastBubble = window.performance.now();
  var timeToastBubble = timeEndToastBubble - timeStartToastBubble;
  document.getElementById("timestamp_toastBubbleChart").innerText = "toast Bubble Chart : " + timeToastBubble;


}
