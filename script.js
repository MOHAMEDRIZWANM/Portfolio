
var barChartData = {
  labels: ["WebDevelopment","MachineLearning","PowerBi","Tableau","Node","React","C/Java","R","Figma"],
  datasets: [{
      label: 'Level of Knowledge',
      backgroundColor: ["#0000ff","#3366ff","#6666ff","#9966ff","#cc33ff","#ff00ff","#ff33cc","#ff3399","#ff6666"],
      borderColor: 'black',    
      borderWidth: 1,
      data: [90,80,85,80,75,70,75,55,90],
  }]
};

var ctx = document.getElementById('myBarChart').getContext('2d');

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: barChartData,
  options: {
      responsive: true,
      scales: {
          x: {
              type: 'category',
              position: 'bottom',
              ticks: {
                  font: {
                      size: 20,
                  },
                  color: 'black',
              },
          },
          y: {
              beginAtZero: true,
          },
      },
  },
});