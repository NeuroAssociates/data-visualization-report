
var initSvg;

function d3Chart(){
  initSvg = d3.select("#d3Chart")
        .append("svg")
        .attr('width', 900)
        .attr('height', 430);
        drawD3Axis(initSvg);
};

function drawD3Axis(){
  var xLabelData = [ "FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH" ];
  var yLabelData = ['0','20','40','60','80','100', '120'];
  var axisGroup = initSvg.append("g")
        .attr('class', 'axisGroup');

  var axisLine = axisGroup.append("path")
        .attr('d', "M100 30 L100 380 L800 380")
        .attr('stroke', "black")
        .attr('fill', "none");

  var xGroup = initSvg.append("g")
        .attr('class', 'xGroup');

  var xLabel = xGroup.selectAll("text")
        .data(xLabelData)
        .enter()
        .append("text")
        .attr('class', 'xLabel')
        .attr('x',function(d, i){
          if(i == 0){return 207}
          else if(i == 1){return 311}
          else if(i == 2){return 437}
          else if(i == 3){return 547}
          else{return 673}
        })
        .attr('y',"410")
        .text(function(d, i){return d});

  var xGrid = xGroup.selectAll("line")
        .data(xLabelData)
        .enter()
        .append("line")
        .attr("x1", function(d, i){return (226.6+i*116.6)})
        .attr("x2", function(d, i){return (226.6+i*116.6)})
        .attr("y1", "30")
        .attr("y2", "380")
        .attr("stroke", "black")
        .attr("stroke-dasharray", "1, 2");

  var yGroup = initSvg.append("g")
        .attr('class', 'yGroup');

  var yLabel = yGroup.selectAll("text")
        .data(yLabelData)
        .enter()
        .append("text")
        .attr('class', 'yLabel')
        .attr('x', '60')
        .attr('y',function(d, i){return 380-(58.3*i)})
        .text(function(d, i){return d});

  var yGrid = yGroup.selectAll("line")
        .data(yLabelData)
        .enter()
        .append("line")
        .attr("x1", "100")
        .attr("x2", "800")
        .attr("y1", function(d, i){return (88.3+i*58.3)})
        .attr("y2", function(d, i){return (88.3+i*58.3)})
        .attr("stroke", "black")
        .attr("stroke-dasharray", "1, 2");

  var yResultLabel = yGroup.append("text")
        .attr("x", "5")
        .attr("y", "50")
        .text("Result");
};

function drawD3Bar(){
  var datasets = [];
  for (var i = 0; i < queueData.length; i++) {
    if(queueData[i]){
      datasets[i] = queueData[i];
    }
    else{
      datasets[i] = 0;
    }
  }
  var padding = 206.6;
  if(!overQueue){
    var bars = initSvg.selectAll('rect')
          .data(datasets)
          .enter()
          .append('rect')
          .attr('class','d3Bar')
          .attr('x', function(d, i){
            return (i*116.6+padding);
          })
          .attr('width', 40)
          .attr('y', 380)
          .attr('height', 0)
          .transition()
          .duration(100)
          .attr('y', function(d){
            var k;
            if(d > 120){k = 120}
            else{k = d}
            return (380-k*2.916);
          })
          .attr('height', function(d){
            var k;
            if(d > 120){k = 120}
            else{k = d}
            return (2.916*k);
          })
          .attr('fill', 'blue')
          .attr('stroke', 'black')
          .attr('stroke-width', '1')
          .attr('opacity','0.7');
    }
    else{
      var bars = initSvg.selectAll('rect')
            .data(datasets)
            .attr('class','d3Bar')
            .attr('x', function(d, i){
              return (i*116.6+padding);
            })
            .attr('y', function(d){
              var k;
              if(d > 120){k = 120}
              else{k = d}
              return (380-k*2.916);
            })
            .attr('width', 40)
            .attr('height', function(d){
              var k;
              if(d > 120){k = 120}
              else{k = d}
              return (2.916*k);
            })
            .attr('fill', 'blue')
            .attr('stroke', 'black')
            .attr('stroke-width', '1')
            .attr('opacity','0.7');
    }
};
