import React, { useEffect, useState } from "react";
import "./style.scss";
import { csv } from "d3";
import { Line } from "react-chartjs-2";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css";
import { ReactTabulator } from "react-tabulator";

const Dashboard = () => {
  const [recommendationData, setRecommendationData] = useState([]);
  const [recommendationDataColumns, setRecommendationDataColumns] = useState(
    []
  );
  const [salesData, setSalesData] = useState([]);
  const [sales, setSales] = useState([]);
  const [predictedSales, setPredictedSales] = useState([]);
  const [salesTime, setSalesTime] = useState([]);

  useEffect(() => {
    const getCsv = async () => {
      const recommendation_data = await csv("data/recommendations-michael.csv");
      const sales = await csv("data/sales-michael.csv");
      let columns = [];
      recommendation_data.columns.forEach((item) => {
        if (item === "Potential revenue") {
          columns.push({ title: item, field: item, formatter: "progress" });
        } else {
          columns.push({ title: item, field: item });
        }
      });
      setRecommendationDataColumns(columns);
      setRecommendationData(recommendation_data);
      setSalesData(sales);
    };
    getCsv();
  }, []);
  useEffect(() => {
    let quarter = [];
    let sales = [];
    let predicted_sales = [];
    if (salesData) {
      salesData.forEach((item) => {
        quarter.push(item.Quarter);
        sales.push(item["Michael Sales (£)"]);
        predicted_sales.push(item["Michael Predicted Sales (£)"]);
      });
      setSales(sales);
      setPredictedSales(predicted_sales);
      setSalesTime(quarter);
    }
  }, [salesData]);
  const sales_data = {
    labels: salesTime,
    datasets: [
      {
        label: "Michael Sales (£)",
        data: sales,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Michael Predicted Sales (£)",
        data: predictedSales,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="dashboard__inner">
      <div className="top-card">
        <h2>YOUR PERFORMANCE</h2>
        <p>
          Maximize your revenue from every interaction with machine learning
          insights
        </p>
      </div>
      <div>
        {recommendationData?.length && (
          <ReactTabulator
            data={recommendationData}
            columns={recommendationDataColumns}
            tooltips={true}
            reactiveData={true}
            responsiveLayout={true}
            pagination="local"
            layout={"fitData"}
          />
        )}
      </div>
      <div className="main-overview">
        <div>
          <h4>SALES PERFORMANCE</h4>
          <Line data={sales_data} options={options} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
