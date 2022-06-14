import React from 'react';
import Mission from '../Mission';

class MissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [
        {
          mission_id: 1,
          mission_name: 'Tales on the moon light',
          description: 'Victor',
        },
        {
          mission_id: 2,
          mission_name: 'Joy on the ride',
          description: 'Damola',
        },
        {
          mission_id: 3,
          mission_name: 'Jesus is the way, the truth and the light',
          description: 'The HolyBible',
        },

      ],
    };
  }

  render() {
    const { missions } = this.state;
  return (
    <Mission missions={missions}/>
  );
}

}

export default MissionPage;
