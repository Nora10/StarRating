import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/rating')
      .then(response => {
        setRating(response.data.rating);
      });
  }, []);

  const saveRating = (newRating: number) => {
    axios.post('http://localhost:3001/rating', { rating: newRating })
      .then(response => {
        setRating(response.data.rating);
      });
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => saveRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
