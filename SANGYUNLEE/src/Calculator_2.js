var boolOperNum = false; //Operation이 마지막일경우 true 아닐경우는 false
var boolEval = true;
var calculMethod = ""; //수식에 대한 모든 string****
var queueData = []; //그래프 수식을 위한 Queue 변수
var overQueue = false;
//display는 model만을 담당

document.addEventListener('DOMContentLoaded', function(){
  CreateSVG();
  makeChartJs();
  d3Chart();
});

function clearNumDisplay(value){ // 계산기 화면을 지우기 위한 함수
  document.getElementById("display").textContent = value;
  calculMethod = value;
  boolOperNum = false;
  boolEval = false;
}

function addNumDisplay(numValue){ //숫자를 더하는 경우
  if(boolOperNum){ //첫 숫자인 경우 화면클리어
    document.getElementById("display").textContent = "";
  }
  if(boolEval){
    clearNumDisplay("");
  }
  document.getElementById("display").textContent += numValue;
  calculMethod += numValue;
  boolOperNum = false;
  boolEval = false;
}

function operNum(operValue){
  if(boolOperNum){ //수식을 바꿀경우 -> calculMethod 변수 안 맨 끝 수식 제거
      calculMethod = calculMethod.substr(0,calculMethod.length-1);
  }
  calculMethod = eval(calculMethod);
  document.getElementById("display").textContent = calculMethod;
  if(operValue!='='){ //=이 아닐 경우에는 calculMethod에 수식 추가
      boolOperNum = true;
      boolEval = false;
      calculMethod += operValue;
  }
  else{ //= 일 경우 수식 추가 없이 그래픽 그리기
    boolEval = true;
    addDataQueue(calculMethod);
    displayBar();
    updateData(chartJs);//ChartJs파일의 chartJs변수를 가져옴
    updatebillData(billBarChart);
    drawD3Bar();
  }
}

//graph function

function addDataQueue(displayedValue){ //큐에 마지막 변수 삽입
  if(queueData.length < 5){
    queueData.push(displayedValue);
  }
  else{
    overQueue = true;
    queueData.shift();
    queueData.push(displayedValue);
  }
}

function displayBar(){ //queue에서 데이터를 꺼내서 표시
  var bars = document.getElementsByClassName("recBar");
  var displayedData;
  for(var i = 0; i<queueData.length; i++){
    displayedData = queueData[i];
    if(displayedData>=120){
      displayedData = 120;
    }
    bars[i].setAttribute("height", displayedData*2.916); //길이 변환(그래프 길이에 맞춰서 크기 조절)
    bars[i].setAttribute("y", 380-(displayedData*2.916));//그래프 위치에 따른 조정
  }
}
