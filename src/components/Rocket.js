import React from 'react';
import img from './img1.jpg';

const Rocket = () => {
  const val = '';
  return (
    <div className="rocket-detail">
      <img src={img} alt="image1" />
      <p className="text-dumy">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially unchanged
        {val}
      </p>
      <button type="button">Reserve</button>
    </div>
  );
};

export default Rocket;
