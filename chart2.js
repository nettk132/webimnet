const ctx2 = document.getElementById('doughnut');
        
const doughnut =new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['java', 'css', 'html', 'python'],
    datasets: [{
      label: 'ความสามารถ',
      data: [10,30,45,15],
      backgroundColor: [
        'rgb(255, 112, 119,0.7)',
        'rgb(255, 146, 62,0.7)',
        'rgb(95, 146, 62,0.7)',
        'rgb(255, 205, 86)'
      ],
      backgroundColor: [
        'rgb(255, 112, 119,0.7)',
        'rgb(255, 146, 62,0.7)',
        'rgb(95, 146, 62,0.7)',
        'rgb(255, 205, 86)'
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