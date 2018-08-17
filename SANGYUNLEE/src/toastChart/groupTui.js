document.addEventListener('DOMContentLoaded', function(){
  console.time("tui execution time");
  tuiLineChart();
  tuiBarChart();
  tuiPieChart();
  tuiRaderChart();
  console.timeEnd("tui execution time");

});
function tuiLineChart(){
  var lineContainer = document.getElementById('tuiLine');
  var lineData = {
      categories: [1500,1600,1700,1750,1800,1850,1900,1950,1999],
      series: [
          {
              name: 'First',
              data: [86,114,106,106,107,111,133,221,783]
          },
          {
              name: 'Second',
              data: [282,350,411,502,635,809,947,1402,700]
          },
          {
              name: 'Third',
              data: [168,170,178,190,203,276,408,547,675]
          },
          {
              name: 'Fourth',
              data: [40,20,10,16,24,38,74,167,508]
          },
      ]
  };
  var lineOptions = {
      chart: {
          width: 500,
          height: 250,
      },
      series: {
          showDot: true,
          zoomable: false
      },
  };
  var chart = tui.chart.lineChart(lineContainer, lineData, lineOptions);
}

function tuiBarChart(){
var barContainer = document.getElementById('tuiBar');
var barData = {
  categories: ["First", "Second", "Third", "Fourth", "Fifth"],
  series: [
      {
          name: 'Evalution',
          data: [2478,5267,734,784,433]
      },
  ]
};
var barOptions = {
    chart: {
        width: 500,
        height: 250,
    },
    series: {
        showLabel: true,
    },

  };
tui.chart.barChart(barContainer, barData, barOptions);
}

function tuiPieChart(){

  var container = document.getElementById('tuiPie');
  var data = {
      categories: ['Evaluation'],
      series: [
          {
              name: 'First',
              data: 30
          },
          {
              name: 'Second',
              data: 50
          },
          {
              name: 'Third',
              data: 60
          }
      ]
  };
  var options = {
      chart: {
          width: 500,
          height: 250,
      },
  };
  tui.chart.pieChart(container, data, options);

}

function tuiRaderChart(){
  var container = document.getElementById('tuiRader');
  var data = {
    categories: ["xFirst","xSecond","xThird","xFourth","xFifth","xSixth"],
    series: [
        {
            name: 'First',
            data: [15, 30, 22, 34, 24, 55]
        },
        {
            name: 'Second',
            data: [43, 24, 53, 39, 16, 53]
        },
        {
            name: 'Third',
            data: [37, 28, 53, 42, 24, 65]
        },
    ]
  };
  var options = {
      chart: {
          width: 500,
          height: 250
      },
      series: {
          showDot: true,
          showArea: false
      },
  };
  tui.chart.radialChart(container, data, options);
}
