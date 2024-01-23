import React from 'react';
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vaector2.png'
import TradersSlider from '../TradersSlider';



const TradersSection = () => {
    
  return (
    <section id='traders' className='traders'>
        <div className="trade_titile">Что говорят клиенты о<br/> наших торговых системах</div>
        <div className="trade_group">
            <div className="trade_subtitle">Чтобы посмотреть сделки наших клиентов,<br/> нажмите на знак $ возле имени</div>
            <div className="vector_group">
            <img src={vector1} className='prv custom-prev disabled' alt='vecto1'/>
            <img src={vector2} className='nxt custom-next' alt='vector2'/>
            </div>
        </div>
        
          <TradersSlider/>
      
    </section>
  )
}

export default TradersSection