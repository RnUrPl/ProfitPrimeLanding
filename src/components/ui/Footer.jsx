import React from 'react'
import FooterElementGroup from '../FooterElementGroup'


const Footer = ({t}) => {


  return (
    <section className='footer'>
      <div className="clasq">
      <span className='footer_txt'>ALL RIGHTS RESERVED<br/>© 2024, PROFIT PRIME.</span>
        <FooterElementGroup t={t}/>
      </div>
         
       <span className='footer_txt2'>Public offer contract <br/>
Privacy Policy</span>
    </section>
  )
}

export default Footer