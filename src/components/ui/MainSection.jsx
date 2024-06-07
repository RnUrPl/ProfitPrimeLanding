import React from 'react'
import CircleAnimation from '../CircleAnimation'
import { LANGUAGE_STYLES } from '../constants';


const MainSection = ({t,currentLanguage}) => {
  const getTextClass = (language) => LANGUAGE_STYLES[language] || 'default-text';

  const txtClass = getTextClass(currentLanguage);


  return (
    <section className='main' >
    
      <div className='info'>
        <h1  className={`infoh1 ${txtClass}`}>
          {t("maintxt1")}
        </h1>
        <h2>
          {t("maintxt2")}
        </h2>
        <div className="qwer">
        <a href='https://t.me/ProfitPrime_support'rel="noreferrer" target="_blank"><span className='moreifo_txt' >{t("maintxt3")}</span></a>
        </div>
       
      </div>
      <div className="earth">
      <CircleAnimation t={t}/>
      </div>

    </section>
    
  )
}

export default MainSection