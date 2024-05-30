import React, { useState } from 'react'
import pol1 from './assets/pol1.png'

const QuestionsMenu = ({t}) => {
    const [expandedItem, setExpandedItem] = useState(null);
    const [iconFlipped, setIconFlipped] = useState(false);
  
    const menuItems = [
      {
          num: '01',
        question: t("q2"),
        sub: t("s2"),
        answer: t("a2"),
      },
      {
          num: '02',  
          question: t("q3"),
          sub: t("s3"),
          answer: t("a3"),
        },
        {
          num: '03',
          question: t("q4"),
          sub: t("s4"),
          answer: t("a4"),
        },
        {
          num: '04',
          question: t("q5"),
          sub: t("s5"),
          answer: t("a5"),
        },
        {
          num: '05',
          question: t("q6"),
          sub: t("s6"),
          answer: t("a6"),
        },
        {
          num: '06',
          question: t("q7"),
          sub: t("s7"),
          answer: t("a7"),
        },
  
    ];
  
    const handleToggle = (index) => {
      setExpandedItem((prevIndex) => (prevIndex === index ? null : index));
      setIconFlipped((prevIndex) => (prevIndex === index ? null : index));
    };
  return (
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
  )
}

export default QuestionsMenu