import Chart from "chart.js/auto";
import '@pnotify/core/dist/BrightTheme.css';


const keys = ["Enter", "Escape", "Space", "ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];

const keyText = document.querySelector("#key");

document.addEventListener("keypress", (e) => e.preventDefault());

let index = Math.round(Math.random() * 2);
keyText.textContent = keys[index];

document.addEventListener("keydown", (e) => {
  if (e.code === keys[index]) {
    PNotify.success({
      text: "Це вірна клавіша",
      delay: 250
    });
  } else {
    PNotify.error({
      text: "Це на вірна клавіша",
      delay: 250
    });
  }

  index = Math.round(Math.random() * (keys.length - 1));
  keyText.textContent = keys[index];
});


const ctx = document.querySelector("#chart");

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const salesChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  layout: {
    width: 100,
    height: 300
  }
});