import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Job Apply Dates',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [1,2,3,4,5],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => Math.floor(Math.random() * 2000) - 1000),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };


const getCandidatesStatusByDate = (candidates, sta) => {
  const candidatesByDate = {};

  candidates.forEach((candidate) => {
    const { status, statusUpdatedAt } = candidate;

    // Ensure the status is 'applied'
    if (status === sta) {
      const date = new Date(statusUpdatedAt).toISOString().split('T')[0]; // Get the date without time

      if (!candidatesByDate[date]) {
        candidatesByDate[date] = 1;
      } else {
        candidatesByDate[date]++;
      }
    }
  });

  // Convert the candidatesByDate object to an array of objects with date and count properties
  const candidatesApplied = Object.entries(candidatesByDate).map(([date, count]) => ({
    date,
    count,
  }));

  return candidatesApplied;
};



const Linechart = ({ candidates }) => {

  const appliedCandidates = getCandidatesStatusByDate(candidates, 'applied');
  const invitedCandidates = getCandidatesStatusByDate(candidates, 'invited');
  const interviewedCandidates = getCandidatesStatusByDate(candidates, 'interviewed');
  const hiredCandidates = getCandidatesStatusByDate(candidates, 'hired');


  const allCandidates = [
    ...appliedCandidates,
    ...invitedCandidates,
    ...interviewedCandidates,
    ...hiredCandidates,
  ];

  // Retrieve unique dates from the combined array
  const uniqueDates = [...new Set(allCandidates.map((candidate) => candidate.date))];

  // Sort the unique dates in ascending order
  const sortedDates = uniqueDates.sort((a, b) => new Date(a) - new Date(b));

  const getCandidateCountByDate = (candidates, sortedDates) => {
    const candidateCount = [];

    sortedDates.forEach((date) => {
      const candidatesOnDate = candidates.find((candidate) => candidate.date === date);

      if (candidatesOnDate) {
        candidateCount.push(candidatesOnDate.count);
      } else {
        candidateCount.push(0);
      }
    });

    return candidateCount;
  };

  const appliedCandidateCount = getCandidateCountByDate(appliedCandidates, sortedDates);
  const invitedCandidateCount = getCandidateCountByDate(invitedCandidates, sortedDates);
  const interviewedCandidateCount = getCandidateCountByDate(interviewedCandidates, sortedDates);
  const hiredCandidateCount = getCandidateCountByDate(hiredCandidates, sortedDates);




  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // const formattedData = generateGraphData(candidates);
  const labels = sortedDates

  const data = {
    labels,
    datasets: [
      {
        label: 'Applied',
        data: appliedCandidateCount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Invited',
        data: invitedCandidateCount,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Interviewed',
        data: interviewedCandidateCount,
        borderColor: getRandomColor,
        backgroundColor: getRandomColor,
      },
      {
        label: 'Hired',
        data: hiredCandidateCount,
        borderColor: getRandomColor,
        backgroundColor: getRandomColor,
      },
    ],
  };



  return (
    <Line options={options} data={data} />

  )
}
export default Linechart

