import React from 'react'
import ContactForm from '../ContactForm'

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
        <ContactForm/>
    </section>
  )
}

export default ContacsSection