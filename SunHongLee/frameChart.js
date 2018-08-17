"use strict";
/*
//  Calculator project.
//  tscChart.ts.
//
//
//  Created by SunHong Lee on 2018. 7. 17.
//
//
//
*/
let displayNum = "0"; //display될 숫자.
let storedNum = ""; //연산을 위해 저장되는 숫자.
let operation = 0; //연산 종류
let oldOperation = 0; //연산 종류 
let calculationFinished = false; //계산과정을 마치는 표시.
let ongoing = false; //연산을 계속 진행하는 과정임을 표시하기위한 값. (중간결과 표시.)
let barIndex = 0;
let barData = [];
let chartOrder = 0;
let displayId = "display";
let nameSpace = "http://www.w3.org/2000/svg";

let grp = document.getElementById("myChart");
let grp2 = document.getElementById("myChart2");
let grp3 = document.getElementById("myChart3");

let dataset = [
    { "name": "first", "value": 0 },
    { "name": "second", "value": 0 },
    { "name": "third", "value": 0 },
    { "name": "fourth", "value": 0 },
    { "name": "fifth", "value": 0 }
  ]
  
let width = 339.18; 
let height = 259.18; 
let padding = 40; 

let VarD3Bar;
let VarD3Line;
let VarD3Bubble;
let xScale;
let yScale;

let chartBar = new Chart(grp, {
    type: 'bar',
    data: {
        labels: ["first", "second", "third", "fourth", "fifth"],
        datasets: [
            {
                label: "Result",
                backgroundColor: "#ffe5ec",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#ffe5f2",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#ffe5f9",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#ffe5ff",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#f9e5ff",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#ffe5ec",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#ece5ff",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#e5e5ff",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#e5ecff",
                data: [0,0,0,0,0]
            },
            {
                backgroundColor: "#e5f2ff",
                data: [0,0,0,0,0]
            }
        ]
    },
    options: {
        
        legend: { 
            display: false 
        },

        scales: {
            yAxes: [{
              barPercentage: 0.5,
              scaleLabel: {
                display: true,
                labelString: "Result",
                fontColor: "#fff5f5"
              },
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#fff5f5",
                min: 0,
                max: 100,
                beginAtZero:true
            }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: "order of calculation",
                fontColor: "#fff5f5"
              },
              ticks: {
                fontColor: "#fff5f5"
            }
            }]
        },
        responsive:false,
        maintainAspectRatio: false
    }
});

let chartLine = new Chart(grp2, {
    type: 'line',
    data: {
        labels: ["first", "second", "third", "fourth", "fifth"],
        datasets: [
            {
                label: "Result",
                borderColor: "#ffe5ec",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#ffe5f2",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#ffe5f9",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#ffe5ff",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#f9e5ff",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#ffe5ec",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#ece5ff",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#e5e5ff",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#e5ecff",
                fill: false,
                data: [0,0,0,0,0]
            },
            {
                borderColor: "#e5f2ff",
                fill: false,
                data: [0,0,0,0,0]
            }
        ]
    },
    options: {
        
        legend: { 
            display: false 
        },

        scales: {
            yAxes: [{
              barPercentage: 0.5,
              scaleLabel: {
                display: true,
                labelString: "Result",
                fontColor: "#fff5f5"
              },
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#fff5f5",
                min: 0,
                max: 100,
                beginAtZero:true
            }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: "order of calculation",
                fontColor: "#fff5f5"
              },
              ticks: {
                fontColor: "#fff5f5"
            }
            }]
        },
        responsive:false,
        maintainAspectRatio: false
    }
});

