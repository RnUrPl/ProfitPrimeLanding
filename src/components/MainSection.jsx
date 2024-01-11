import React from 'react'
import EarthCanvas from './canvas/Earth'
import StarsCanvas from './canvas/Stars'

const MainSection = () => {
  return (
    <section className='main' >
    
      <div className='info'>
        <div className="info_title">
          получите стабильный источник
          валютного дохода с помощью
          торговых систем profit prime
        </div>
        <div className="info_subtit">
          Воспользуйтесь бесплатной консультацией 
          профессиональных трейдеров, чтобы подобрать
          наиболее подходящий продукт для ваших целей
        </div>
        <div className="qwer">
        <div className="moreinfo_btn"><span className='moreifo_txt'>Узнать подробности</span></div>
        </div>
       
      </div>
      <div className="earth">
      <EarthCanvas/>

      </div>

    </section>
    
  )
}

export default MainSection