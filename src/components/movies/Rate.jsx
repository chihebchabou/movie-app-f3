import React from 'react';

const Rate = ({ rating, setRating }) => {
  const stars = star => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= star) {
        starArray.push(
          <span
            key={i}
            className="fs-4"
            style={style}
            onClick={() => setRating(i)}
          >
            &#9733;
          </span>
        );
      } else {
        starArray.push(
          <span
            key={i}
            className="fs-4"
            style={style}
            onClick={() => setRating(i)}
          >
            &#9734;
          </span>
        );
      }
    }

    return starArray;
  };
  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  setRating: () => {},
};

const style = {
  color: 'rgb(245, 164, 66)',
  cursor: 'pointer',
};

export default Rate;