let chartBubble = new Chart(grp3, {
    type: 'bubble',
    data: {
        labels: ["first", "second", "third", "fourth", "fifth"],
        datasets: [
            {
                backgroundColor: 'rgba(255, 229, 236, 0.5)',
                borderColor: "#ffb3c6",
                data: [{
                    x: 0,
                    y: 50,
                    r: 7.5
                  }]
            },
            {
                backgroundColor: 'rgba(242, 229, 255, 0.5)',
                borderColor: "#d9b3ff",
                data: [{
                    x: 1,
                    y: 60,
                    r: 37.5
                  }]
            },
            {
                backgroundColor: 'rgba(229, 229, 255, 0.5)',
                borderColor: "#b3b3ff",
                data: [{
                    x: 2,
                    y: 66,
                    r: 11
                  }]
            },
            {
                backgroundColor: 'rgba(229, 229, 255, 0.5)',
                borderColor: "#b3b3ff",
                data: [{
                    x: 2,
                    y: 22,
                    r: 27.5
                  }]
            },
            {
                backgroundColor: 'rgba(229, 229, 255, 0.5)',
                borderColor: "#b3b3ff",
                data: [{
                    x: 2.5,
                    y: 85,
                    r: 20
                  }]
            },
            {
                backgroundColor: 'rgba(229, 249, 255, 0.5)',
                borderColor: "#b3ecff",
                data: [{
                    x: 3,
                    y: 40,
                    r: 20
                  }]
            },
            {
                backgroundColor: 'rgba(229, 255, 242, 0.5)',
                borderColor: "#b3ffd9",
                data: [{
                    x: 4,
                    y: 0.5,
                    r: 7.5
                  }]
            },
            {
                backgroundColor: 'rgba(229, 255, 242, 0.5)',
                borderColor: "#b3ffd9",
                data: [{
                    x: 4,
                    y: 20,
                    r: 20
                  }]
            },
            {
                backgroundColor: 'rgba(229, 255, 242, 0.5)',
                borderColor: "#b3ffd9",
                data: [{
                    x: 4,
                    y: 75,
                    r: 35
                  }]
            },
            {
                backgroundColor: 'rgba(255, 229, 229, 0.5)',
                borderColor: "#ffb3b3",
                data: [{
                    x: 5,
                    y: 100,
                    r:7.5
                  }]
            },
        ]
    },
    options: {
        
        legend: { 
            display: false 
        },

        scales: {
            yAxes: [{
              barPercentage: 0.5,
              scaleLabel: {
                display: true,
                labelString: "Result"
              },
              gridLines: {
                display: false
              },
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: "order of calculation"
              },
            }]
        },
        responsive:false,
        maintainAspectRatio: false
    }
});


let billBarData = bb.generate({
    bindto: "#chart1",
    data: {
        type:"bar",
        columns: [
            ["data1", 0, 0, 0, 0, 0],
            ["data2", 0, 0, 0, 0, 0],
            ["data3", 0, 0, 0, 0, 0],
            ["data4", 0, 0, 0, 0, 0],
            ["data5", 0, 0, 0, 0, 0],
            ["data6", 0, 0, 0, 0, 0],
            ["data7", 0, 0, 0, 0, 0],
            ["data8", 0, 0, 0, 0, 0],
            ["data9", 0, 0, 0, 0, 0],
            ["data10", 0, 0, 0, 0, 0]
        ]
    },
    axis: {
        x: {
            label: {
                text: "X-Label",
                position: "outer-center",
            },
        },
        y: {
            label: {
                text: "Y-Label",
                position: "outer-middle"
            }
        },
    },
    color: {
        pattern: [
            "#ffe5ec",
            "#ffe5f2",
            "#ffe5f9",
            "#ffe5ff",
            "#f9e5ff",
            "#ffe5ec",
            "#ece5ff",
            "#e5e5ff",
            "#e5ecff",
            "#e5f2ff"
        ]
      },
    clipPath: true
});

let billAreaData = bb.generate({
    bindto: "#chart2",
    data: {
      type: "spline",
      columns: [
        ["data1", 0, 0, 0, 0, 0],
        ["data2", 0, 0, 0, 0, 0],
        ["data3", 0, 0, 0, 0, 0],
        ["data4", 0, 0, 0, 0, 0],
        ["data5", 0, 0, 0, 0, 0],
        ["data6", 0, 0, 0, 0, 0],
        ["data7", 0, 0, 0, 0, 0],
        ["data8", 0, 0, 0, 0, 0],
        ["data9", 0, 0, 0, 0, 0],
        ["data10", 0, 0, 0, 0, 0]
      ]
    },
    axis: {
        x: {
            label: {
                text: "X-Label",
                position: "outer-center"
            }
        },
        y: {
            label: {
                text: "Y-Label",
                position: "outer-middle"
            }
        }
    },
    color: {
        pattern: [
            "#ffe5ec",
            "#ffe5f2",
            "#ffe5f9",
            "#ffe5ff",
            "#f9e5ff",
            "#ffe5ec",
            "#ece5ff",
            "#e5e5ff",
            "#e5ecff",
            "#e5f2ff"
        ]
      },
  });

