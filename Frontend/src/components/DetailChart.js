import React, { Component } from "react";
import Chart from "chart.js/auto";

export default class DetailChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Sunday", "Monday", "Tuesday"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "white",
              font: {
                size: 20,
              },
            },
          },
        },
      },
    });
  }
  render() {
    return (
      <div
        style={{
          width: "40%",
          margin: "auto",
          marginBlock: "4%",
        }}
      >
        <canvas
          id="myChart"
          ref={this.chartRef}
          style={{ borderStyle: "solid", borderColor: "white", padding: "2%" }}
        />
      </div>
    );
  }
}
