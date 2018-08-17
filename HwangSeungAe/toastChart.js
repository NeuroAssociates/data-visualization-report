document.addEventListener('DOMContentLoaded', function () {
  insertToastBarGraph();
  insertToastLineGraph();
  insertToastAreaGraph();
  insertToastPieGraph();
  insertToastColumnGraph();
  insertToastRadialGraph();
});

function insertToastBarGraph() {
  var timeStartToastBar = window.performance.now();
//   console.time("Toast Bar Execution Time");

  var toastChart = document.getElementById('toastBarChart');
  var data = {
      categories: ['1ST', '2ND', '3RD', '4TH', '5TH'],
      series: [
          {
              name: 'RESULT1',
              data: [50, 30, 70, 60, 40]
          },
          {
              name: 'RESULT2',
              data: [80, 10, 100, 20, 50]
          }
      ]
  };

  var theme = {
      title: {
          fontSize: 24,
          fontFamily: 'Verdana',
          color: 'black'
      },
      chart: {
          fontFamily: 'Verdana',
          fontSize: '25px',
          background: {
              color: 'whitesmoke'
          }
      },
      xAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      yAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      series: {
          colors: ['#8EC0E4', '#f6ea8c']
      }
  };
  tui.chart.registerTheme('newTheme', theme);


  var options = {
      chart: {
          width: 600,
          height: 400,
          title: 'Bar Chart'
      },
      yAxis: {
          title: 'RESULT'
      },
      xAxis: {
          title: 'SEQUENCE',
          min: 0,
          max: 100
      },
       series: {
           showLabel: true
       },
       theme : 'newTheme'
  };

  tui.chart.barChart(toastChart, data, options);

  var timeEndToastBar = window.performance.now();
  var timeToastBar = timeEndToastBar - timeStartToastBar;
  document.getElementById("timestamp_toastBarChart").innerText = "Toast Bar Chart Execution Time : " + timeToastBar;

//   console.timeEnd("Toast Bar Execution Time");

}


function insertToastLineGraph() {
  var timeStartToastLine = window.performance.now();
//   console.time("Toast Line Execution Time");

  var toastChart = document.getElementById('toastLineChart');
  var data = {
      categories: ['1ST', '2ND', '3RD', '4TH', '5TH'],
      series: [
          {
              name: 'RESULT1',
              data: [50, 30, 70, 60, 40]
          },
          {
              name: 'RESULT2',
              data: [80, 10, 100, 20, 50]
          }
      ]
  };

  var theme = {
      title: {
          fontSize: 24,
          fontFamily: 'Verdana',
          color: 'black'
      },
      chart: {
          fontFamily: 'Verdana',
          fontSize: '25px',
          background: {
              color: 'whitesmoke'
          }
      },
      xAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      yAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      series: {
          colors: ['#cbe86b', '#fd999a']
      }
  };
  tui.chart.registerTheme('newTheme', theme);


  var options = {
      chart: {
          width: 600,
          height: 400,
          title: 'Line Chart'
      },
      yAxis: {
          title: 'RESULT'
      },
      xAxis: {
          title: 'SEQUENCE',
          min: 0,
          max: 100
      },
       series: {
           showLabel: true
       },
       theme : 'newTheme'
  };

  tui.chart.lineChart(toastChart, data, options);

  var timeEndToastLine = window.performance.now();
  var timeToastLine = timeEndToastLine - timeStartToastLine;
  document.getElementById("timestamp_toastLineChart").innerText = "Toast Line Chart Execution Time : " + timeToastLine;

//   console.timeEnd("Toast Bar Execution Time");
}



function insertToastAreaGraph() {
  var timeStartToastArea = window.performance.now();

//   console.time("Toast Area Execution Time");

  var toastChart = document.getElementById('toastAreaChart');
  var data = {
      categories: ['1ST', '2ND', '3RD', '4TH', '5TH'],
      series: [
          {
              name: 'RESULT1',
              data: [50, 30, 70, 60, 40]
          },
          {
              name: 'RESULT2',
              data: [80, 10, 100, 20, 50]
          }
      ]
  };

  var theme = {
      title: {
          fontSize: 24,
          fontFamily: 'Verdana',
          color: 'black'
      },
      chart: {
          fontFamily: 'Verdana',
          fontSize: '25px',
          background: {
              color: 'whitesmoke'
          }
      },
      xAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      yAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      series: {
          colors: ['#9DC8C8', '#FFEEE4'],

      }
  };
  tui.chart.registerTheme('newTheme', theme);


  var options = {
      chart: {
          width: 600,
          height: 400,
          title: 'Area Chart'
      },
      yAxis: {
          title: 'RESULT'
      },
      xAxis: {
          title: 'SEQUENCE',
          min: 0,
          max: 100
      },
       series: {
           showLabel: true
       },
       theme : 'newTheme'
  };

  tui.chart.areaChart(toastChart, data, options);

  var timeEndToastArea = window.performance.now();
  var timeToastArea = timeEndToastArea - timeStartToastArea;
  document.getElementById("timestamp_toastAreaChart").innerText = "Toast Area Chart Execution Time : " + timeToastArea;
//   console.timeEnd("Toast Area Execution Time");
}



