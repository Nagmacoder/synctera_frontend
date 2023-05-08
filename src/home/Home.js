import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <h5 className="card-title">Welcome to CoEdify Fintech App!</h5>
      <div className="card">
        <div className="card-body">
          <h3 className="card-text">Choose an option below to get started:</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/personForm">Create Person</Link>
            </li>
            <li className="list-group-item">
              <Link to="/businessForm">Create Business</Link>
            </li>
            <li className="list-group-item">
              <Link to="/kycForm">Create KYC</Link>
            </li>
            <li className="list-group-item">
              <Link to="/Listbusiness">List Businesses</Link>
            </li>
            <li className="list-group-item">
              <Link to="/Listaccount">List Accounts</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
