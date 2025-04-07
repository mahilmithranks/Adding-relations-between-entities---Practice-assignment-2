import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoveredRating(value);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset rating after submission
    } else {
      alert("Please select a rating between 1 and 5.");
    }
  };

  return (
    <div>
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleStarClick(value)}
            onMouseEnter={() => handleStarHover(value)}
            onMouseLeave={handleStarLeave}
            style={{
              cursor: 'pointer',
              color: value <= (hoveredRating || rating) ? '#FFD700' : '#ccc', // Gold for selected/hovered stars
              fontSize: '24px',
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} style={styles.submitButton}>
        Submit Rating
      </button>
    </div>
  );
};

const styles = {
  stars: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default RatingWidget;