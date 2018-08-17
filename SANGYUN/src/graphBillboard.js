var billBarChart;
var billBubbleChart;
document.addEventListener('DOMContentLoaded', function(){
  makeBillBarChart();
});

function makeBillBarChart(){
  billBarChart = bb.generate({
    data: {
      columns: [
  	["Calculated Data", 0, 0, 0, 0, 0, 0]
      ],
      type: "bar"
    },
    grid: {
      x:{
        show: true
      },
      y:{
        show: true
      }
    },
    axis:{
        x:{
            label:"Evaluated Data",
            categories:[
                "First",
                "Second",
                "Third",
                "Fourth",
                "Fifth"
            ]
        },
        y:{
            label: "RESULT",
            max: 110,
        }
    },
    size :{
      width:900,
      height:430
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    bindto: "#billBoardChart"
  });
}


function updatebillData(chartData){
  for(var i = 0; i < queueData.length; i++){
    chartData.data()[0].values[i].value = queueData[i];
  }
   chartData.show();
};
