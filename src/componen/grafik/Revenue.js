import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
const Revenue = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  };

  const data = {
    labels: ["10AM", "1PM", "4PM", "7PM", "10PM", "1AM", "4AM", "7AM", "10AM"],
    datasets: [
      {
        fill: true,
        tension: 0.1,
        pointRadius: 0,
        pointBackgroundColor: "purple",
        fillColor: "rgba(250,174,50,0.5)",
        strokeColor: "#ff6c23",
        pointColor: "#fff",
        pointStrokeColor: "#ff6c23",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#ff6c23",
        backgroundColor: "purple",
        borderWidth: 2,
        borderColor: "blue",
        fill: {
          target: "origin",
          above: "rgb(227, 229, 249)", // Area will be red above the origin
        },

        data: [
          48879, 48773, 46538, 48762, 46903, 47595, 46818, 47561, 47636, 48307,
          46257, 47676, 46980, 46340, 48994, 47960, 48975, 46139, 47085, 47852,
          46656, 46248, 47050, 47354, 46331, 47364, 46375, 46968, 47116, 47145,
          46598, 46365, 46544, 46265, 47149, 46887, 46816, 47331, 46584, 47715,
          46474, 46437, 46354, 46409, 46792, 46552, 47755, 46504, 46670, 47210,
          47293, 46305, 47436, 46556, 47107, 47123, 47637, 47213, 47851, 46307,
          46384, 47489, 46452, 46601, 47238, 47624, 46150, 47934, 46532, 46818,
          46388, 46472, 47241, 46162, 47833, 46341, 47313, 46515, 46612, 47151,
          47929, 46890, 47168, 46999, 46456, 47737, 47235, 46498, 46511, 46311,
          47203, 47529, 47775, 47128, 46532, 46712, 46195, 46820, 46710, 46292,
          46788, 46025, 47969, 46071, 46657, 47782, 46414, 46148, 46436, 47793,
          47780, 46149, 47078, 46815, 46308, 46803, 46514, 46084, 46637,
        ],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Revenue;
