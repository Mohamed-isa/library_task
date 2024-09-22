import { Component, OnInit } from '@angular/core';
import { Chart ,registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables,ChartDataLabels);
Chart.register();

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chart: any;
  newStationPie!: any[];
    newCustomerBar!: { month: string; Total: number; }[];
    stationDetail!:any;
    stationPie: any;
    unitConsumed!: { label: string; value: number; }[];
    chargerDataArray!: { label: string; value: number; }[];
  constructor() { }

  ngOnInit(): void {
    this.Bookbarchart();
    this.BookpieChart();
  }

  Bookbarchart(): void {
    this.newStationPie = [
      { label: 'Sam', value: 50 },
      { label: 'Ashwin', value: 60 },
      { label: 'Prabu', value: 40 },
      { label: 'Kumar', value: 70 },
      { label: 'Stella', value: 80 },
    ];
  
    const chartLabels = this.newStationPie.map(item => item.label);
    const chartData = this.newStationPie.map(item => item.value);
  
    const linechartCanvas = document.getElementById('lineChart') as HTMLCanvasElement;
    const linechartCtx = linechartCanvas.getContext('2d');
  
    if (linechartCtx) {
      this.chart = new Chart(linechartCtx, {
        type: 'bar',
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: 'No Of Books',
              data: chartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 159, 64, 0.8)',
              ],
              borderColor: ['#fff'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: { size: 8 },
                boxWidth: 15,
                padding: 10,
                usePointStyle: true,
              },
            },
          },
          scales: {
            x: {
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
  

  BookpieChart(): void {
    this.stationPie = [
      { label: 'Science', value: 30 },
      { label: 'Math', value: 50 },
      { label: 'History', value: 40 },
      { label: 'Literature', value: 60 },
      { label: 'Geography', value: 70 },
    ];
  
    const chartLabels = this.stationPie.map((item: { label: any; }) => item.label);
    const chartData = this.stationPie.map((item: { value: any; }) => item.value);
  
    const piechartCanvas = document.getElementById('stationchart') as HTMLCanvasElement;
    const piechartCtx = piechartCanvas.getContext('2d');
  
    if (piechartCtx) {
      this.stationDetail = new Chart(piechartCtx, {
        type: 'pie',
        data: {
          labels: chartLabels,
          datasets: [
            {
              data: chartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 159, 64, 0.8)',
              ],
              borderColor: ['#fff'],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: { size: 10 },
                boxWidth: 15,
                padding: 10,
                usePointStyle: true,
              },
            },
          
          },
        },
      });
    }
  }
  
}