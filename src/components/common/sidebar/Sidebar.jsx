import React from "react";
import "./style.scss";
import { FiUsers } from "react-icons/fi";
import { GoGraph } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="list">
        <div className="list-item">
          <FiUsers color="#ffffff" />
          <p>Suggestions</p>
        </div>
        <div className="list-item">
          <GoGraph color="#ffffff" />
          <p>Reports</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
