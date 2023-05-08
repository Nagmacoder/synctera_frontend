import React, { useState } from "react";
import axios from "axios";
import "./KycForm.css";

function KycForm() {
  const [formData, setFormData] = useState({
    person_id: "",
    customer_consent: false,
    customer_ip_address: "",
  });

  const [alertMsg, setAlertMsg] = useState("");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form data
    if (formData.person_id === "") {
      setAlertMsg("Invalid person_id");
      return;
    }

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/verifications/verify",
        formData
      );
      console.log(response.data);
      setAlertMsg("KYC created Successfully! ");
    } catch (error) {
      console.error(error);
    }

    // Reset form data

    // setFormData({
    //   person_id: "",
    //   customer_consent: false,
    //   customer_ip_address: "",
    // });
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      {alertMsg.length > 0 && alert(alertMsg)}
      <div className="headingAndBtn">
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
        <h1 className="heading">CoEdify Fintech App</h1>
      </div>
      <h2 className="login">Create KYC</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <h2>KYC Info</h2>
          <hr size="2" width="100%" color="black" />
          <div className="grid-item">
            <div>
              <label htmlFor="person_id">Person Id:</label>
              <input
                type="text"
                id="person_id"
                name="person_id"
                value={formData.person_id}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="customer_ip_address">Customer Ip Address:</label>
              <input
                type="text"
                id="customer_ip_address"
                name="customer_ip_address"
                value={formData.customer_ip_address}
                onChange={handleInputChange}
              />
            </div>
            <div className="is_customer">
              <label htmlFor="customer_consent">Customer Consent:</label>
              <input
                type="checkbox"
                id="customer_consent"
                name="customer_consent"
                value={formData.customer_consent}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </>
  );
}

export default KycForm;
