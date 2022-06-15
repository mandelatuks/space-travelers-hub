import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchRockets } from '../../Redux/Rocket/rockets';
import Rocket from '../Rocket';

const RocketPage = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchRockets());
  }, [dispatch]);

  const data = rockets.map((rocket) => (
    <Rocket key={rocket.rocket_id} rocket={rocket} />
  ));
  return <div className="rocketList">{data}</div>;
};

export default RocketPage;
