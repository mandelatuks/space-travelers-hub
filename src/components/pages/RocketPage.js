import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../Redux/Rocket/rockets';
import Rocket from '../Rocket';

const RocketPage = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);
};

export default RocketPage;
