function CreateSVG () {
            var xmlns = "http://www.w3.org/2000/svg";
            var svgContainer = document.getElementById ("svgContainer");
            var svgElem = document.createElementNS (xmlns, "svg");
            svgContainer.appendChild (svgElem);
            svgElem.setAttributeNS (null, "width", "360");
            svgElem.setAttributeNS (null, "height", "500");
            svgElem.setAttributeNS (null, "text-align", "center");

            var calculBack = document.createElementNS (xmlns, "rect");
            svgElem.appendChild (calculBack);
            calculBack.setAttributeNS (null, 'class', "calculBack");
            calculBack.setAttributeNS (null, 'width', "360");
            calculBack.setAttributeNS (null, 'height', "470");

            var calculPanel = document.createElementNS (xmlns, "g");
            svgElem.appendChild (calculPanel);
            calculPanel.setAttributeNS (null, 'class', "calculPanel");

            var displayBox =  document.createElementNS (xmlns, "rect");
            calculPanel.appendChild (displayBox);
            displayBox.setAttributeNS (null, 'class', "displayBox");
            displayBox.setAttributeNS (null, 'width', "300");
            displayBox.setAttributeNS (null, 'height', "70");

            var displayScreen = document.createElementNS (xmlns, "text");
            calculPanel.appendChild (displayScreen);
            displayScreen.setAttributeNS (null, 'id', "display");
            displayScreen.setAttributeNS (null, 'x', "60");
            displayScreen.setAttributeNS (null, 'y', "50");

            var button = document.createElementNS (xmlns, "g");
            svgElem.appendChild (button);
            button.setAttributeNS (null, 'class', "button");

            function createButton (rx, ry, tx, ty, func, t) {
                var varRect = document.createElementNS (xmlns, "rect");
                var varText = document.createElementNS (xmlns, "text");
                button.appendChild (varRect);
                button.appendChild (varText);
                varRect.setAttributeNS (null, 'x', rx);
                varRect.setAttributeNS (null, 'y', ry);
                varRect.setAttributeNS (null, 'class', "textRec");
                varRect.setAttributeNS (null, 'width', "60");
                varRect.setAttributeNS (null, 'height', "60");
                varRect.setAttributeNS (null, 'onclick', func);
                varText.setAttributeNS (null, 'x', tx);
                varText.setAttributeNS (null, 'y', ty);
                varText.setAttributeNS (null, 'class', "textButton");
                varText.setAttributeNS (null, 'onclick', func);
                varText.innerHTML = t;
            }

            createButton ("35", "95", "57", "130", 'clearNumDisplay("")', 'C');
            createButton ("110", "95", "132", "130", 'operNum("%")', '%');
            createButton ("185", "95", "212", "130", 'operNum("/")', '/');
            createButton ("260", "95", "287", "130", 'addNumDisplay(".")', '.');
            createButton ("35", "165", "59", "202", 'addNumDisplay("7")', '7');
            createButton ("110", "165", "134", "202", 'addNumDisplay("8")', '8');
            createButton ("185", "165", "210", "202", 'addNumDisplay("9")', '9');
            createButton ("260", "165", "286", "202", 'operNum("*")', '*');
            createButton ("35", "235", "59", "270", 'addNumDisplay("4")', '4');
            createButton ("110", "235", "134", "270", 'addNumDisplay("5")', '5');
            createButton ("185", "235", "210", "270", 'addNumDisplay("6")', '6');
            createButton ("260", "235", "286", "270", 'operNum("-")', '-');
            createButton ("35", "305", "59", "340", 'addNumDisplay("1")', '1');
            createButton ("110", "305", "134", "340", 'addNumDisplay("2")', '2');
            createButton ("185", "305", "210", "340", 'addNumDisplay("3")', '3');
            createButton ("260", "305", "284", "340", 'operNum("+")', '+');
            createButton ("35", "375", "59", "410", 'addNumDisplay("0")', '0');
            createButton ("110", "375", "134", "410", 'operNum("=")', '=');
            // 115 380 210 410
            // var equalButton = document.getElementsByClassName("textRec")[17];
            // equalButton.setAttributeNS(null, "width", "200");

            //draw GRAPH
            var graphContainer = document.getElementById ("svgContainer");
            var svgGraph = document.createElementNS (xmlns, "svg");
            graphContainer.appendChild (svgGraph);
            svgGraph.setAttributeNS (null, 'width', "900");
            svgGraph.setAttributeNS (null, 'height', "430");

            var axisLine = document.createElementNS (xmlns, "path");
            svgGraph.appendChild (axisLine);
            axisLine.setAttributeNS (null, 'd', "M100 30 L100 380 L800 380");
            axisLine.setAttributeNS (null, 'stroke', "black");
            axisLine.setAttributeNS (null, 'fill', "none");

            var gridLine = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (gridLine);
            gridLine.setAttributeNS (null, 'class', "grid");

            function makeLine (makeClassName, x1, x2, y1, y2){
              var varLine = document.createElementNS (xmlns, "line");
              gridLine.appendChild (varLine);
              varLine.setAttributeNS (null, 'class', makeClassName);
              varLine.setAttributeNS (null, 'x1', x1);
              varLine.setAttributeNS (null, 'x2', x2);
              varLine.setAttributeNS (null, 'y1', y1);
              varLine.setAttributeNS (null, 'y2', y2);
            }

            makeLine("xGridLine", 226.6,226.6,30,380);
            makeLine("xGridLine", 343.2,343.2,30,380);
            makeLine("xGridLine", 460.2,460.2,30,380);
            makeLine("xGridLine", 576.6,576.6,30,380);
            makeLine("xGridLine", 693.3,693.3,30,380);
            makeLine("yGridLine", 100,800,88.3,88.3);
            makeLine("yGridLine", 100,800,146.6,146.6);
            makeLine("yGridLine", 100,800,205,205);
            makeLine("yGridLine", 100,800,263.3,263.3);
            makeLine("yGridLine", 100,800,321.6,321.6);

            var xyLabel = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (xyLabel);
            xyLabel.setAttributeNS (null, 'class', "xyLabel");

            function makeLabel (makeClassName, x, y, t){
              var varText = document.createElementNS (xmlns, "text");
              xyLabel.appendChild (varText);
              varText.setAttributeNS (null, 'class', makeClassName);
              varText.setAttributeNS (null, 'x', x);
              varText.setAttributeNS (null, 'y', y);
              varText.innerHTML = t;
            }

            makeLabel("xLabel", 213, 410, "First");
            makeLabel("xLabel", 318, 410, "Second");
            makeLabel("xLabel", 442, 410, "Third");
            makeLabel("xLabel", 554, 410, "Fourth");
            makeLabel("xLabel", 680, 410, "Fifth");
            makeLabel("yLabel", 60, 30, "120");
            makeLabel("yLabel", 60, 88.3, "100");
            makeLabel("yLabel", 60, 146.6, "80");
            makeLabel("yLabel", 60, 205, "60");
            makeLabel("yLabel", 60, 263.3, "40");
            makeLabel("yLabel", 60, 321.6, "20");
            makeLabel("yLabel", 60, 380, "0");
            makeLabel("Results", 5, 50, "Results");

            var fifthBar = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (fifthBar);

            function makeBar (x, y){
              var varBar = document.createElementNS (xmlns, "rect");
              fifthBar.appendChild (varBar);
              varBar.setAttributeNS (null, 'class', "recBar");
              varBar.setAttributeNS (null, 'x', x);
              varBar.setAttributeNS (null, 'y', y);
              varBar.setAttributeNS (null, 'width', "40");
              varBar.setAttributeNS (null, 'height', "0");
            }

            makeBar(206.6, 380);
            makeBar(323.2, 380);
            makeBar(440, 380);
            makeBar(556.6, 380);
            makeBar(673.3, 380);

}
