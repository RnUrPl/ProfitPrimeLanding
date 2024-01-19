import React from 'react'
import tg from '../assets/tg.png'

const ContacsSection = () => {
  return (
    <section id ='contacts' className='contacts'>
        <div className="contact_inf">
            <div className="contact_title">КОНТАКТЫ</div>
            <div className="contact_sub">
            Наши трейдеры бесплатно помогут вам <br/>подобрать наиболее подходящую<br/> торговую систему под ваши цели
            </div>
            <div className="contact_email">support@profitprime.pro</div>
        </div>
        <div className="contact_form">
          
                <input placeholder='Имя' className='contact_input'></input>
         
           
                <input placeholder='Телефон' className='contact_input'></input>
            
            <div className="contact_btn_group">
                <div className="contact_btn">
                    <span className='contact_btn_txt'>Получить консультацию</span>
                </div>
                <a href='https://t.me/LossRecoveryProfitPrime' className="contact_tg" target="_blank">
                    <img src={tg}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ContacsSection