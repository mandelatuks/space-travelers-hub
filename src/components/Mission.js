import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateMission } from '../Redux/Mission/Mission';

const Mission = (props) => {
  const { missions } = props;
  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(updateMission(id));
  };
  return (
    <section className="missiontable">
      <table>
        <thead>
          <tr>
            <th><h4>Mission</h4></th>
            <th><h4>Description</h4></th>
            <th><h4>Status</h4></th>
            <th><h4>.</h4></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td><h4>{mission.mission_name}</h4></td>
              <td><h4>{mission.description}</h4></td>
              <td>
                {!mission.reserved && (
                <h4
                  className="non-member"
                >
                  Not a Member
                </h4>
                )}
                {mission.reserved && (
                <h4
                  className="member"
                >
                  Active Member
                </h4>
                )}
              </td>
              <td>
                {!mission.reserved && (
                <button
                  id={mission.mission_id}
                  type="button"
                  className="join-btn"
                  onClick={handleClick}
                >
                  Join Mission
                </button>
                )}
                {mission.reserved && (
                <button
                  id={mission.mission_id}
                  type="button"
                  className="cancel-btn"
                  onClick={handleClick}
                >
                  Leave Mission
                </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

Mission.propTypes = {
  missions: PropTypes.string.isRequired,
};

export default Mission;
