import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const defaultImageUrl = 'https://cdn.pixabay.com/photo/2016/03/28/13/15/projector-1285695_1280.jpg';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data.map(item => {
        const showData = item.show;
        showData.image = showData.image ? showData.image.medium : defaultImageUrl;
        return showData;
      }));
    };
    fetchShows();
  }, []);

  return (
    <div className="container">
      <h1>Movies Shows</h1>
      <div className="show-list">
        {shows.map(show => (
          <div key={show.id} className="show-item">
            <img src={show.image} alt={show.name} className="show-image-first" />
            <div className="show-details">
              <h2 className="show-title">{show.name}</h2>
              <p>{show.genres.join(', ')}</p>
              <p>Status: {show.status}</p>
              <p>Rating: {show.rating.average}</p>
              <Link to={`/show/${show.id}`} className="btn">Show Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
