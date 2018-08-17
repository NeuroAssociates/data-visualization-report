var tempNumber = "";                                                        //누르는 숫자 저장하는 값
var tempOperator = "";                                                      //누르는 연산자 저장하는 값
var tempResult = "";                                                        //계산 중간값 저장하는 값
var result = 0;                                                             //display될 값
var finished = false;                                                       //연산이 끝났는지 확인
var valueQueue = [];                                                        //data graph 5개확인하기위한 queue
var svgNameSpace = 'http://www.w3.org/2000/svg';                           //svgnamespace


function clickNumber(inputNumber) {
  if((display.textContent=="" || display.textContent==0) && inputNumber==0) {
    display.textContent = 0;
  }

  else if(finished == false) {
    display.textContent += inputNumber;
    tempResult = display.textContent;
  }

  else if(finished == true) {
    tempNumber = "";
    tempOperator = "";
    tempResult = "";
    result = 0;
    finished = false;
    display.textContent = "";

    display.textContent += inputNumber;
    tempResult = display.textContent;

  }
}

function clickResult() {
  result = eval(tempResult);
  tempResult = result;
  finished = true;

  display.textContent = result;
  drawGraph(result);

}

function clickOperate(inputOperate) {
  // =연산자후 숫자가아닌 다른 연산자가 나오면 다시 계산이 끝났다는 bool변수 false로 변경
  finished = false;

  if(tempOperator != "")
  {
    tempOperator = "";
    tempOperator = inputOperate;
  }
  tempOperator = inputOperate;
  tempResult += tempOperator;
  display.textContent = tempResult;
}

function clickReset() {
  tempNumber = "";
  tempOperator = "";
  tempResult = "";
  result = 0;
  finished = false;
  display.textContent = "";
}

function drawGraph(result) {

  var  length = valueQueue.length;

  //queue에 6개이상 들어있으면 맨처음 데이터 빼고 최신 데이터 넣어준다.
  if(length < 5) {
    valueQueue.push(result);
  }

  else {
    valueQueue.shift();
    valueQueue.push(result);
  }

  length = valueQueue.length;
  var dataBar = document.getElementsByClassName('data');

  for(var i=0; i<length; i++) {
    var yData = 310 - (valueQueue[i] * 2.6);
    var heightData = valueQueue[i] * 2.6;

    dataBar[i].setAttribute("y", yData);
    dataBar[i].setAttribute("height", heightData);

  }
}

