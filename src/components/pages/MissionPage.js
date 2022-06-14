import React from 'react';
import Mission from '../Mission';

class MissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [
        {
          mission_id: 1,
          mission_name: 'Telstar',
          description: 'VictorLorem ipsum, dolor sit amet consectetur adipisicing elit. Est, dolorem cupiditate accusamus molestiae fugiat suscipit distinctio, rerum odit id sunt quas voluptatum iusto tenetur deserunt laudantium possimus non voluptatem enim in perspiciatis at expedita quibusdam ab quasi! Pariatur, a iste laborum quis beatae hic harum numquam reprehenderit totam. Architecto beatae dignissimos dolorum commodi aspernatur. Exercitationem voluptate expedita est beatae a.',
        },
        {
          mission_id: 2,
          mission_name: 'Iridium Next',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, dolorem cupiditate accusamus molestiae fugiat suscipit distinctio, rerum odit id sunt quas voluptatum iusto tenetur deserunt laudantium possimus non voluptatem enim in perspiciatis at expedita quibusdam ab quasi! Pariatur, a iste laborum quis beatae hic harum numquam reprehenderit totam. Architecto beatae dignissimos dolorum commodi aspernatur. Exercitationem voluptate expedita est beatae a.',
        },
        {
          mission_id: 3,
          mission_name: 'Thaicom',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, dolorem cupiditate accusamus molestiae fugiat suscipit distinctio, rerum odit id sunt quas voluptatum iusto tenetur deserunt laudantium possimus non voluptatem enim in perspiciatis at expedita quibusdam ab quasi! Pariatur, a iste laborum quis beatae hic harum numquam reprehenderit totam. Architecto beatae dignissimos dolorum commodi aspernatur. Exercitationem voluptate expedita est beatae a.',
        },
        {
          mission_id: 4,
          mission_name: 'Commercial Resupply',
          description: 'The HolyBible',
        },
      ],
    };
  }

  render() {
    const { missions } = this.state;
    return (
      <Mission missions={missions} />
    );
  }
}

export default MissionPage;
