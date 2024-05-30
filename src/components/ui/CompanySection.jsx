import React from 'react'
import abPng from '../assets/abcomp_img.png'
import box4Img from '../assets/box4_img.png'
import { LANGUAGE_STYLES } from '../constants';

const CompanySection = ({t,currentlanguage}) => {
    const getTextClass = (language) => LANGUAGE_STYLES[language] || 'default-text';

    const txtClass = getTextClass(currentlanguage);
    
  return (
    <section id="company" className='company'>
        <span className={`abcomp_title ${txtClass}`}>{t("abcomp")}</span>
        <div className="abc_gr">
        <div className="abcomp_group">  
            <div className="abcomp_chunk">
                <div className="abcomp_box1">
                    <span className='box1_num'>5</span>
                    <div className="box1_group">
                        <span className="box1_title">{t("boxtit" )}</span>
                        <span className="box1_subtitle custom_scroll2">{t("boxtxt1" )} <span className='bold'>Roboforex</span> и <span className='bold'>Quotex</span>.{t("boxtxt1" )}  </span>
                    </div>
                </div>
                <div className="abcomp_box2">
                    
                    <div className="box1_group">
                        <span className="box2_title">{t("box2tit")}</span>
                        <span className="box2_subtitle">{t("box2txt")}</span>
                    </div>
                </div>
            </div>
            <img src={abPng} className='abcomp_img' alt='Traders'/>
        </div>
        <div className="abcomp_group">
            <div className="abcomp_box3">
            <div className="box1_group">
                <span className="box3_title">{t("box3tit")}</span>
                <span className="box3_subtitle">{t("box3txt1")}<br/><br/>

{t("box3txt2")}</span>
            </div>
            </div>
            <div className="abcomp_box4">
            <img src={box4Img} className='box_img2' alt='box4img'/>
            <div className="box1_group">
                <span className="box3_title">{t("box4tit")}</span>
                <span className="box1_subtitle">
{t("box4txt")}</span>
            </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default CompanySection