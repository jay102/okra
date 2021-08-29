import React from "react";
import "./style.scss";

//import components
import Navbar from "../../components/common/navbar/Navbar";
import Sidebar from "../../components/common/sidebar/Sidebar";
import Footer from "../../components/common/footer/Footer";
import DashboardComponent from "../../components/dashboard/Dashboard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <main className="main">
        <DashboardComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
