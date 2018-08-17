var chartJs;
function makeChartJs(){
      chartJs = new Chart(document.getElementById("barChart"), {
        type: 'bar',
        data: {
          labels: ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH"],
          datasets: [
            {
              label: "Calculated Number",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [0,0,0,0,0]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Calculator Using Chart.js',
            fontSize: 40
          }
        }
})};


function updateData(chartData){
  for(var i = 0; i < queueData.length; i++){
    chartData.data.datasets[0].data[i] = queueData[i];
  }
   chartData.update();
};
