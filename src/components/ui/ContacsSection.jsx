import React from 'react'
import ContactForm from '../ContactForm'
import { LANGUAGE_STYLES } from '../constants';

const ContacsSection = ({t,currentlanguage}) => {
  const getTextClass = (language) => LANGUAGE_STYLES[language] || 'default-text';

  const txtClass = getTextClass(currentlanguage);

  return (
    <section id ='contacts' className='contacts'>
        <div className="contact_inf">
            <div className={`contact_title ${txtClass}`}>{t("mb8")}</div>
            <div className="contact_sub">
            {t("mb9")} <br/>{t("mb10")}<br/> {t("mb11")}
            </div>
            <div className="contact_email">support@profitprime.pro</div>
       
        </div>
        <ContactForm t={t}/>
    </section>
  )
}

export default ContacsSection