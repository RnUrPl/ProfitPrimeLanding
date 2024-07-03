import React from 'react';
import ProductsMenu from '../ProductsMenu';
import { LANGUAGE_STYLES } from '../constants';
import PartnerLogosCarousel from '../PartnersSlider';

const ProductsSection = ({t,currentlanguage}) => {
  const getTextClass = (language) => LANGUAGE_STYLES[language] || 'default-text';

  const txtClass = getTextClass(currentlanguage);



  return (
    <section id="products" className="products">
      <span className={`oprod ${txtClass}`} >{t("oprod")}</span>
      <ProductsMenu t={t}/>
 
    </section>
  );
};

export default ProductsSection;
