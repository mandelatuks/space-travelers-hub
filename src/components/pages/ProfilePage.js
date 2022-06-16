import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { selectMission } from '../../Redux/Mission/Mission';

function ProfilePage() {
  const missions = useSelector(selectMission, shallowEqual);
  const rockets = useSelector((state) => state.rockets.rockets);

  const missionJoined = missions.filter((mission) => mission.reserved);
  const rocketReserved = rockets.filter((rocket) => rocket.reserved);
  return (
    <section className="profile-page">
      <div>
        <h1> My Missions</h1>
        <ul>
          {missionJoined.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>My Rockets</h1>
        <ul>
          {rocketReserved.map((rocket) => (
            <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProfilePage;
