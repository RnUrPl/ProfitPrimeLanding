import React from 'react';
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vaector2.png'
import TeamSlider from '../TeamSlider';


const TeamSection = () => {
  return (
    <section className='team'>
      <span className='team_title'>НАША КОМАНДА</span>
      <div className="rg">
        <div></div>
        <div className="team_rg">
          <img src={vector1} className='prv1 custom-prev1 disabled' alt='Previous'/>
          <img src={vector2} className='nxt1 custom-next1' alt='Next'/>
        </div>
      </div>
    <TeamSlider/>
    </section>
  );
};

export default TeamSection;
