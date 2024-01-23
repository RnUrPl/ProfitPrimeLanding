import React from 'react'
import CircleAnimation from '../CircleAnimation'


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
          Воспользуйтесь бесплатной консультацией профессиональных трейдеров, чтобы подобрать
          наиболее подходящий продукт для ваших целей
        </div>
        <div className="qwer">
        <a href='https://t.me/LossRecoveryProfitPrime' rel="noreferrer" className="moreinfo_btn" target="_blank"><span className='moreifo_txt' >Узнать подробности</span></a>
        </div>
       
      </div>
      <div className="earth">
      <CircleAnimation/>
      </div>

    </section>
    
  )
}

export default MainSection