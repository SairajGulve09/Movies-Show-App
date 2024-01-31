import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/ShowDetailPage.css';

const defaultImageUrl = 'https://cdn.pixabay.com/photo/2016/03/28/13/15/projector-1285695_1280.jpg';

const ShowDetailPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchShowDetails = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    };
    fetchShowDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBookingFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    setFormData({
      name: '',
      email: '',
    });
    setBookingFormVisible(false);
  };

  return (
    <div className="container">
      <div className="show-details">
        {show ? (
          <>
            <h1>{show.name}</h1>
            {show.image ? (
              <img src={show.image.medium} alt={show.name} className="show-image" />
            ) : (
              <img src={defaultImageUrl} alt={show.name} className="show-image" />
            )}
            <div className="show-summary" dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            {!bookingFormVisible && (
              <button onClick={() => setBookingFormVisible(true)} className="book-ticket-btn">
                Book Ticket
              </button>
            )}
            {bookingFormVisible && (
              <form onSubmit={handleBookingFormSubmit} className="booking-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            )}
            <Link to="/" className="back-link">Back to Home</Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default ShowDetailPage;
