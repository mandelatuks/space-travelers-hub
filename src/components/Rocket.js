/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
// import './rocket.css';

const Rocket = ({ rocket }) => {
  const {
    rocket_name, description, flickr_images, reserved,
  } = rocket;
  return (
    <div className="rocket-item">
      <div className="rocket-item__image">
        <img src={flickr_images} alt={rocket_name} />
      </div>
      <div className="rocket-item__info">
        <h2 className="rocket-item__name">{rocket_name}</h2>
        <p className="rocket-item__description">
          <span className="status">{reserved ? 'Reserved' : ''}</span>
          {description}
        </p>
        <div>
          <button
            className="rocket-item__reserve-btn"
            disabled={reserved}
            onClick={() => console.log('reserve')}
            type="button"
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default Rocket;