let billBubbleData = bb.generate({
    bindto: "#chart3",
    data: {
        columns: [
            ["data1", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data2", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data3", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data4", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data5", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data6", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data7", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data8", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data9", 0.1, 0.1, 0.1, 0.1, 0.1],
            ["data10", 0.1, 0.1, 0.1, 0.1, 0.1]
        ],
        type: "bubble",
        labels: true
    },
    bubble: {
        maxR: 33
    },
    axis: {
        x: {
        type: "category"
        },
        y: {
        max: 100
        }
    },
    color: {
        pattern: [
            "#ffe5ec",
            "#ffe5f2",
            "#ffe5f9",
            "#ffe5ff",
            "#f9e5ff",
            "#ffe5ec",
            "#ece5ff",
            "#e5e5ff",
            "#e5ecff",
            "#e5f2ff"
        ]
      },
});
  

// 그래프를 구성하는 기본요소들(계산기 그림자와, svg태그 생성)을 만드는 클래스 base.
class base {
    constructor() {
        // The ! means "trust me, this is not a null reference"
        this.makeCalBody = document.getElementById('calculatorBody');
        this.getSVG = this.createSVG("Calculator", "svg", "500", "800");
        this.makeCalBody.appendChild(this.getSVG);
    }
    createSVG(c_name, id, width, height) {
        let getSVG = document.createElementNS(nameSpace, "svg");
        getSVG.setAttribute("class", c_name);
        getSVG.setAttribute("id", id);
        getSVG.setAttribute("width", width);
        getSVG.setAttribute("height", height);
        return getSVG;
    }
}
// 계산기 본체를 만드는 클래스 phone.
class phone extends base {
    constructor() {
        // super 의 호출을 포함해야 함.
        super();
        this.makeGROUP = document.createElementNS(nameSpace, "g");
        this.makeGROUP.setAttribute("transform", "translate(11 195)");
        this.makeCHART = document.createElementNS(nameSpace, "g");
        this.makeCHART.setAttribute("transform", "translate(0 200)");
    }
    // 사각형을 기본으로 하는 계산기의 본체 부분을 생성함.
    createIphone(x, y, width, height, id, tag) {
        let getRECT = document.createElementNS(nameSpace, "rect");

        getRECT.setAttribute("rx", "30");
        getRECT.setAttribute("ry", "30");
        getRECT.setAttribute("x", x);
        getRECT.setAttribute("y", y);
        getRECT.setAttribute("width", width);
        getRECT.setAttribute("height", height);
        getRECT.setAttribute("id", id);
        switch (tag) {
            case 0:
                this.getSVG.appendChild(getRECT);
                break;
            case 1:
                this.getSVG.appendChild(this.makeGROUP);
                this.makeGROUP.appendChild(getRECT);
                break;
        }
    }
    // 계산기의 본체의 디테일 부분을 생성함.
    setIphoneDetail(cx, cy, r, id) {
        let getCIRCLE = document.createElementNS(nameSpace, "circle");
        getCIRCLE.setAttribute("cx", cx);
        getCIRCLE.setAttribute("cy", cy);
        getCIRCLE.setAttribute("r", r);
        getCIRCLE.setAttribute("id", id);
        this.getSVG.appendChild(getCIRCLE);
    }
    // 계산기의 버튼 부분을 생성함.
    createButton(x, y, width, onclick, operator) {
        let getBUTTON = document.createElementNS(nameSpace, "circle");
        getBUTTON.setAttribute("cx", x);
        getBUTTON.setAttribute("cy", y);
        getBUTTON.setAttribute("r", width/2);
        getBUTTON.setAttribute("class", "calcButton");
        getBUTTON.setAttribute("onclick", onclick);
        switch (operator) {
            case 0:
                getBUTTON.setAttribute("class", "calcButton");
                break;
            case 1:
                getBUTTON.setAttribute("class", "calcButton btnO");
                break;
        }
        if (onclick == "inputNum('0')") {
            getBUTTON.setAttribute("id", "zero");
        }
        this.makeGROUP.appendChild(getBUTTON);
    }
    // 텍스트를 svg태그로 생성함.
    createText(content, x, y, f_size, onclick, button) {
        let getTEXT = document.createElementNS(nameSpace, "text");
        getTEXT.setAttribute("x", x);
        getTEXT.setAttribute("y", y);
        getTEXT.setAttribute("font-size", f_size);
        getTEXT.innerHTML = content;
        switch (button) {
            case 0:
                // 전역변수 displayId로 설정해준다.
                getTEXT.setAttribute("id", displayId);
                this.makeGROUP.appendChild(getTEXT);
                break;
            case 1:
                getTEXT.setAttribute("class", "calcButtonText");
                getTEXT.setAttribute("onclick", onclick);
                this.makeGROUP.appendChild(getTEXT);
                break;
            case 3:
                getTEXT.setAttribute("class", "labels");
                this.makeCHART.appendChild(getTEXT);
                break;
            case 4:
                getTEXT.setAttribute("class", "label-title");
                this.makeCHART.appendChild(getTEXT);
                break;
        }
    }
}
// 계산된 결과의 그래프 만드는 클래스 svgGraph.
class svgGraph extends phone {
    constructor() {
        super();
        this.makeGraphBody = document.getElementById('graphBody');
        this.getSVG2 = this.createSVG("Calculator", "svg", "750", "800");
    }
    // 그래프를 그릴 축을 생성함.
    createLINE(x1, x2, y1, y2, xy) {
        let makeLINE = document.createElementNS(nameSpace, "line");
        makeLINE.setAttribute("x1", x1);
        makeLINE.setAttribute("x2", x2);
        makeLINE.setAttribute("y1", y1);
        makeLINE.setAttribute("y2", y2);
        if (xy == 0) {
            makeLINE.setAttribute("class", "grid x-grid");
            makeLINE.setAttribute("id", "xGrid");
        }
        else if (xy == 1) {
            makeLINE.setAttribute("class", "grid y-grid");
            makeLINE.setAttribute("id", "yGrid");
        }
        this.makeGraphBody.appendChild(this.getSVG2);
        this.getSVG2.appendChild(this.makeCHART);
        this.makeCHART.appendChild(makeLINE);
    }
    // 그래프의 막대부분을 생성함.
    createBAR(x, y, width, height) {
        let makeBAR = document.createElementNS(nameSpace, "rect");
        makeBAR.setAttribute("x", x);
        makeBAR.setAttribute("y", y);
        makeBAR.setAttribute("width", width);
        makeBAR.setAttribute("height", height);
        makeBAR.setAttribute("class", "jsbar");
        this.makeCHART.appendChild(makeBAR);
    }
}
// global 함수 1) 숫자를 display에 표현하는 함수.
function clearDisplay() {
    let display = document.getElementById(displayId);
    displayNum = "0";
    storedNum = "";
    operation = 0;
    oldOperation = 0;
    display.textContent = displayNum;
}
// global 함수 2) 숫자를 display에 표현하는 함수.
function inputNum(num) {
    let display = document.getElementById(displayId);
    //최초의 값 받기. 0을 입력한 상태에서 계속 0을 입력해도 0만 나오게 출력.
    if (((display.textContent == "") || (display.textContent == "0")) && num == "0") {
        display.textContent = "0";
        return;
    }
    //중간값 결과 출력후 저장되어 있는 값이 있는 상황에서 다음 피연산자값 받기.
    else if ((storedNum != "") && ongoing == true) {
        display.textContent = num;
        ongoing = false;
    }
    //최종 계산된 값을 출력한다.
    else if (calculationFinished == true) {
        display.textContent = num;
        calculationFinished = false;
    }
    //숫자를 연속해서 입력받는다. 단 0일때는 display를 비우고 받는다.
    else if (display.textContent.length < 8) {
        if (display.textContent == "0") {
            display.textContent = "";
        }
        display.style.fontSize = "40px";
        display.textContent += num;
    }
    else if (display.textContent.length >= 8 && display.textContent.length < 13) {
        display.style.fontSize = "31px";
        display.textContent += num;
    }
}
// global 함수 3) 최종 결과를 계산하는 함수.
function calculate() {
    let display = document.getElementById(displayId);
    displayNum = display.textContent;
    let evalDisplay = eval(displayNum), evalStored = eval(storedNum);
    //.toPrecision(3)를 통해 소수점 2자리까지 표현.
    if (operation == 1) {
        displayNum = (evalStored + evalDisplay).toPrecision(3);
    }
    else if (operation == 2) {
        displayNum = (evalStored - evalDisplay).toPrecision(3);
    }
    else if (operation == 3) {
        displayNum = (evalStored * evalDisplay).toPrecision(3);
    }
    else if (operation == 4) {
        displayNum = (evalStored / evalDisplay).toPrecision(3);
    }
    display.textContent = displayNum;
    if (display.textContent.length >= 8 && display.textContent.length < 13) {
        display.style.fontSize = "2em";
        display.textContent = displayNum;
    }
    //연산자를 통해 연산을 할 때.
    if (operation != 0) {
        calculationFinished = true;
    }
    if (displayNum < 111) {
        //계산결과값을 파라미터로 넘겨주자.  
        drawGraph(displayNum);
    }
    else {
        drawGraph("120");
    }

    drawChart(chartBar);
    drawChart(chartLine);
    drawD3(displayNum,barIndex);
    drawD3_Line(displayNum,barIndex);
    drawD3_Bubble(displayNum,barIndex);
    drawBillboard(billBarData);
    drawBillboard(billAreaData);
    drawBillboard(billBubbleData);

    operation = 0;
    oldOperation = 0;
    displayNum = "";
    storedNum = "";
}
// global 함수 4) 연산자 종류에 따라 연산을 진행하는 함수.
function setOperation(command) {
    let display = document.getElementById(displayId), displayNum = display.textContent, evalDisplay = eval(displayNum), evalStored = eval(storedNum);
    //oldoperation이 0일때 즉, 최초의 연산을 진행할때는 디스플레이된 값을 storedNum에 넣는다.   
    if (ongoing == false) {
        if (oldOperation == 0) {
            storedNum = display.textContent;
        }
        //그전에 이미 한번이라도 연산을 진행했다면 oldOperation의 값이 있을 것이고 그것에 대한 중간결과를 내어줌.
        else if (oldOperation == 1) {
            storedNum = (evalStored + evalDisplay);
        }
        else if (oldOperation == 2) {
            storedNum = (evalStored - evalDisplay);
        }
        else if (oldOperation == 3) {
            storedNum = (evalStored * evalDisplay);
        }
    }
    //최초의 연산을 진행한다.
    switch (command) {
        case 'add':
            operation = 1;
            break;
        case 'subtract':
            operation = 2;
            break;
        case 'multiply':
            operation = 3;
            break;
        case 'divide':
            operation = 4;
            break;
    }
    oldOperation = operation;
    display.textContent = storedNum; //중간 계산결과를 저장.
    ongoing = true; //ongoing값을 true로 하여 연산이 현재 진행형임을 밝힘.
}
// global 함수 5) 소수점 입력받는 함수. 소수점을 포함한 문자열에서 뒷부분을 추가함.
function insertDecimal(dec) {
    let display = document.getElementById(displayId);
    for (let i = 0; i < display.textContent.length; i++)
        if (display.textContent.charAt(i) == '.') {
            return;
        }
    display.textContent += dec;
}
// global 함수 6) 그래프를 그리는 함수.
function drawGraph(displayNum) {
    /* calculate()로 인해서 호출되는 drawGraph는
     barIndex를 먼저 체크하여 5개를 넘어섰는지 검사한다. */
    if (barIndex == 5) {
        /*barIndex가 5라는 것은 barData 배열에 데이터가 다 들어섰다는 것이고 pop연산을 통해
        맨 앞의 데이터를 빼준다.*/
        barData.shift();
        barIndex = 4;
    }
    //barData 배열에 결과값으로 넘어온 데이터를 넣어준다.
    barData.push(displayNum);
    let barlist = document.getElementsByClassName('jsbar');
    // 반복문을 진행하면서 막대 그래프를 그려준다.
    for (let i = 0; i <= barIndex; i++) {
        let resultHeight = barData[i] * 4;
        let resultY = 400 - resultHeight;
        barlist[i].setAttribute("y", resultY);
        barlist[i].setAttribute("height", resultHeight);
    }
    //barIndex는 5이상의 값을 가질 필요가 없다. 4이하 일 때만 증가시켜주자.
    if (barIndex <= 4) {
        barIndex += 1;
    }
}

