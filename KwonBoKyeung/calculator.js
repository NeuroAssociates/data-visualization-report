/* calculator 구현 */
var flag = false;
var dataQueue = [];

function doubleCheck() {
    if (flag) {
        return flag;
    } //flag가 true이면 flag 리턴
    else {
        flag = true;
        return false;
    } //flag가 false이면 true로 바꿔주고 false 리턴
}

function plus() {
    if (doubleCheck()) return;
    document.getElementById('display').textContent += '+';
}

function minus() {
    if (doubleCheck()) return;
    document.getElementById('display').textContent += '-';
}

function multi() {
    if (doubleCheck()) return;
    document.getElementById('display').textContent += '*';
}

function div() {
    if (doubleCheck()) return;
    document.getElementById('display').textContent += '/';
}

function equal() {
    document.getElementById('display').textContent = eval(document.getElementById('display').textContent);
    addDataQueue(document.getElementById('display').textContent);
    displayBar();
    chartBar(calResult1);
    chartBar(calResult2);
    chartBar(calResult3);
    drawBar();
    chartbill();
}

function cal(num) {
    document.getElementById('display').textContent += num;
    flag = false;
}

function clean() {
    document.getElementById('display').textContent = "";
}


/* calculator_svg */
document.addEventListener('DOMContentLoaded', function SVG_cal() {
    var nsSVG = "http://www.w3.org/2000/svg";

    //calculator-model
    var svgCaculator = document.getElementById("svgCalculator");
    var model = document.createElementNS(nsSVG, "svg");
    model.setAttributeNS(null, "width", 350);
    model.setAttributeNS(null, "height", 450);
    model.setAttributeNS(null, "style", "background-color:white;");
    svgCalculator.appendChild(model);

    //calculator-display
    var calDisplay = document.createElementNS(nsSVG, "rect");
    model.appendChild(calDisplay);
    calDisplay.setAttributeNS(null, 'x', 25);
    calDisplay.setAttributeNS(null, 'y', 20);
    calDisplay.setAttributeNS(null, 'width', 300);
    calDisplay.setAttributeNS(null, 'height', 100);
    calDisplay.setAttributeNS(null, 'style', "fill:red; stroke:black; stroke-width: 3;  opacity:0.5;");


    //calculator-textDisplay
    var textDisplay = document.getElementById("display");
    var calText = document.createElementNS(nsSVG, "text");
    model.appendChild(calText);
    calText.setAttributeNS(null, 'id', "display");
    calText.setAttributeNS(null, 'x', 40);
    calText.setAttributeNS(null, 'y', 85);

    //botton-rect
    function buttonRect(x, y, func) {
        var bRect = document.createElementNS(nsSVG, "rect");
        model.appendChild(bRect);
        bRect.setAttributeNS(null, 'x', x);
        bRect.setAttributeNS(null, 'y', y);
        bRect.setAttributeNS(null, 'onclick', func);
        bRect.setAttributeNS(null, 'class', "rButton");
    }

    //create botton rect
    buttonRect("25", "140", "cal('7')");
    buttonRect("103", "140", "cal('8')");
    buttonRect("181", "140", "cal('9')");
    buttonRect("259", "140", "multi()");
    buttonRect("25", "215", "cal('4')");
    buttonRect("103", "215", "cal('5')");
    buttonRect("181", "215", "cal('6')");
    buttonRect("259", "215", "minus()");
    buttonRect("25", "290", "cal('1')");
    buttonRect("103", "290", "cal('2')");
    buttonRect("181", "290", "cal('3')");
    buttonRect("259", "290", "plus()");
    buttonRect("25", "365", "clean()");
    buttonRect("103", "365", "cal('0')");
    buttonRect("181", "365", "equal()");
    buttonRect("259", "365", "div()");

    //button-text
    var buttonText = function buttonText(x, y, func, txt) {
        var bText = document.createElementNS(nsSVG, "text");
        model.appendChild(bText);
        bText.setAttributeNS(null, 'x', x);
        bText.setAttributeNS(null, 'y', y);
        bText.setAttributeNS(null, 'onclick', func);
        bText.textContent = txt;
        bText.setAttributeNS(null, 'class', "tButton");
    }

    //create button text
    buttonText("50", "185", "cal('7')", "7");
    buttonText("130", "185", "cal('8')", "8");
    buttonText("205", "185", "cal('9')", "9");
    buttonText("285", "185", "multi()", "x");
    buttonText("50", "260", "cal('4')", "4");
    buttonText("130", "260", "cal('5')", "5");
    buttonText("205", "260", "cal('6')", "6");
    buttonText("285", "260", "minus()", "-");
    buttonText("50", "335", "cal('1')", "1");
    buttonText("130", "335", "cal('2')", "2");
    buttonText("205", "335", "cal('3')", "3");
    buttonText("280", "333", "plus()", "+");
    buttonText("50", "410", "clean()", "C");
    buttonText("130", "410", "cal('0')", "0");
    buttonText("205", "410", "equal()", "=");
    buttonText("285", "410", "div()", "/");

});


