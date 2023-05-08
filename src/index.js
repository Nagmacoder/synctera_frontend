import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListAccounts from "./pages/ListAccounts";
import ListBusiness from "./pages/ListBusiness";
import BusinessForm from "./Form/BusinessForm";
import PersonForm from "./PersonForm";
import KycForm from "./Form/KycForm";
import Home from "./home/Home";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personForm" element={<PersonForm />} />
        <Route path="/businessForm" element={<BusinessForm />} />
        <Route path="/Listbusiness" element={<ListBusiness />} />
        <Route path="/Listaccount" element={<ListAccounts />} />
        <Route path="/kycForm" element={<KycForm />} />
      </Routes>
    </Router>
  </>
);
