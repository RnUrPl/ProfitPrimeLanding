import React from 'react';
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vaector2.png'
import TradersSlider from '../TradersSlider';
import { LANGUAGE_STYLES } from '../constants';



const TradersSection = ({t,currentlanguage}) => {

  const getTextClass = (language) => LANGUAGE_STYLES[language] || 'default-text';

  const txtClass = getTextClass(currentlanguage);
    
  return (
    <section id='traders' className='traders'>
        <div className={`trade_titile ${txtClass}`}>{t("trdtit1")}<br/>{t("trdtit2")}</div>
        <div className="trade_group">
            <div className="trade_subtitle">{t("trdtit3")}<br/>{t("trdtit4")}</div>
            <div className="vector_group">
            <img src={vector1} className='prv custom-prev disabled' alt='vecto1'/>
            <img src={vector2} className='nxt custom-next' alt='vector2'/>
            </div>
        </div>
        
          <TradersSlider t={t}/>
      
    </section>
  )
}

export default TradersSection