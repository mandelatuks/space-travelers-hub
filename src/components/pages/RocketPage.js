import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../Rocket';
import { fetchRockets } from '../../Redux/Rocket/rockets';

const RocketPage = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);
};

export default RocketPage;