function drawChart(chartBar) {
    console.time("Chart.js Execution Time");
    for (let i = 0; i < barData.length; i++) {
        chartBar.data.datasets[0].data[i] = barData[i];
        chartBar.data.datasets[1].data[i] = barData[i]*Math.random().toPrecision(2);
        chartBar.data.datasets[2].data[i] = barData[i]*Math.random().toPrecision(2);
        chartBar.data.datasets[3].data[i] = barData[i]*Math.random().toPrecision(2);
        chartBar.data.datasets[4].data[i] = barData[i]*Math.random().toPrecision(2);
        chartBar.data.datasets[5].data[i] = barData[i]*Math.random().toPrecision(2);
        chartBar.data.datasets[6].data[i] = barData[i]*Math.random().toPrecision(2);
        chartBar.data.datasets[7].data[i] = barData[i]*Math.random().toPrecision(2);
        chartBar.data.datasets[8].data[i] = barData[i]*Math.random().toPrecision(2);
        chartBar.data.datasets[9].data[i] = barData[i]*Math.random().toPrecision(2);
    }
    chartBar.update();
    let endTime = new Date().getTime();
    console.timeEnd("Chart.js Execution Time");
}

function drawD3(displayNum,barIndex) {

    console.time("D3.js Bar Execution Time");
    if(barIndex<=4) {
        dataset[barIndex-1].value = displayNum;
    }
    
    else if (barIndex == 5) {
        for (let i=0; i<5; i++) {
            dataset[i].value = barData[i];
          }
    }
  
    if (barIndex == 1) {
      VarD3Bar.append("g")
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d) { return xScale(d.name); })
        .attr("y", function(d) { return yScale(d.value); })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) { return height - padding - yScale(d.value); })
        .attr("class", "D3bar");
    }
    else {
      VarD3Bar.selectAll("rect")
        .data(dataset)
        .attr("x", function(d) { return xScale(d.name); })
        .attr("y", function(d) { return yScale(d.value); })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) { return height - padding - yScale(d.value); })
        .attr("class", "D3bar");
    }
    let endTime = new Date().getTime();
    console.timeEnd("D3.js Bar Execution Time");

}

