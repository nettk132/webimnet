const ctx4 = document.getElementById('radar');
        
const radar =new Chart(ctx4, {
  type: 'radar',
  data: {
    labels: [
      'Japanese',
      'English',
      'Spanish',
      'French',
      'Lao',
      'Thailand',
      
    ],
    datasets:  [{
      label: 'ม.ปลาย',
      data: [60, 40, 10, 10, 80, 100],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: 'มหาลัย',
      data: [70, 50, 0, 0, 60, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  },
});
