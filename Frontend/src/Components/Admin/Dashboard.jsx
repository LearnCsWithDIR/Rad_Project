import "./Dashboard.css";
import { useState } from "react";
import Navbar from "../Utils/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className="Slider">
          <div className="navigation">
            <ul>
              <li>
                {/* <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span> */}
                <span className="title123">Admin</span>
              </li>
              {/* <li>
                <Link to="/Admin">
                  <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                  <span className="title1">Dashboard</span>
                </Link>
              </li> */}
              <li>
                <Link to="/ViewTeacher">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title1">Teachers</span>
                </Link>
              </li>
              <li>
                <Link to="/View-Students">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title1">Students</span>
                </Link>
              </li>
              <li>
                <Link to="/View-Employee">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title1">Employees</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/password-reset">
                  <span className="icon">
                    <ion-icon name="cog-outline"></ion-icon>
                  </span>
                  <span className="title1">Reset Password</span>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <span className="icon">
                    <ion-icon name="log-out-outline"></ion-icon>
                  </span>
                  <span className="title1">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default Dashboard;
