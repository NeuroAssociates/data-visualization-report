document.addEventListener('DOMContentLoaded', function () {
  console.time("Billboard Execution Time");
  bb.generate({
    data: {
      columns: [
        ["First", 30, 200, 100, 400, 150, 250],
        ["Second", 50, 20, 10, 40, 15, 25],
        ["Third", 60, 10, 50, 70, 40, 20]
      ]
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billLine"
  });

  bb.generate({
    data: {
      columns: [
        ["First", 30, 200, 100, 400, 150, 250],
          ["Second", 50, 20, 10, 40, 15, 25],
        ["Third", 60, 10, 50, 70, 40, 20]
      ],
      type: "bar"
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billBar"
  });

  bb.generate({
    data: {
      columns: [
        ["First", 30],
        ["Second", 50],
        ["Third", 60]
      ],
      type: "pie"
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billPie"
  });

  bb.generate({
    data: {
      x: "x",
      columns: [
      	["x", "Data A", "Data B", "Data C", "Data D", "Data E"],
        ["First", 30, 200, 100, 200, 150],
        ["Second", 50, 20, 10, 40, 15],
        ["Third", 60, 10, 50, 70, 40]
      ],
      type: "radar",
      labels: true
    },
    radar: {
      axis: {
        max: 200
      },
      level: {
        depth: 4
      }
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billRader"
  });

  bb.generate({
    data: {
      columns: [
        ["First", 30],
        ["Second", 50],
        ["Third", 60]
      ],
      type: "donut",
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billDount"
  });

  bb.generate({
    data: {
      xs: {
        First_x: "First",
        Second_x: "Second"
      },
      columns: [
      	["First", 3.5, 3, 3.2, 3.1, 3.6, 3.9],
        ["Second", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8],
      	["First_x", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3],
      	["Second_x", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6]
      ],
      type: "scatter"
    },
    axis: {
      x: {
        label: "Sepal.Width",
        tick: {
          fit: false
        }
      },
      y: {
        label: "Petal.Width"
      }
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billScatter"
  });


  console.timeEnd("Billboard Execution Time");
});
