import React, { useEffect, useState }  from 'react'
import case1mg from './assets/case1.png'
import case2mg from './assets/case2.png'
import case3mg from './assets/case3.png'
import case4mg from './assets/case4.png'
import BinaryModal from './Modals/BinaryModal';
import ForexModal from './Modals/ForexModal';
import plq from './assets/qwe.png';
import aipng  from './assets/ai.png'
import ScrollToSection from './ScrollToSection';
import forexImg from './assets/products_forex.jpeg'
import PlusModal from './Modals/PlusModal'

const ProductsMenu = ({t}) => {
    var [isModalOpen, setIsModalOpen] = useState(false);
    var [selectedMenuItem, setSelectedMenuItem] = useState('1');
    var [transitioning, setTransitioning] = useState(false);
  
    var handleMenuItemClick = (menuItem) => {
      setTransitioning(true);
  
      setTimeout(() => {
        resetImg()
        setSelectedMenuItem(menuItem);
  
  
      }, 500);
  
      setTimeout(() => {
  
        setTransitioning(false);
  
      }, 1500);
    };
  
  
    var resetImg = () => {
      var imgEl = document.querySelector('.products_img');
      if (imgEl) {
        imgEl.onload = function() {
        };
      }
    };
  
    const scrollToSection = ScrollToSection();
  
    useEffect(() => {
      if (isModalOpen) {
        scrollToSection('nm');
      }
    }, [isModalOpen, scrollToSection]);
  
  
  
    var openModal = () => {
      setIsModalOpen(true);
      scrollToSection('nm');
    };
  
    var getContentForMenuItem = () => {
      switch (selectedMenuItem) {
        case '3':
          return (
            <div className='lol1'>
              <span className="products_title">PROFIT PRIME GLOBAL</span>
              <div className="products_content">
              <img src={plq} className='plaq' alt='plaq'>
               
              </img>
              <span className='plaq_txt1'>67$</span>
              <iframe className='video_mp' src="https://www.youtube.com/embed/HZY4A5HiFcc?si=rIj7j1yokfQktejW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                         
              </div>
              <div className="products_text"> {t("globtxt1")}<br/><br/>{t("globtxt2")}<br/><br/>{t("globtxt3")} <br/><br/>{t("globtxt4")}<span className='bold'>PROFIT PRIME GLOBAL</span>.</div>
          
              
              <div href='https://t.me/NDR_PROFIT'className="products_btn" target='_blank'rel="noreferrer"><span className='products_btn_txt'>{t("globtest1")}</span> </div>
             
            </div>
            
          );
        case '4':
          return (
            <div className='lol1'>
              <span className="products_title">PROFIT PRIME Forex</span>
              <div className="products_content">
              <img src={plq} className='plaq' alt='plaq'>
               
               </img>
              <span className='plaq_txt'>887$</span>
              <img src={forexImg} className='video_mp' alt="video/mp4" />
              </div>
              <div className="products_text"><span className='bold'>PROFIT PRIME FOREX </span> {t("forextxt1")}<br/><br/>
  
 {t("frxtxt2")}<br/><br/>
  
  {t("frxtxt3")}<br/><br/>
  
 {t("frxtxt4")} <span className='bold'>PROFIT PRIME FOREX</span>{t("frxtxt5")}</div>
  <div className="kek"><div className="dop_text" onClick={() => {  setIsModalOpen(true);}}>{t("frxtxt6")} </div> </div>
              {isModalOpen && <BinaryModal t={t}  closeModal={() => setIsModalOpen(false)} /> }
  <a href='https://t.me/NDR_PROFIT' className="products_btn" target='_blank'rel="noreferrer"><span className='products_btn_txt'>{t("globtest")}</span> </a>
            </div>
          );
          case '5':
              return (
                <div className='lol1'>
                  <span className="products_title">PROFIT PRIME AI</span>
                  <div className="products_content">
                  <img src={plq} className='plaq' alt='plaq'>
               
               </img>
              <span className='plaq_txt'>987$</span>
                    <img src={aipng} className='video_mp' alt="video/mp4" />
                 
                  </div>
                  <div className="products_text"><span className='bold'>PROFIT PRIME AI</span>{t("aitxt1")}<br/><br/>
  
  {t("aitxt2")}<br/><br/>
  
  {t("aitxt3")}<br/><br/>
  
  <span className='bold'>PROFIT PRIME AI</span> {t("aitxt4")}
  </div>
  
  <a href='https://t.me/NDR_PROFIT' className="products_btn"target='_blank'rel="noreferrer"><span className='products_btn_txt'>{t("aibut")}</span> </a>
  
                </div>
              );
              case '1':
                  return (
                    <div className='lol1'>
                      <span className="products_title">Profit Prime Basic</span>
                      <div className="products_content">
                      <img src={plq} className='plaq' alt='plaq'>
               
               </img>
              <span className='plaq_txt'>147$</span>
                        
              <iframe className='video_mp' src="https://www.youtube.com/embed/6zOKG1uPRMs?si=esffDDEU3FO8vyhq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      </div>
                      <div className="products_text">{t("bintxt1")}<span className='bold'>Basic</span> {t("bintxt2")}
  <br/><br/>
  {t("bintxt3")}</div>
  <div className="kek"><div className="dop_text" onClick={openModal}>{t("frxtxt6")}</div>  </div>
  {isModalOpen && <ForexModal t={t}  closeModal={() => setIsModalOpen(false)} />}
  <a href='https://t.me/NDR_PROFIT' className="products_btn"target='_blank'rel="noreferrer"><span className='products_btn_txt'>{t("globtest")}</span> </a>
  
                    </div>
                  );
                  case '2':
                  return (
                    <div className='lol1'>
                      <span className="products_title">Profit Prime Plus</span>
                      <div className="products_content">
                      <img src={plq} className='plaq' alt='plaq'>
               
               </img>
              <span className='plaq_txt'>247$</span>
                        
              <iframe className='video_mp' src="https://www.youtube.com/embed/vzpH8s8LVFI?si=tWP9tuN7LSB_qm1F"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      </div>
                      <div className="products_text">{t("bintxt31")}<span className='bold'>Plus</span> {t("bintxt41")}
  <br/><br/>
  {t("bintxt3")}</div>
  <div className="kek"><div className="dop_text" onClick={openModal}>{t("frxtxt6")}</div>  </div>
  {isModalOpen && <PlusModal t={t}  closeModal={() => setIsModalOpen(false)} />}
  <a href='https://t.me/NDR_PROFIT' className="products_btn"target='_blank'rel="noreferrer"><span className='products_btn_txt'>{t("globtest")}</span> </a>
  
                    </div>
                  );
        
        default:
          
      }
    };
  
    var getImageAndCssPath = () => {
      switch (selectedMenuItem) {
        case '3':
          return { imgPath: case1mg, cssClass: 'custom-css-for-case1-img' };
        case '4':
          return { imgPath: case2mg, cssClass: 'custom-css-for-case2-img' };
        case '5':
          return { imgPath: case3mg, cssClass: 'custom-css-for-case3-img' };
        case '1':
          return { imgPath: case4mg, cssClass: 'custom-css-for-case4-img' };
          case '2':
            return { imgPath: case4mg, cssClass: 'custom-css-for-case4-img' };
        default:
          return { imgPath: case4mg, cssClass: 'custom-css-for-case4-img' };
      }
    };
    
  return (
    <div className="products_context">
    <div className="products_context_left">
      <div className="products_menu">
        {[1, 2, 3, 4,5].map((menuItem) => (
          <div
            key={menuItem}
            className={`menu_item ${selectedMenuItem === menuItem.toString() ? 'selected' : ''}`}
            onClick={() => handleMenuItemClick(menuItem.toString())}
          >
            PROFIT PRIME {['BASIC','PLUS', 'GLOBAL', 'FOREX', 'AI'][menuItem - 1]}
          </div>
        ))}
      </div>
      <div className={`q ${transitioning ? 'transitioning' : ''}`}>
        <img
          src={getImageAndCssPath().imgPath}
          className={`products_img ${getImageAndCssPath().cssClass}`}
          alt="product"
        />
      </div>
    </div>
    <div className={`products_context_right ${transitioning ? 'transitioning' : ''}`}>
      {getContentForMenuItem()}
    </div>
  </div>
  )
}

export default ProductsMenu