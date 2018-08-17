console.time("Google Chart Execution Time");
google.charts.load("current", {packages:["line"]});
google.charts.load("current", {packages:["bar"]});
google.charts.load("current", {packages:["calendar"]});
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawGoogleLineChart);
google.charts.setOnLoadCallback(drawGoogleBarChart);
google.charts.setOnLoadCallback(drawGooglePieChart);
google.charts.setOnLoadCallback(drawGoogleCalendarChart);


function drawGoogleLineChart(){
  var data = new google.visualization.arrayToDataTable([
    ['Evaluation', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'],
    ["xFirst", 30, 200, 100, 400, 150, 250],
    ["xSecond", 50, 20, 10, 40, 15, 25],
    ["xThird", 60, 10, 50, 70, 40, 20]
  ]);
      var options = {
        width: 500,
        height: 250
      };

      var chart = new google.charts.Line(document.getElementById('googleLine'));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }

function drawGoogleBarChart(){
  var data = new google.visualization.arrayToDataTable([
    ['Evaluation', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'],
    ["xFirst", 30, 200, 100, 400, 150, 250],
    ["xSecond", 50, 20, 10, 40, 15, 25],
    ["xThird", 60, 10, 50, 70, 40, 20]
  ]);

  var options = {
    width: 500,
    height: 250,
    bars: 'vertical'
  };

  var chart = new google.charts.Bar(document.getElementById('googleBar'));
    chart.draw(data, options);
}

function drawGooglePieChart(){
  var data = new google.visualization.arrayToDataTable([
    ['Calculating', 'Evaluation'],
    ["xFirst", 30],
    ["xSecond", 50],
    ["xThird", 60]
  ]);

  var options = {
    width: 500,
    height: 250,
    Piehole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('googlePie'));
  chart.draw(data, options);
}

function drawGooglePieChart(){
  var data = new google.visualization.arrayToDataTable([
    ['Calculating', 'Evaluation'],
    ["xFirst", 30],
    ["xSecond", 50],
    ["xThird", 60]
  ]);

  var options = {
    width: 500,
    height: 250,
    Piehole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('googlePie'));
  chart.draw(data, options);
}

function drawGoogleCalendarChart(){
  var dataTable = new google.visualization.DataTable();
       dataTable.addColumn({ type: 'date', id: 'Date' });
       dataTable.addColumn({ type: 'number', id: 'Attendance/Absence' });
       dataTable.addRows([
          [ new Date(2018, 0, 21), 38229 ],
          [ new Date(2018, 2, 23), 38229 ],
          [ new Date(2018, 3, 06), 38229 ],
          [ new Date(2018, 3, 07), 37032 ],
          [ new Date(2018, 4, 08), 38024 ],
          [ new Date(2018, 5, 09), 38024 ],
          [ new Date(2018, 1, 10), 38108 ],
          [ new Date(2018, 4, 11), 38229 ],
        ]);

       var chart = new google.visualization.Calendar(document.getElementById('googleCalendar'));

       var options = {
         title: "Attendence Days",
         width: 500,
         height: 250,
       };

       chart.draw(dataTable, options);

}

console.timeEnd("Google Chart Execution Time");
