import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
  return (
    <div>
      <h2>Show List</h2>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link to={`/show/${show.id}`}>{show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
