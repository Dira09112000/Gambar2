import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  
  const Visitors = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: false,
          text: "",
        },
      },
    };
  
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
    const data = {
      labels,
      datasets: [
        {
          label: "",
          data: ["48.000", "47.500", "47.000", "46.500", "46.000"],
          borderColor: "#6464D9",
          fill: true,
          backgroundColor: "yellow",
        },
      ],
    };
  
    return(
      <Bar options={options} data={data} />
    );
  };
  export default Visitors;
  