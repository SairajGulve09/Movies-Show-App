import React from 'react';
import '../styles/ShowDetail.css';

const ShowDetail = ({ show, onBookTicket }) => {
  return (
    <div className="show-detail-container">
      <h2 className="show-title">{show.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: show.summary }} className="show-summary"></div>
      <button onClick={() => onBookTicket(show)} className="book-ticket-btn">Book Ticket</button>
    </div>
  );
};

export default ShowDetail;