function drawD3_Line(displayNum,barIndex) {

    console.time("D3.js Line Execution Time");
    if(barIndex<=4) {
        dataset[barIndex-1].value = displayNum;
    }
    
    else if (barIndex == 5) {
        for (let i=0; i<5; i++) {
            dataset[i].value = barData[i];
          }
    }

    let line = d3.line()
            .x(function(d) { return xScale(d.name); }) 
            .y(function(d) { return yScale(d.value); }) 
            .curve(d3.curveMonotoneX); 

    if (barIndex == 1) {
        VarD3Line.append("path")
            .datum(dataset)
            .attr("fill", "none")
            .attr("stroke", "#ffe5ec")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 3)
            .attr("d", line)
            .attr("class", "D3Lines");
    }
    else {
        VarD3Line.select(".D3Lines")
            .datum(dataset)
            .attr("fill", "none")
            .attr("stroke", "#ffe5ec")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 3)
            .attr("d", line)
            .attr("class", "D3Lines");
    }
    let endTime = new Date().getTime();
    console.timeEnd("D3.js Line Execution Time");
}

function drawD3_Bubble(displayNum,barIndex) {
    
    console.time("D3.js Bubble Execution Time");
    if(barIndex<=4) {
        dataset[barIndex-1].value = displayNum;
    }
    
    else if (barIndex == 5) {
        for (let i=0; i<5; i++) {
            dataset[i].value = barData[i];
          }
    }

    let dataset2 = [
        { "name": 76, "value": (160*Math.random()+40)},
        { "name": 121, "value": (160*Math.random()+40)},
        { "name": 166, "value": (160*Math.random()+40)},
        { "name": 211, "value": (160*Math.random()+40)},
        { "name": 256, "value": (160*Math.random()+40)}
      ]


    if (barIndex == 1) {
        VarD3Bubble.append("g")
            .selectAll("circle")
            .data(dataset2)
            .enter()
            .append("circle")
            .attr("r", 35*Math.random())
            .attr("transform", function (d) {
                return "translate(" + (d.name) + "," + d.value + ")";
            })
            .attr("class", "D3Bubble");
    }
    else {
        VarD3Bubble.selectAll("circle")
            .data(dataset2)
            .attr("r", 40*Math.random())
            .attr("transform", function (d) {
                return "translate(" + (d.name) + "," + d.value + ")";
            })
            .attr("class", "D3Bubble");
    }
    let endTime = new Date().getTime();
    console.timeEnd("D3.js Bubble Execution Time");
}

