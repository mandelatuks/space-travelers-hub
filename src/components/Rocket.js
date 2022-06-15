/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
// import './rocket.css';

const Rocket = ({ rocket }) => {
  const {
    rocket_description, rocket_name, rocket_img,
  } = rocket;
  return (
    <section>
      <div>
        <div>
          <img
            src={rocket_img}
            alt={rocket_name}
          />
        </div>

        <div>
          <span>{rocket_name}</span>
          <p>{rocket_description}</p>
          <button type="button">
            Reserve Rocket
          </button>
        </div>
      </div>
    </section>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.number,
    rocket_name: PropTypes.string,
    rocket_description: PropTypes.string,
    reserved: PropTypes.bool,
    rocket_img: PropTypes.string,
  }).isRequired,
};

export default Rocket;
