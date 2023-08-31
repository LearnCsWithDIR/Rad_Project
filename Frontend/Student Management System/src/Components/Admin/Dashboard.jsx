import "./Dashboard.css";
import { useState } from "react";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <a href="">
                <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span className="title">Brand Name</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon"><ion-icon name="people-outline"></ion-icon></span>
                <span className="title">Customers</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon"><ion-icon name="cog-outline"></ion-icon></span>
                <span className="title">Settings</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
                <span className="title">Help</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
