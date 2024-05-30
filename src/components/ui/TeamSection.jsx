import React from 'react';
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vaector2.png'
import TeamSlider from '../TeamSlider';
import { LANGUAGE_STYLES } from '../constants';


const TeamSection = ({t,currentlanguage}) => {
  const getTextClass = (language) => LANGUAGE_STYLES[language] || 'default-text';

  const txtClass = getTextClass(currentlanguage);
  return (
    <section className='team'>
      <span className={`team_title ${txtClass}`}>{t("teamtit" )}</span>
      <div className="rg">
        <div></div>
        <div className="team_rg">
          <img src={vector1} className='prv1 custom-prev1 disabled' alt='Previous'/>
          <img src={vector2} className='nxt1 custom-next1' alt='Next'/>
        </div>
      </div>
    <TeamSlider t={t}/>
    </section>
  );
};

export default TeamSection;
