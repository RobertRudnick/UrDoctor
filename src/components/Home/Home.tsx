import React, { FC } from 'react';
import './Home.css';
import { HeaderLabel } from '../Shared/Shared';

interface HomeProps {
}

const Home: FC<HomeProps> = (name) => (
  <div>
    <HeaderLabel title='Workspace' backgroundColor='#a5d8ff'/>
    <div className='content-wrapper'>
      <div className='workspace'>
        <div className='workspace-data'>
          <p>Location: HCP</p>
          <p>Amount of coworkers: 15</p>
        </div>
      </div>
    </div>
  </div>

);

export default Home;
