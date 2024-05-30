import React from 'react'
import ScrollToSection from './ScrollToSection'

const NavElementGroup = ({t}) => {
    var scrollToSection = ScrollToSection();
  return (
    <div className="nav-list">
      <div 
      onClick={() => scrollToSection('products')}
      className="nav-list_el navprod">{t("navprod")}</div>
      <div
      onClick={() => scrollToSection('traders')}
      className="nav-list_el navotz">{t("navotz")}</div>
      <div 
      onClick={() => scrollToSection('company')}
      className="nav-list_el ww navcomp">{t("navcomp")}</div>
      <div 
      onClick={() => scrollToSection('contacts')}
      className="nav-list_el navcont">{t("navcont")}</div>
      <div 
      onClick={() => scrollToSection('faq')}
      className="nav-list_el">FAQ</div>
    </div>
  )
}

export default NavElementGroup