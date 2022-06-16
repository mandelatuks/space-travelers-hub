import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { selectMission } from '../../Redux/Mission/Mission';

function ProfilePage() {
  const missions = useSelector(selectMission, shallowEqual);

  const missionJoined = missions.filter((mission) => mission.reserved);
  return (
    <section className="profile-page">
      <div>
        <h1> My Missions</h1>
        <ul>
          {missionJoined.map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>My Rockets</h1>
      </div>
    </section>
  );
}

export default ProfilePage;
