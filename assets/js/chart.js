// source

var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
  height:300
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      with:200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector(".source"), options);
chart.render();
// Revenue
var options = {
  series: [{
  name: 'Order',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
  name: 'Earning',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
  name: 'Refund',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector(".Revenue"), options);
chart.render();