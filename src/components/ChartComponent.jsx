// src/components/ChartComponent.js
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import './ChartComponent.css';

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement, 
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const barData = {
    labels: ['Disasters', 'Power Cuts', 'Water supply'],
    datasets: [
      {
        label: 'Complaints',
        data: [150, 200, 100],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      },
    ],
  };

  const pieData = {
    labels: ['Disasters', 'Power Cuts', 'Water supply'],
    datasets: [
      {
        data: [150, 200, 100],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Complaint Resolved',
        data: [50, 100, 150, 200, 250],
        fill: false,
        borderColor: '#2196f3',
        tension: 0.1,
      },
    ],
  };

  return (
    
    <div className="dashboard">
      <div className="chart-section">
        <h2 className="chart-title">Bar Chart - Complaints</h2>
        <div className="chart-wrapper">
          <Bar data={barData} />
        </div>
      </div>

      <div className="chart-section">
        <h2 className="chart-title">Pie Chart - Complaints</h2>
        <div className="chart-wrapper">
          <Pie data={pieData} />
        </div>
      </div>

      <div className="chart-section">
        <h2 className="chart-title">Line Chart - Monthly Complaints Resolved</h2>
        <div className="chart-wrapper">
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
