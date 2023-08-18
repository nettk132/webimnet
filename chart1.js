const ctx = document.getElementById('barchart');
        
const barchart =new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['มัธยมศึกษาตอนปลาย 4','มัธยมศึกษาตอนปลาย 5','มัธยมศึกษาตอนปลาย 6','ปี1 เทอม 1', 'ปี1 เทอม 2'],
    datasets: [{
      label: 'เกรด',
      data: [3.43,3.94,3.84,3.74,3.62,3.08],
      backgroundColor: [
        'rgba(255, 99, 132,0.7)',
        'rgba(255, 159, 64,0.7)',
        'rgba(255, 205, 86,0.7)',
        'rgba(75, 192, 192,0.7)',
        'rgba(54, 162, 235,0.7)',
        'rgba(153, 102, 255,0.7)',
        'rgba(201, 203, 207,0.7)',
      ],
      backgroundColor: [
        'rgba(255, 99, 132,0.7)',
        'rgba(255, 159, 64,0.7)',
        'rgba(255, 205, 86,0.7)',
        'rgba(75, 192, 192,0.7)',
        'rgba(54, 162, 235,0.7)',
        'rgba(153, 102, 255,0.7)',
        'rgba(201, 203, 207,0.7)',
      ],
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});