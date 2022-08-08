// eslint-disable-next-line react-hooks/exhaustive-deps

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { selectMission } from '../../Redux/Mission/Mission';
import Mission from '../Mission';

const MissionPage = () => {
  const missions = useSelector(selectMission, shallowEqual);

  return (
    <Mission missions={missions} />
  );
};

export default MissionPage;