//----------------------------Svg---------------------------------
window.addEventListener('DOMContentLoaded', function calculatorSVG() {

  //계산기 svg구현
  var calculator = document.getElementById("calculator");

  //svg tag
  var CalculatorSvgTag = document.createElementNS(svgNameSpace, "svg");
  calculator.appendChild(CalculatorSvgTag);
  CalculatorSvgTag.setAttribute("width", "500");
  CalculatorSvgTag.setAttribute("height", "700");


  //textBox
  var textBox = document.createElementNS(svgNameSpace, "rect");

    CalculatorSvgTag.appendChild(textBox);

    textBox.setAttribute("x", "70");
    textBox.setAttribute("y", "68");
    textBox.setAttribute("rx", "20");
    textBox.setAttribute("ry", "20");
    textBox.setAttribute("id", "textBox");


  //display
  var display = document.createElementNS(svgNameSpace, "text");

    CalculatorSvgTag.appendChild(display);

    display.setAttribute('font-size', "26");
    display.setAttribute("x", "75");
    display.setAttribute("y", "160");
    display.setAttribute("id", "display");


  //button insert 함수
  function insertButton(x, y, rx, ry, width, height, func, className) {
    var button = document.createElementNS(svgNameSpace, "rect");

    CalculatorSvgTag.appendChild(button);

    button.setAttribute("x", x);
    button.setAttribute("y", y);
    button.setAttribute("rx", rx);
    button.setAttribute("ry", ry);
    button.setAttribute("width", width);
    button.setAttribute("height", height);
    button.setAttribute("onclick", func);
    button.setAttribute("class", className);
  }


  //button-text insert 함수
  function insertText(x, y, func, text, className) {
    var buttonText = document.createElementNS(svgNameSpace, "text");

    CalculatorSvgTag.appendChild(buttonText);

    buttonText.setAttribute("x", x);
    buttonText.setAttribute("y", y);
    buttonText.setAttribute("onclick", func);
    buttonText.setAttribute("class", className);
    buttonText.textContent = text;
  }


  insertButton("70", "230", "20", "20", "90", "80", "clickReset()", "buttonEtc");
  insertText("115", "285", "clickReset()", "C", "textEtc");
  insertButton("170", "230", "20", "20", "90", "80", "0", "buttonEtc");
  insertText("215", "285", "0", "+/-", "textEtc");
  insertButton("270", "230", "20", "20", "90", "80", "0", "buttonEtc");
  insertText("315", "285", "0", "%", "textEtc");
  insertButton("370", "230", "20", "20", "90", "80", "clickOperate('/')", "buttonSign");
  insertText("415", "285", "clickOperate('/')", "/", "text");

  insertButton("70", "322", "20", "20", "90", "80", "clickNumber('9')", "buttonNumber");
  insertText("115", "380", "clickNumber('9')", "9", "text");
  insertButton("170", "322", "20", "20", "90", "80", "clickNumber('8')", "buttonNumber");
  insertText("215", "380", "clickNumber('8')", "8", "text");
  insertButton("270", "322", "20", "20", "90", "80", "clickNumber('7')", "buttonNumber");
  insertText("315", "380", "clickNumber(7)", "7", "text");
  insertButton("370", "322", "20", "20", "90", "80", "clickOperate('*')", "buttonSign");
  insertText("415", "380", "clickOperate('*')", "X", "text");

  insertButton("70", "415", "20", "20", "90", "80", "clickNumber('4')", "buttonNumber");
  insertText("115", "470", "clickNumber('4')", "4", "text");
  insertButton("170", "415", "20", "20", "90", "80", "clickNumber('5')", "buttonNumber");
  insertText("215", "470", "clickNumber('5')", "5", "text");
  insertButton("270", "415", "20", "20", "90", "80", "clickNumber('6')", "buttonNumber");
  insertText("315", "470", "clickNumber('6')", "6", "text");
  insertButton("370", "415", "20", "20", "90", "80", "clickOperate('-')", "buttonSign");
  insertText("415", "470", "clickOperate('-')", "-", "text");

  insertButton("70", "510", "20", "20", "90", "80", "clickNumber('1')", "buttonNumber");
  insertText("115", "565", "clickNumber('1')", "1", "text");
  insertButton("170", "510", "20", "20", "90", "80", "clickNumber('2')", "buttonNumber");
  insertText("215", "565", "clickNumber('2')", "2", "text");
  insertButton("270", "510", "20", "20", "90", "80", "clickNumber('3')", "buttonNumber");
  insertText("315", "565", "clickNumber('3')", "3", "text");
  insertButton("370", "510", "20", "20", "90", "80", "clickOperate('+')", "buttonSign");
  insertText("415", "565", "clickOperate('+')", "+", "text");

  insertButton("70", "605", "20", "20", "190", "80", "clickNumber('0')", "buttonNumber");
  insertText("115", "660", "clickNumber('0')", "0", "text");
  insertButton("270", "605", "20", "20", "90", "80", "clickNumber('.')", "buttonNumber");
  insertText("315", "660", "clickNumber('.')", ".", "text");
  insertButton("370", "605", "20", "20", "90", "80", "clickResult()", "buttonSign");
  insertText("415", "660", "clickResult()", "=", "text");



  //graph svg구현
  var graph = document.getElementById("SvgGraph");

  //svg tag
  var graphSvgTag = document.createElementNS(svgNameSpace, "svg");
  graph.appendChild(graphSvgTag);
  graphSvgTag.setAttribute("width", "600");
  graphSvgTag.setAttribute("height", "400");

  //axis insert
  function insertAxis(x1, x2, y1, y2) {
    var axis = document.createElementNS(svgNameSpace, "line");

    graphSvgTag.appendChild(axis);
    axis.setAttribute("x1", x1);
    axis.setAttribute("x2", x2);
    axis.setAttribute("y1", y1);
    axis.setAttribute("y2", y2);
    axis.setAttribute("style", "stroke:black;");
  }

  insertAxis("60", "600", "310", "310");
  insertAxis("60", "60", "-10", "310");

  //inner x-axis insert
  function insertInnerAxis(x1, y1, x2, y2, className) {
    var innerAxis = document.createElementNS(svgNameSpace, "line");

    graphSvgTag.appendChild(innerAxis);

    innerAxis.setAttribute("x1", x1);
    innerAxis.setAttribute("x2", x2);
    innerAxis.setAttribute("y1", y1);
    innerAxis.setAttribute("y2", y2);
    innerAxis.setAttribute("class", className);
  }

  insertInnerAxis("100", "55", "580", "55", "innerAxis");
  insertInnerAxis("100", "105", "580", "105", "innerAxis");
  insertInnerAxis("100", "155", "580", "155", "innerAxis");
  insertInnerAxis("100", "205", "580", "205", "innerAxis");
  insertInnerAxis("100", "255", "580", "255", "innerAxis");



  //graph text
  function graphText(x, y, text, className) {
    var graphText = document.createElementNS(svgNameSpace, "text");

    graphSvgTag.appendChild(graphText);

    graphText.setAttribute("x", x);
    graphText.setAttribute("y", y);
    graphText.setAttribute("class", className);
    graphText.textContent = text;

  }

  //x-axis
  graphText("130", "340", "1ST", "xLabel");
  graphText("220", "340", "2ND", "xLabel");
  graphText("310", "340", "3RD", "xLabel");
  graphText("400", "340", "4TH", "xLabel");
  graphText("500", "340", "5TH", "xLabel");
  graphText("532", "300", "CALCULATE", "label");

  //y-axis
  graphText("15", "55", "100", "yLabel");
  graphText("25", "105", "80", "yLabel");
  graphText("25", "155", "60", "yLabel");
  graphText("25", "210", "40", "yLabel");
  graphText("25", "260", "20", "yLabel");
  graphText("35", "310", "0", "yLabel");
  graphText("70", "13", "RESULT", "label");


  //bar insert 함수
  function insertBar(x, y, color) {
    console.time("SVG EXECUTION TIME");

    var data = document.createElementNS(svgNameSpace, "rect");

    graphSvgTag.appendChild(data);

    data.setAttribute("x", x);
    data.setAttribute("y", y);
    data.setAttribute("width", "40");
    data.setAttribute("height", "0");
    data.setAttribute("fill", color);
    data.setAttribute("class", "data");

    console.timeEnd("SVG EXECUTION TIME");
  }

  insertBar("125", "350", "rgba(173, 217, 202)");
  insertBar("220", "350", "rgba(242, 221, 157)");
  insertBar("310", "350", "rgba(243, 188, 170)");
  insertBar("400", "350", "rgba(188, 217, 173)");
  insertBar("500", "350", "rgba(230, 224, 195)");

});
