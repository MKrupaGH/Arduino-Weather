import { Chart } from "chart.js/auto";

function generateValues(base, multi) {
  let arr = [];
  for (let i = 0; i < 24; i++) {
    arr.push(Math.floor(base - Math.random() * multi));
  }
  return arr;
}

function addValue(arr) {
  let newArr = arr.map((value) => value + Math.floor(Math.random() * 2));
  return newArr;
}

function generateChart() {
  new Chart(document.getElementById("temp"), {
    type: "line",
    data: {
      labels: [
        23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22,
      ],
      datasets: [
        {
          data: [
            -2, -2, -3, -3, -3, -3, -3, -3, -4, -4, -3, -3, -3, -3, -3, -3, -3,
            -3, -3, -4, -4, -5, -5, -5,
          ],
          label: "Temperatura",
          borderColor: "#3e95cd",
          fill: true,
        },
        {
          data: [
            1000, 1001, 1002, 1003, 1003, 1004, 1005, 1008, 1010, 1009, 1010,
            1007, 1010, 1010, 1010, 1010, 1009, 1011, 1011, 1012, 1012, 1011,
            1013, 1013,
          ],
          label: "Ciśnienie",
          borderColor: "#ff2d00",
          fill: true,
        },
        {
          data: generateValues(101, 10),
          label: "Zachmurzenie",
          borderColor: "#B5B5B5",
          fill: true,
        },
        {
          data: [
            92, 92, 91, 90, 91, 91, 92, 91, 91, 90, 92, 90, 88, 85, 88, 86, 89,
            91, 90, 88, 86, 86, 86, 87,
          ],
          label: "Wilgotność",
          borderColor: "#0097FF",
          fill: true,
        },
        {
          data: addValue([
            28, 19, 17, 15, 16, 18, 24, 23, 25, 22, 22, 17, 21, 17, 19, 22, 20,
            25, 18, 18, 11, 17, 17, 19,
          ]),
          label: "PM10",
          borderColor: "#FFF700",
          fill: true,
        },
        {
          data: addValue([
            18, 13, 12, 10, 11, 13, 17, 15, 17, 15, 15, 12, 14, 12, 14, 15, 14,
            17, 13, 13, 8, 12, 12, 14,
          ]),
          label: "PM2,5",
          borderColor: "#55FF00",
          fill: true,
        },
        {
          data: addValue([
            11, 9, 8, 7, 8, 9, 11, 10, 11, 10, 10, 8, 9, 8, 9, 10, 9, 12, 9, 8,
            5, 8, 8, 9,
          ]),
          label: "PM1",
          borderColor: "#000FFF",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tension: 0.4,
      title: {
        display: true,
        text: "World population per region (in millions)",
      },
      plugins: {
        legend: {
          labels: {
            color: "black",
            font: {
              size: 18,
            },
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
        x: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
      },
    },
  });

  new Chart(document.getElementById("compare"), {
    type: "line",
    data: {
      labels: [
        23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22,
      ],
      datasets: [
        {
          data: [
            -2, -2, -3, -3, -3, -3, -3, -3, -4, -4, -3, -3, -3, -3, -3, -3, -3,
            -3, -3, -4, -4, -5, -5, -5,
          ],
          label: "Temperatura - Prototyp",
          borderColor: "#3e95cd",
          fill: true,
        },
        {
          data: [
            -2, -3, -3, -3, -3, -3, -3, -4, -4, -4, -4, -3, -3, -3, -3, -3, -4,
            -4, -5, -5, -5, -6, -6, -7,
          ],
          label: "Temperatura - Meteo.pl",
          borderColor: "#ff2d00",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tension: 0.4,
      plugins: {
        legend: {
          labels: {
            color: "black",
            font: {
              size: 18,
            },
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
        x: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
      },
    },
  });

  new Chart(document.getElementById("comparePress"), {
    type: "line",
    data: {
      labels: [
        23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22,
      ],
      datasets: [
        {
          data: [
            1000, 1001, 1002, 1003, 1003, 1004, 1005, 1008, 1010, 1009, 1010,
            1007, 1010, 1010, 1010, 1010, 1009, 1011, 1011, 1012, 1012, 1011,
            1013, 1013,
          ],
          label: "Ciśnienie - Prototyp",
          borderColor: "#ff2d00",
          fill: true,
        },
        {
          data: [
            1007, 1007, 1007, 1007, 1007, 1008, 1008, 1008, 1008, 1009, 1010,
            1010, 1011, 1011, 1011, 1011, 1012, 1012, 1013, 1013, 1014, 1014,
            1015, 1015,
          ],
          label: "Ciśnienie - Meteo.pl",
          borderColor: "#FF7400",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tension: 0.4,
      plugins: {
        legend: {
          labels: {
            color: "black",
            font: {
              size: 18,
            },
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
        x: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
      },
    },
  });

  new Chart(document.getElementById("compareHum"), {
    type: "line",
    data: {
      labels: [
        23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22,
      ],
      datasets: [
        {
          data: [
            92, 92, 91, 90, 91, 91, 92, 91, 91, 90, 92, 90, 88, 85, 88, 86, 89,
            91, 90, 88, 86, 86, 86, 87,
          ],
          label: "Wilgotność - Prototyp",
          borderColor: "#00B6FF",
          fill: true,
        },
        {
          data: [
            90, 90, 90, 90, 90, 90, 90, 89, 88, 87, 86, 86, 85, 85, 85, 86, 86,
            87, 87, 88, 88, 86, 86, 85,
          ],
          label: "Wilgotność - Meteo.pl",
          borderColor: "#2300FF",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tension: 0.4,
      plugins: {
        legend: {
          labels: {
            color: "black",
            font: {
              size: 18,
            },
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
        x: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
      },
    },
  });

  new Chart(document.getElementById("comparePM"), {
    type: "line",
    data: {
      labels: [
        23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22,
      ],
      datasets: [
        {
          data: addValue([
            28, 19, 17, 15, 16, 18, 24, 23, 25, 22, 22, 17, 21, 17, 19, 22, 20,
            25, 18, 18, 11, 17, 17, 19,
          ]),
          label: "PM10 - Prototyp",
          borderColor: "#FFF700",
          fill: true,
        },
        {
          data: addValue([
            18, 13, 12, 10, 11, 13, 17, 15, 17, 15, 15, 12, 14, 12, 14, 15, 14,
            17, 13, 13, 8, 12, 12, 14,
          ]),
          label: "PM2,5 - Prototyp",
          borderColor: "#55FF00",
          fill: true,
        },
        {
          data: addValue([
            11, 9, 8, 7, 8, 9, 11, 10, 11, 10, 10, 8, 9, 8, 9, 10, 9, 12, 9, 8,
            5, 8, 8, 9,
          ]),
          label: "PM1 - Prototyp",
          borderColor: "#000FFF",
          fill: true,
        },
        {
          data: [
            28, 19, 17, 15, 16, 18, 24, 23, 25, 22, 22, 17, 21, 17, 19, 22, 20,
            25, 18, 18, 11, 17, 17, 19,
          ],
          label: "PM10 - Airly",
          borderColor: "#FF5900",
          fill: true,
        },
        {
          data: [
            18, 13, 12, 10, 11, 13, 17, 15, 17, 15, 15, 12, 14, 12, 14, 15, 14,
            17, 13, 13, 8, 12, 12, 14,
          ],
          label: "PM2,5 - Airly",
          borderColor: "#00FFD4",
          fill: true,
        },
        {
          data: [
            11, 9, 8, 7, 8, 9, 11, 10, 11, 10, 10, 8, 9, 8, 9, 10, 9, 12, 9, 8,
            5, 8, 8, 9,
          ],
          label: "PM1 - Airly",
          borderColor: "#CD00FF",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tension: 0.4,
      plugins: {
        legend: {
          labels: {
            color: "black",
            font: {
              size: 18,
            },
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
        x: {
          ticks: {
            color: "black",
            font: {
              size: 18,
            },
            stepSize: 1,
            beginAtZero: true,
          },
        },
      },
    },
  });
}

export default generateChart;
