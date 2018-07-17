import React from 'react';
import PropTypes from 'prop-types';

import './userCard.css';

function userCard(props) {
  const className = ` ${props.className}`;
  const replaceDefaultPhoto = () => {
    document.getElementById('userPhoto').src =
      'https://d1ohqf92fg2anw.cloudfront.net/vezeeta-saudi/Assets/Img/avatar.png';
  };

  return (
    <div className={`userCard ${className}`}>
      <div className="img-container">
        <img
          src='https://d1ohqf92fg2anw.cloudfront.net/vezeeta-saudi/Assets/Img/avatar.png'
          alt=""
          id="userPhoto"
          onError={replaceDefaultPhoto}
        />
      </div>
    </div>
  );
}

userCard.propTypes = {
  photo: PropTypes.string,
  className: PropTypes.string,
};

userCard.defaultProps = {
  className: '',
};

export default userCard;