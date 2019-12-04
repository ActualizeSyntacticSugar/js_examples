document.addEventListener("DOMContentLoaded", function() {
  var myChart = Highcharts.chart("container", {
    chart: {
      type: "bar"
    },
    title: {
      text: "Fruit Consumption"
    },
    xAxis: {
      categories: ["Grant", "Bananas", "Oranges"]
    },
    yAxis: {
      title: {
        text: "Fruit eaten"
      }
    },
    series: [
      {
        name: "Jane",
        data: [100, 0, 4]
      },
      {
        name: "John",
        data: [5, 7, 3]
      }
    ]
  });
});
