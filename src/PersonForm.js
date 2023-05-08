import React, { useState } from "react";
import axios from "axios";
import "./PersonForm.css";

function SignupForm() {
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    legal_address: {
      default_address_flg: true,
      address_line_1: "",
      city: "",
      state: "",
      postal_code: "",
      country_code: "",
    },
    shipping_address: {
      default_address_flg: true,
      address_line_1: "",
      city: "",
      state: "",
      postal_code: "",
      country_code: "",
    },
    dob: "",
    email: "",
    phone_number: "",
    status: "ACTIVE",
    is_customer: false,
    personal_ids: {
      id_type: "SSN",
      identifier: "",
    },
  });

  const [alertMessage, setAlertMessage] = useState("");

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
    if (formData.first_name === "") {
      setAlertMessage("Please enter a first name");
      return;
    }
    if (formData.last_name === "") {
      setAlertMessage("Please enter a last name");
      return;
    }
    if (formData.email === "") {
      setAlertMessage("Please enter an email address");
      return;
    }
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/customers/create-person",
        formData
      );
      console.log(response.data);
      setAlertMessage("Form submitted successfully!");
    } catch (error) {
      console.error(error);
    }

    // setFormData({
    //   last_name: "",
    //   first_name: "",
    //   legal_address: {
    //     default_address_flg: true,
    //     address_line_1: "",
    //     city: "",
    //     state: "",
    //     postal_code: "",
    //     country_code: "",
    //   },
    //   shipping_address: {
    //     default_address_flg: true,
    //     address_line_1: "",
    //     city: "",
    //     state: "",
    //     postal_code: "",
    //     country_code: "",
    //   },
    //   dob: "",
    //   email: "",
    //   phone_number: "",
    //   status: "ACTIVE",
    //   is_customer: false,
    //   personal_ids: {
    //     id_type: "SSN",
    //     identifier: "",
    //   },
    // });
    // Show success message
  };

  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      {alertMessage.length > 0 && alert(alertMessage)}
      <div className="headingAndBtn">
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
        <h1 className="heading">CoEdify Fintech App</h1>
      </div>
      <h2 className="subHeading">Create personal Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <h2>Personal Info </h2>
          <hr size="2" width="100%" color="black" />
          <div className="grid-item">
            <div>
              <label htmlFor="first_name">First Name:</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="city">Last Name:</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="dob">DOB:</label>
              <input
                type="number"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phone_number">Phone Number:</label>
              <input
                type="number"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="is_customer">
              <label htmlFor="is_customer">Is Customer :</label>
              <input
                type="checkbox"
                name="is_customer"
                value={formData.is_customer}
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
          <h2>Shipping Address</h2>
          <hr size="2" width="100%" color="black" />
          <div className="grid-item">
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="shipping_address.address_line_1"
                value={formData.shipping_address.address_line_1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="shipping_address.city"
                value={formData.shipping_address.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="shipping_address.state"
                value={formData.shipping_address.state}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="postal_code">Postal code:</label>
              <input
                type="number"
                id="postal_code"
                name="shipping_address.postal_code"
                value={formData.shipping_address.postal_code}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="country_code">Country code:</label>
              <input
                type="text"
                id="country_code"
                name="shipping_address.country_code"
                value={formData.shipping_address.country_code}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <h2>Personal Ids</h2>
          <hr size="2" width="100%" color="black" />
          <div className="grid-item">
            <div>
              <label htmlFor="id_type">Id Type:</label>
              <input
                type="text"
                id="id_type"
                name="personal_ids.id_type"
                value={formData.personal_ids.id_type}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="city">Identifier</label>
              <input
                type="text"
                id="identifier"
                name="personal_ids.identifier"
                value={formData.personal_ids.identifier}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button className="submit">Submit</button>
      </form>
    </>
  );
}

export default SignupForm;
