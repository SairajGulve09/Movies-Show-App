import React from 'react';
import '../styles/BookingForm.css';

const BookingForm = () => {
  return (
    <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form className="booking-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