function insertToastPieGraph() {

  var timeStartToastPie = window.performance.now();

//   console.time("Toast pie Execution Time");

  var toastChart = document.getElementById('toastPieChart');
  var data = {
      categories: ['1ST', '2ND', '3RD', '4TH', '5TH'],
      series: [
          {
              name: 'RESULT1',
              data: [50, 30, 70, 60, 40]
          },
          {
              name: 'RESULT2',
              data: [80, 10, 100, 20, 50]
          }
      ]
  };

  var theme = {
      title: {
          fontSize: 24,
          fontFamily: 'Verdana',
          color: 'black'
      },
      chart: {
          fontFamily: 'Verdana',
          fontSize: '25px',
          background: {
              color: 'whitesmoke'
          }
      },
      xAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      yAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      series: {
          colors: ['#FF0000', '#b0e0e6'],

      }
  };
  tui.chart.registerTheme('newTheme', theme);


  var options = {
      chart: {
          width: 600,
          height: 400,
          title: 'Pie Chart'
      },
      yAxis: {
          title: 'RESULT'
      },
      xAxis: {
          title: 'SEQUENCE',
          min: 0,
          max: 100
      },
       series: {
           showLabel: true
       },
       theme : 'newTheme'
  };

  tui.chart.pieChart(toastChart, data, options);

  var timeEndToastPie = window.performance.now();
  var timeToastPie = timeEndToastPie - timeStartToastPie;
  document.getElementById("timestamp_toastPieChart").innerText = "Toast Pie Chart Execution Time : " + timeToastPie;
//   console.timeEnd("Toast pie Execution Time");
}



function insertToastColumnGraph() {

  var timeStartToastColumn = window.performance.now();

//   console.time("Toast Column Execution Time");

  var toastChart = document.getElementById('toastColumnChart');
  var data = {
      categories: ['1ST', '2ND', '3RD', '4TH', '5TH'],
      series: [
          {
              name: 'RESULT1',
              data: [50, 30, 70, 60, 40]
          },
          {
              name: 'RESULT2',
              data: [80, 10, 100, 20, 50]
          }
      ]
  };

  var theme = {
      title: {
          fontSize: 24,
          fontFamily: 'Verdana',
          color: 'black'
      },
      chart: {
          fontFamily: 'Verdana',
          fontSize: '25px',
          background: {
              color: 'whitesmoke'
          }
      },
      xAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      yAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      series: {
          colors: ['#FFFF66', '#5D5553'],

      }
  };
  tui.chart.registerTheme('newTheme', theme);


  var options = {
      chart: {
          width: 600,
          height: 400,
          title: 'Column Chart'
      },
      yAxis: {
          title: 'RESULT'
      },
      xAxis: {
          title: 'SEQUENCE',
          min: 0,
          max: 100
      },
       series: {
           showLabel: true
       },
       theme : 'newTheme'
  };

  tui.chart.columnChart(toastChart, data, options);

  var timeEndToastColumn = window.performance.now();
  var timeToastColumn = timeEndToastColumn - timeStartToastColumn;
  document.getElementById("timestamp_toastColumnChart").innerText = "Toast Column Chart Execution Time : " + timeToastColumn;
//   console.timeEnd("Toast Column Execution Time");
}


function insertToastRadialGraph() {

  var timeStartToastRadial = window.performance.now();

//   console.time("Toast Radial Execution Time");

  var toastChart = document.getElementById('toastRadialChart');
  var data = {
      categories: ['1ST', '2ND', '3RD', '4TH', '5TH'],
      series: [
          {
              name: 'RESULT1',
              data: [50, 30, 70, 60, 40]
          },
          {
              name: 'RESULT2',
              data: [80, 10, 100, 20, 50]
          }
      ]
  };

  var theme = {
      title: {
          fontSize: 24,
          fontFamily: 'Verdana',
          color: 'black'
      },
      chart: {
          fontFamily: 'Verdana',
          fontSize: '25px',
          background: {
              color: 'whitesmoke'
          }
      },
      xAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      yAxis: {
          title: {
              fontSize: 14,
              fontFamily: 'Verdana',
              color: '#606F82'
          }
      },
      series: {
          colors: ['#FF945A', '#9DCC94'],

      }
  };
  tui.chart.registerTheme('newTheme', theme);


  var options = {
      chart: {
          width: 600,
          height: 400,
          title: 'Radial Chart'
      },
      yAxis: {
          title: 'RESULT'
      },
      xAxis: {
          title: 'SEQUENCE',
          min: 0,
          max: 100
      },
       series: {
           showLabel: true
       },
       theme : 'newTheme'
  };

  tui.chart.radialChart(toastChart, data, options);

  var timeEndToastRadial = window.performance.now();
  var timeToastRadial = timeEndToastRadial - timeStartToastRadial;
  document.getElementById("timestamp_toastRadialChart").innerText = "Toast Radial Chart Execution Time : " + timeToastRadial;
//   console.timeEnd("Toast Radial Execution Time");
}
