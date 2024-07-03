import React from 'react'
import barPng from '../assets/bar.png'
import { LANGUAGE_STYLES } from '../constants';

const ConsSection = ({t,currentlanguage}) => {
    const getTextClass = (language) => LANGUAGE_STYLES[language] || 'default-text';

    const txtClass = getTextClass(currentlanguage);
  return (
    <section className='about'>
        <span className={`about_title ${txtClass}`}>PROFIT PRIME ACADEMY</span>
        <div className="cons_section">
            <div className="cons_hor_gr">
                <div className="vertical-line"/>
                <div className="con">          
                    <div className="con_title">01</div>
                    <div className="con_subtitle">{t("ab1")}</div>
                </div>
                <div className="vertical-line"/>
                <div className="con">         
                    <div className="con_title">02</div>
                    <div className="con_subtitle"> {t("ab2_1")}</div>
                    <div className="con_li">
                        <img src={barPng} className='bar_png' alt='barPng'/>
                        <div className="const_list">
                            <span className='const_txt'>{t("ab2_2")}<br/>{t("ab2_3")} </span>
                            <span className='const_txt'>{t("ab2_4")}</span>
                            <span className='const_txt'>{t("ab2_5")}<br/>{t("ab2_6")} </span>
                            <span className='const_txt'>{t("ab2_7")}</span>
                            <span className='const_txt'>{t("ab2_8")}</span>
                            <span className='const_txt'>{t("ab2_9")}</span>
                            <span className='const_txt'>{t("ab2_10")}<br/>{t("ab2_11")} </span>
                            <span className='const_txt'>{t("ab2_12")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cons_hor_gr">
                <div className="vertical-line"></div>
                <div className="con">
                
                    <div className="con_title">03</div>
                    <div className="con_subtitle">{t("ab3_1")} <span className='bold'>Profit Prime</span>{t("ab3_2")} </div>
                </div>
                <div className="vertical-line"></div>
                <div className="con">
        
                    <div className="con_title">04</div>
                    <div className="con_subtitle">{t("ab4")}<span className='bold'>PROFIT PRIME ACADEMY</span>.</div>
                </div>
            </div>
            
        </div>
        <a href='https://t.me/Profit_Prime'  target='_blank'rel="noreferrer" className="about_btn"><span className="aboutbtn_txt">{t("abbtn")}</span></a>
    </section>
  )
}

export default ConsSection