import React from 'react';
import QuestionsMenu from '../QuestionsMenu';
import { LANGUAGE_STYLES } from '../constants';



const AccordionMenu = ({t,currentlanguage}) => {

  const getTextClass = (language) => LANGUAGE_STYLES[language] || 'default-text';

  const txtClass = getTextClass(currentlanguage);

  return (
    <section id='faq' className='faq'>

      <div className={`faq_title ${txtClass}`}>{t("qtit")}</div>
      <QuestionsMenu t={t}/>
    </section>
  );
};

export default AccordionMenu;
