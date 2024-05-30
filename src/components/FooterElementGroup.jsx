import React from 'react'
import ScrollToSection from './ScrollToSection';
const FooterElementGroup = ({t}) => {
    var scrollToSection = ScrollToSection();
  return (
    <>
    <div className="footer_el_gr">
           
            <div 
             onClick={() => scrollToSection('products')}
             className="footer_el">{t("navprod")}</div>
            <div 
              onClick={() => scrollToSection('company')}
            className="footer_el">{t("navcomp")}</div>
        </div>
        <div className="footer_el_gr2">
           
           <div
            onClick={() => scrollToSection('traders')}
           className="footer_el">{t("navotz")}</div>
           <div 
              onClick={() => scrollToSection('faq')}
           className="footer_el">FAQ</div>
       </div>
       </>
  )
}

export default FooterElementGroup