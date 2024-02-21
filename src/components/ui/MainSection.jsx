import React from 'react'
import CircleAnimation from '../CircleAnimation'


const MainSection = () => {

  return (
    <section className='main' >
    
      <div className='info'>
        <h1>
          получите стабильный источник
          валютного дохода с помощью
          торговых систем profit prime
        </h1>
        <h2>
          Воспользуйтесь бесплатной консультацией профессиональных трейдеров, чтобы подобрать
          наиболее подходящий продукт для ваших целей
        </h2>
        <div className="qwer">
        <a href='https://t.me/LossRecoveryProfitPrime' rel="noreferrer" target="_blank"><span className='moreifo_txt' >Узнать подробности</span></a>
        </div>
       
      </div>
      <div className="earth">
      <CircleAnimation/>
      </div>

    </section>
    
  )
}

export default MainSection