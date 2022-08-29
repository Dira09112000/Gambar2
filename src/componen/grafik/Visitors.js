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
        display:false,
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
        data: [1100,950,2400,1700,600,1300,1050],
        borderColor: "purple",
        fill: true,
        backgroundColor: "#6C49CD",
        tension :0.3,
        borderRadius:10,
        barThickness: 15,
      },
    ],
  };

  return (
    <Bar options={options} data={data} height={250}/>
  )
};
export default Visitors;
