import React, { useState } from 'react';
import pol1 from '../assets/pol1.png'


const AccordionMenu = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [iconFlipped, setIconFlipped] = useState(false);

  const menuItems = [
    {
        num: '01',
      question: 'Есть ли гарантия возврата средств',
      sub: 'если я не смогу заработать?',
      answer: 'Если в течение месяца у вас не будет торговой прибыли, мы гарантированно вернём вам средства. ',
    },
    {
        num: '02',
      question: 'Какая поддержка предоставляется',
      sub: 'после покупки доступа к системам?',
      answer: 'Мы предлагаем круглосуточную поддержку и регулярные обновления, чтобы обеспечить безупречную работу систем.',
    },
    {
        num: '03',  
        question: 'Смогу ли я зарабатывать без',
        sub: 'подписки на Profit Prime Academy?',
        answer: 'Да, конечно, торговой системы и руководства пользователя достаточно, чтобы начать зарабатывать. Академия даёт доступ к закрытой информации о подборе брокеров и разработке собственной стратегии, а также к закрытому чату трейдеров из нашей команды.',
      },
      {
        num: '04',
        question: 'Включены ли обновления системы ',
        sub: 'в первоначальную стоимость?',
        answer: 'Все будущие обновления бесплатны в течение срока действия вашего ключа. ',
      },
      {
        num: '05',
        question: 'Не слишком ли сложен интерфейс',
        sub: 'торговых систем для новичков?',
        answer: 'Наши системы подходят как новичкам, так и профессионалам благодаря понятному интерфейсу, подробному руководству пользователя и бесплатным консультациям.',
      },
      {
        num: '06',
        question: 'Не угрожают ли ваши системы безопасности ',
        sub: 'моих личных данных и средств?',
        answer: 'Безопасность ваших данных гарантирована современными методами шифрования, и мы строго соблюдаем политику конфиденциальности.',
      },
      {
        num: '07',
        question: `Будет ли программа работать `,
        sub: 'на моем оборудовании?',
        answer: 'Программа оптимизирована для работы на различных платформах и операционных системах.',
      },

  ];

  const handleToggle = (index) => {
    setExpandedItem((prevIndex) => (prevIndex === index ? null : index));
    setIconFlipped((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section id='faq' className='faq'>

      <div className="faq_title">САМЫЕ ЧАСТЫЕ ВОПРОСЫ</div>
        <div className="accordion-menu">
            <div className="horizontal-line"/>
            {menuItems.map((item, index) => (
               <div className="qqq" key={index}>
                       <div key={index} className={`faq_item ${expandedItem === index ? 'expanded' : ''}`}>
                    <div className="horizontal_gr">
                        <div className="num">{item.num}</div>
                        <div className="fdq_item_gr">
                          <div className="fqwe">
                          <div className="question" onClick={() => handleToggle(index)}>
                                {item.question}<br/>{item.sub}
                            </div>
                          </div>
                    
                            
                            <div className="vertical_gr">
                        {expandedItem === index && (
                      <div className="answer" style={{ opacity: 1 }}>{item.answer}</div>      
                        )}
                       
                    </div>   
                        </div>
                    </div>
                    
                            
                    <div>
                    <img
                  src={pol1}
                  onClick={() => handleToggle(index)}
                  className={`icon ${iconFlipped === index ? 'flipped' : ''} `}
                  alt="Toggle Icon"
                />
                            </div>
                   
                </div>
                <div className={`horizontal-line ${expandedItem === index ? 'expanded' : ''}`}></div>
               </div>
           
            ))}
             
        </div>
    </section>
  );
};

export default AccordionMenu;
