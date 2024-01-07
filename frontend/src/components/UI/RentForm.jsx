import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/rent-form.css";
import { Form, FormGroup } from "reactstrap";

const RentForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    city: "",
    cityInput: "",
    bedrooms: "",
    checkIn: "",
    checkOut: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFindHome = () => {
    
    if (formData.city && (formData.cityInput || formData.city) && formData.bedrooms && formData.checkIn && formData.checkOut) {
      navigate("/rent");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="select__group">
          <select name="city" onChange={handleInputChange} value={formData.city}>
            <option value="">City</option>
            <option value="Gjakova">Gjakova</option>
            <option value="Prizeren">Prizeren</option>
            <option value="Prishtine">Prishtine</option>
            <option value="Ferizaj">Ferizaj</option>
            <option value="Peje">Peje</option>
            <option value="Mitrovice">Mitrovice</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" name="cityInput" placeholder="Location" required onChange={handleInputChange} value={formData.cityInput} />
        </FormGroup>

        <FormGroup className="select__group">
          <select name="bedrooms" onChange={handleInputChange} value={formData.bedrooms}>
            <option value="">Bedrooms</option>
            <option value="2">2 Bedrooms</option>
            <option value="2+">2+ Bedrooms</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" name="checkIn" placeholder="Check In" required onChange={handleInputChange} value={formData.checkIn} />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" name="checkOut" placeholder="Check Out" required onChange={handleInputChange} value={formData.checkOut} />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__rent-btn" onClick={handleFindHome}>
            Find Home
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default RentForm;

