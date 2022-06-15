/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../Redux/Rocket/rockets';
import './rocket.css';

const Rocket = ({ rocket }) => {
  const {
    rocket_id, rocket_name, description, flickr_images, reserved,
  } = rocket;
  const dispatch = useDispatch();
  return (
    <div className="rocket-detail">
      <div className="detail-image">
        <img src={flickr_images} alt={rocket_name} />
      </div>
      <div className="rocket-info">
        <h2 className="rocket-name">{rocket_name}</h2>
        <p className="rocket-description">
          <span className={reserved ? 'status' : ' '}>
            {reserved ? 'Reserved' : ''}
          </span>
          {description}
        </p>
        <div>
          <button
            type="button"
            className={
              reserved === true ? 'disabled' : 'rocket-item__reserve-btn'
            }
            onClick={() => (reserved
              ? dispatch(cancelReservation(rocket_id))
              : dispatch(reserveRocket(rocket_id)))}
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
