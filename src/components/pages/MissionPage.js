import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMissions } from '../../Redux/Mission/Mission';
import Mission from '../Mission';

const MissionPage = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);

    return (
      <Mission missions={missions} />
    );
}

export default MissionPage;

