import React from 'react'

const Footer = () => {
  return (
    <section className='footer'>
         <span className='footer_txt'>ALL RIGHTS RESERVED<br/>© 2024, PROFIT PRIME.</span>
        <div className="footer_el_gr">
           
            <div className="footer_el">Продукты</div>
            <div className="footer_el">О компании</div>
        </div>
        <div className="footer_el_gr2">
           
           <div className="footer_el">Отзывы</div>
           <div className="footer_el">FAQ</div>
       </div>
       <span className='footer_txt2'>Public offer contract <br/>
Privacy Policy</span>
    </section>
  )
}

export default Footer