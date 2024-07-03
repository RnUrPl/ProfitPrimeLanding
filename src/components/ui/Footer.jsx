import React, { useState } from 'react'
import FooterElementGroup from '../FooterElementGroup'
import Disclaimer from '../Modals/Disclaimer';


const Footer = ({t}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='footer'>
      <div className="clasq">
      <span className='footer_txt'>ALL RIGHTS RESERVED<br/>© 2024, PROFIT PRIME.</span>
        <FooterElementGroup t={t}/>
      </div>
         
       <span className='footer_txt2' onClick={() => {setIsModalOpen(true);}}>Public offer contract <br/>
Privacy Policy</span>
{isModalOpen && <Disclaimer closeModal={() => setIsModalOpen(false)} />}
    </section>
  )
}

export default Footer