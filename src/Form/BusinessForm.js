import React, { useState } from "react";
import axios from "axios";
import "./BusinessForm.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    status: "",
    entity_name: "",
    trade_names: [],
    structure: "",
    formation_date: "",
    formation_state: "",
    phone_number: "",
    website: "",
    ein: "",
    legal_address: {
      address_line_1: "",
      city: "",
      state: "",
      postal_code: "",
      country_code: "",
    },
    is_customer: false,
  });

  const [alertMsg, setAlertMsg] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".");
      console.log(outerKey, innerKey);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [outerKey]: {
          ...prevFormData[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form data
    if (formData.entity_name === "") {
      setAlertMsg("Please enter Entity name");
      return;
    }
    if (formData.trade_names === "") {
      setAlertMsg("Please enter Trade name");
      return;
    }

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/businesses/",
        formData
      );
      console.log(response.data);
      setAlertMsg("Form submitted successfully!");
    } catch (error) {
      console.error(error);
    }
    // setFormData({
    //   status: "",
    //   entity_name: "",
    //   trade_names: [],
    //   structure: "",
    //   formation_date: "",
    //   formation_state: "",
    //   phone_number: "",
    //   website: "",
    //   ein: "",
    //   legal_address: {
    //     address_line_1: "",
    //     city: "",
    //     state: "",
    //     postal_code: "",
    //     country_code: "",
    //   },
    //   is_customer: false,
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
      <h2 className="login">Create Business</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <h2>Business Info</h2>
          <hr size="2" width="100%" color="black" />
          <div className="grid-item">
            <div>
              <label htmlFor="entity_name">Entity Name:</label>
              <input
                type="text"
                id="entity_name"
                name="entity_name"
                value={formData.entity_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="trade_names">Trade Names:</label>
              <input
                type="text"
                id="trade_names"
                name="trade_names"
                value={formData.trade_names}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="structure">Structure:</label>
              <input
                type="text"
                id="structure"
                name="structure"
                value={formData.structure}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="website">Website:</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="ein">Ein:</label>
              <input
                type="number"
                id="ein"
                name="ein"
                value={formData.ein}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <h2>Legal Address</h2>
          <hr size="2" width="100%" color="black" />
          <div className="grid-item">
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="legal_address.address_line_1"
                value={formData.legal_address.address_line_1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="legal_address.city"
                value={formData.legal_address.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="legal_address.state"
                value={formData.legal_address.state}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phone_number">Phone Number:</label>
              <input
                type="text"
                id="phone_number"
                name="legal_address.phone_number"
                value={formData.legal_address.phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="postal_code">Postal code:</label>
              <input
                type="number"
                id="postal_code"
                name="legal_address.postal_code"
                value={formData.legal_address.postal_code}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="country_code">Country code:</label>
              <input
                type="text"
                id="country_code"
                name="legal_address.country_code"
                value={formData.legal_address.country_code}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <h2>Other Info</h2>
          <hr size="2" width="100%" color="black" />
          <div className="grid-item">
            <div>
              <label htmlFor="formation_date">Formation Date:</label>
              <input
                type="number"
                id="formation_date"
                name="formation_date"
                value={formData.formation_date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="formation_state">Formation State:</label>
              <input
                type="text"
                id="formation_state"
                name="formation_state"
                value={formData.formation_state}
                onChange={handleInputChange}
              />
            </div>
            <div className="is_customer">
              <label>Is Customer</label>
              <input
                type="checkbox"
                name="is_customer"
                value="is_customer"
                checked={formData.is_customer}
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

export default LoginForm;
