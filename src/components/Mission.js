import React from 'react';
import PropTypes from 'prop-types';

class Mission extends React.PureComponent {
  render() {
    const { missions } = this.props;
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
                <td><h4 className="non-member">Not a Member</h4></td>
                <td><button type="button" className="cancel-btn">Join Mission</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

Mission.propTypes = {
  missions: PropTypes.string.isRequired,
};

export default Mission;