/* graph 구현 */
function addDataQueue(result) {
    if (dataQueue.length < 5) {
        dataQueue.push(result);
    }
    else {
        dataQueue.shift();
        dataQueue.push(result);
    }
}

function displayBar() {
		var bar = document.getElementsByClassName("bar");

		for (var i = 0; i < dataQueue.length; ++i) {
			bar[i].setAttribute('y' , 430 - 4.5 * dataQueue[i]);
			bar[i].setAttribute('height', 4.5 * dataQueue[i]);
		}
}

/* graph_svg 구현 */
document.addEventListener('DOMContentLoaded', function SVG_graph() {
    var nsSVG = "http://www.w3.org/2000/svg";

    var svgGraph = document.getElementById("svgGraph");

    var pane = document.createElementNS(nsSVG, "svg");
    pane.setAttributeNS(null, "width", 450);
    pane.setAttributeNS(null, "height", 450);
    svgGraph.appendChild(pane);

    //axis line function
    function gLine(a, b, c, d) {
        var line = document.createElementNS(nsSVG, "line");
        pane.appendChild(line);
        line.setAttributeNS(null, 'x1', a);
        line.setAttributeNS(null, 'x2', b);
        line.setAttributeNS(null, 'y1', c);
        line.setAttributeNS(null, 'y2', d);
        line.setAttributeNS(null, 'style', "stroke:black;stroke-width:4");
    }

    //create axis line
    gLine("24", "430", "430", "430");
    gLine("25", "25", "10", "431");

    //axis text function
    function axisT(x, y, txt, rot) {
        var axisText = document.createElementNS(nsSVG, "text");
        pane.appendChild(axisText);
        axisText.setAttributeNS(null, 'x', x);
        axisText.setAttributeNS(null, 'y', y);
        axisText.textContent = txt;
        axisText.setAttributeNS(null, 'transform', rot)
        axisText.setAttributeNS(null, 'style', "text-anchor: middle");
    }

    //create axis text
    axisT("80", "445", "1st");
    axisT("155", "445", "2nd");
    axisT("230", "445", "3rd");
    axisT("305", "445", "4th");
    axisT("380", "445", "5th");

    axisT("10", "430", "0");
    axisT("10", "390", "10");
    axisT("10", "350", "20");
    axisT("10", "310", "30");
    axisT("10", "270", "40");
    axisT("10", "230", "50");
    axisT("10", "190", "60");
    axisT("10", "150", "70");
    axisT("10", "110", "80");
    axisT("10", "70", "90");
    axisT("10", "30", "100");

    //result_bar function
    function bar(x, y, color) {
        var barResult = document.createElementNS(nsSVG, "rect");
        pane.appendChild(barResult);
        barResult.setAttributeNS(null, 'x', x);
        barResult.setAttributeNS(null, 'y', y);
        barResult.setAttributeNS(null, 'width', "50");
        barResult.setAttributeNS(null, 'height', "0");
        barResult.setAttributeNS(null, 'class', "bar");
        barResult.setAttributeNS(null, 'fill', color);
    }


    //create result_bar
    bar(60, 430, 'rgba(255, 99, 132, 0.5)')
    bar(130, 430, 'rgba(54, 162, 235, 0.5)');
    bar(210, 430, 'rgba(255, 206, 86, 0.5)');
    bar(280, 430, 'rgba(75, 192, 192, 0.5)');
    bar(355, 430, 'rgba(153, 102, 255, 0.5)');


});
