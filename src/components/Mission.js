import React from 'react';
// import PropTypes from 'prop-types';

class Mission extends React.PureComponent {
    render() {
      const { missions } = this.props;
      return (
        <ul>
          {missions.map((mission) => (
            <li key={mission.mission_id}>
                {mission.mission_name}
                {mission.description}
                </li>
          ))}
        </ul>
      );
    }
  }

export default Mission;
