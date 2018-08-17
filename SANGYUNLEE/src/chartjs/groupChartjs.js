document.addEventListener('DOMContentLoaded', function(){
  console.time("Chartjs Execution Time");
  new Chart(document.getElementById("chartJsLine"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "First",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Second",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Third",
          borderColor: "#3cba9f",
          fill: false
        }, {
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Fourth",
          borderColor: "#e8c3b9",
          fill: false
        }
      ]
    },
  });

  new Chart(document.getElementById("chartJsBar"), {
    type: 'bar',
    data: {
      labels: ["First", "Second", "Third", "Fourth", "Fifth"],
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false }
    }
  });

  new Chart(document.getElementById("chartJsPie"), {
    type: 'pie',
    data: {
      labels: ["First", "Second", "Third", "Fourth", "Fifth"],
      datasets: [{
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
  });

  new Chart(document.getElementById("chartJsRader"), {
    type: 'radar',
    data: {
      labels: ["First", "Second", "Third", "Fourth", "Fifth"],
      datasets: [
        {
          label: "First",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "Second",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
  });

  new Chart(document.getElementById("chartJsPolar"), {
    type: 'polarArea',
    data: {
      labels: ["First", "Second", "Third", "Fourth", "Fifth"],
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [247,526,734,784,433]
        }
      ]
    },
  });

  new Chart(document.getElementById("chartJsDoughnut"), {
    type: 'doughnut',
    data: {
      labels: ["First", "Second", "Third", "Fourth", "Fifth"],
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
  });
  console.timeEnd("Chartjs Execution Time");


});