function drawBillboard(billData) {
    console.time("Billboard.js Execution Time");
    for (let i = 0; i < barData.length; i++) {
        //*** Number로 형변환을 해주자 ***
        billData.data()[0].values[i].value = Number(barData[i]); 
        billData.data()[1].values[i].value = Number(barData[i]*Math.random()).toPrecision(2);
        billData.data()[2].values[i].value = Number(barData[i]*Math.random()).toPrecision(2); 
        billData.data()[3].values[i].value = Number(barData[i]*Math.random()).toPrecision(2); 
        billData.data()[4].values[i].value = Number(barData[i]*Math.random()).toPrecision(2); 
        billData.data()[5].values[i].value = Number(barData[i]*Math.random()).toPrecision(2); 
        billData.data()[6].values[i].value = Number(barData[i]*Math.random()).toPrecision(2); 
        billData.data()[7].values[i].value = Number(barData[i]*Math.random()).toPrecision(2); 
        billData.data()[8].values[i].value = Number(barData[i]*Math.random()).toPrecision(2); 
        billData.data()[9].values[i].value = Number(barData[i]*Math.random()).toPrecision(2);  
    }
    billData.show();
    let endTime = new Date().getTime();
    console.timeEnd("Billboard.js Execution Time");
}

// Html DOM 컨텐츠 로드와 함께 실행되는 부분.
window.addEventListener('DOMContentLoaded', function () {
    // 오브젝을 생성한다.
    let model = new svgGraph();
    
    model.createIphone("50.5", "-25", "262", "80", "displayPanel", 1);
    model.createText("0", "52", "30", "35", "0", 0);
    model.createButton("82.5", "92.5", "65", "clearDisplay()", 0);
    model.createText("AC", "63", "105", "35", "clearDisplay()", 1);
    model.createButton("148.5", "92.5", "65", "0", 0);
    model.createText("+/-", "127", "105", "35", "0", 1);
    model.createButton("214.5", "92.5", "65", "0", 0);
    model.createText("%", "202", "105", "35", "0", 1);
    model.createButton("280.5", "92.5", "65", "setOperation('divide')", 1);
    model.createText("÷", "269", "107", "40", "setOperation('divide')", 1);
    model.createButton("82.5", "161", "65", "inputNum('1')", 0);
    model.createText("1", "74", "175", "40", "inputNum('1')", 1);
    model.createButton("148.5", "161", "65", "inputNum('2')", 0);
    model.createText("2", "138", "175", "40", "inputNum('2')", 1);
    model.createButton("214.5", "161", "65", "inputNum('3')", 0);
    model.createText("3", "202", "175", "40", "inputNum('3')", 1);
    model.createButton("280.5", "161", "65", "setOperation('add')", 1);
    model.createText("+", "270", "175", "40", "setOperation('add')", 1);
    model.createButton("82.5", "229.5", "65", "inputNum('4')", 0);
    model.createText("4", "74", "243.5", "40", "inputNum('4')", 1);
    model.createButton("148.5", "229.5", "65", "inputNum('5')", 0);
    model.createText("5", "138", "243.5", "40", "inputNum('5')", 1);
    model.createButton("214.5", "229.5", "65", "inputNum('6')", 0);
    model.createText("6", "202", "243.5", "40", "inputNum('6')", 1);
    model.createButton("280.5", "229.5", "65", "setOperation('subtract')", 1);
    model.createText("-", "272", "243.5", "40", "setOperation('subtract')", 1);
    model.createButton("82.5", "298", "65", "inputNum('7')", 0);
    model.createText("7", "74", "312", "40", "inputNum('7')", 1);
    model.createButton("148.5", "298", "65", "inputNum('8')", 0);
    model.createText("8", "138", "312", "40", "inputNum('8')", 1);
    model.createButton("214.5", "298", "65", "inputNum('9')", 0);
    model.createText("9", "202", "312", "40", "inputNum('9')", 1);
    model.createButton("280.5", "298", "65", "setOperation('multiply')", 1);
    model.createText("x", "272", "310", "40", "setOperation('multiply')", 1);
    model.createButton("82.5", "366.5", "65", "inputNum('0')", 0);
    model.createButton("148.5", "366.5", "65", "inputNum('0')", 0);
    model.createText("0", "137", "381", "40", "inputNum('0')", 1);
    model.createButton("214.5", "366.5", "65", "insertDecimal('.')", 0);
    model.createText(".", "209", "381", "40", "insertDecimal('.')", 1);
    model.createButton("280.5", "366.5", "65", "calculate()", 1);
    model.createText("=", "270", "381", "40", "calculate()", 1);
    model.createLINE("90", "90", "-20", "400.5", 0);
    model.createLINE("90", "705", "400", "400", 1);
    model.createBAR("120", "400", "25", "0");
    model.createBAR("250", "400", "25", "0");
    model.createBAR("380", "400", "25", "0");
    model.createBAR("510", "400", "25", "0");
    model.createBAR("640", "400", "25", "0");
    model.createText("first", "120", "420", "10", "0", 3);
    model.createText("second", "250", "420", "10", "0", 3);
    model.createText("third", "380", "420", "10", "0", 3);
    model.createText("fourth", "510", "420", "10", "0", 3);
    model.createText("fifth", "640", "420", "10", "0", 3);
    model.createText("100", "63", "0", "12", "0", 3);
    model.createText("75", "70", "100", "12", "0", 3);
    model.createText("50", "70", "200", "12", "0", 3);
    model.createText("25", "70", "300", "12", "0", 3);
    model.createText("0", "75", "400", "12", "0", 3);
    model.createText("Order of calculation", "330", "460", "12", "0", 4);
    model.createText("RESULT", "10", "190", "12", "0", 4);
    model.createText("Javascript Graph", "320", "-60", "18", "0", 4);

    // D3 graph 생성

    VarD3Bar = d3.select("#D3Bar")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    xScale = d3.scaleBand()
        .rangeRound([padding, width - padding])
        .padding(0.5)
        .domain(dataset.map(function(d) { return d.name; }));

    yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height - padding, padding]);

    VarD3Bar.append("g")
        .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
        .call(d3.axisBottom(xScale));

    VarD3Bar.append("g")
        .attr("transform", "translate(" + padding + "," + 0 + ")")
        .call(d3.axisLeft(yScale));


    VarD3Line = d3.select("#D3Line")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    xScale = d3.scaleBand()
        .rangeRound([padding, width - padding])
        .padding(0.5)
        .domain(dataset.map(function(d) { return d.name; }));

    yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height - padding, padding]);

    VarD3Line.append("g")
        .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
        .call(d3.axisBottom(xScale));

    VarD3Line.append("g")
        .attr("transform", "translate(" + padding + "," + 0 + ")")
        .call(d3.axisLeft(yScale));

    VarD3Bubble = d3.select("#D3Bubble")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    xScale = d3.scaleBand()
        .rangeRound([padding, width - padding])
        .padding(0.5)
        .domain(dataset.map(function(d) { return d.name; }));

    yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height - padding, padding]);

        VarD3Bubble.append("g")
        .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
        .call(d3.axisBottom(xScale));

    VarD3Bubble.append("g")
        .attr("transform", "translate(" + padding + "," + 0 + ")")
        .call(d3.axisLeft(yScale));
});
