// import React from "react";
// import "../../styles/booking-form.css";
// import { Form, FormGroup } from "reactstrap";

// const BookingForm = () => {
//   const submitHandler = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <Form onSubmit={submitHandler}>
//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <input type="text" placeholder="First Name" />
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <input type="text" placeholder="Last Name" />
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <input type="email" placeholder="Email" />
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <input type="number" placeholder="Phone Number" />
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <input type="text" placeholder="From Address" />
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <input type="text" placeholder="To Address" />
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <select name="" id="">
//           <option value="1 person">1 Person</option>
//           <option value="2 person">2 Person</option>
//           <option value="3 person">3 Person</option>
//           <option value="4 person">4 Person</option>
//           <option value="5+ person">5+ Person</option>
//         </select>
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <select name="" id="">
//           <option value="1 luggage">1 luggage</option>
//           <option value="2 luggage">2 luggage</option>
//           <option value="3 luggage">3 luggage</option>
//           <option value="4 luggage">4 luggage</option>
//           <option value="5+ luggage">5+ luggage</option>
//         </select>
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <input type="date" placeholder="Journey Date" />
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <input
//           type="time"
//           placeholder="Journey Time"
//           className="time__picker"
//         />
//       </FormGroup>

//       <FormGroup>
//         <textarea
//           rows={5}
//           type="textarea"
//           className="textarea"
//           placeholder="Write"
//         ></textarea>
//       </FormGroup>
//     </Form>
//   );
// };

// export default BookingForm;









import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";


const BookingForm = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    Lastname: "",
    Email: "",
    PhoneClient: "",
    FromAddress: "",
    ToAddress: "",
    NumberOfPersons: 0,
    NumberOfLuggage: "",
    JourneyDate: "",
    JourneyTime: "",
    AdditionalComments: "",
  });
   const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Submit button clicked!");

    try {
      const response = await fetch("http://localhost:5000/rent:slug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Booking submitted successfully!");
        // Reset the form after successful submission if needed
        setFormData({
          FirstName: "",
          Lastname: "",
          Email: "",
          PhoneClient: "",
          FromAddress: "",
          ToAddress: "",
          NumberOfPersons: 0,
          NumberOfLuggage: "",
          JourneyDate: "",
          JourneyTime: "",
          AdditionalComments: "",
        });
        navigate("/home")
      } else {
        console.error("Error submitting booking.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="FirstName"
          value={formData.FirstName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="LastName"
          value={formData.Lastname}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input
          type="text"
          name="PhoneNumber"
          value={formData.PhoneClient}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="FromAddress"
          value={formData.FromAddress}
          onChange={handleChange}
          placeholder="From Address"
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="ToAddress"
          value={formData.ToAddress}
          onChange={handleChange}
          placeholder="To Address"
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select
          name="NumberOfPersons"
          value={formData.NumberOfPersons}
          onChange={handleChange}
        >
          <option value="1">1 Person</option>
          <option value="2">2 Person</option>
          <option value="3">3 Person</option>
          <option value="4">4 Person</option>
          <option value="5+">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="NumberOfLuggage"
          value={formData.NumberOfLuggage}
          onChange={handleChange}
        >
          <option value="1">1 Luggage</option>
          <option value="2">2 Luggage</option>
          <option value="3">3 Luggage</option>
          <option value="4">4 Luggage</option>
          <option value="5+">5+ Luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="date"
          name="JourneyDate"
          value={formData.JourneyDate}
          onChange={handleChange}
          placeholder="Journey Date"
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          name="JourneyTime"
          value={formData.JourneyTime}
          onChange={handleChange}
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          name="AdditionalComments"
          value={formData.AdditionalComments}
          onChange={handleChange}
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>


      <div className="payment text-end mt-5">
        <button type="submit">Reserve Now</button>
      </div>

    </Form>
  );
};

export default BookingForm;


