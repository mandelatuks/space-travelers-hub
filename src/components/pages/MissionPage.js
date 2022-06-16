// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { FetchMissions, selectMission } from '../../Redux/Mission/Mission';
import Mission from '../Mission';

const MissionPage = () => {
  const missions = useSelector(selectMission, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);

  return (
    <Mission missions={missions} />
  );
};

export default MissionPage;
