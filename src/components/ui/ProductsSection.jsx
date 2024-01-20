import React, { useEffect, useState } from 'react';
import case1mg from '../assets/case1.png'
import case2mg from '../assets/case2.png'
import case3mg from '../assets/case3.png'
import case4mg from '../assets/case4.png'
import BinaryModal from '../Modals/BinaryModal';
import ForexModal from '../Modals/ForexModal';
import plq from '../assets/qwe.png';
import aipng  from '../assets/ai.png'
import ScrollToSection from '../ScrollToSection';


const ProductsSection = () => {
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
      scrollToSection();
    }
  }, [isModalOpen, scrollToSection]);



  var openModal = () => {
    setIsModalOpen(true);
    scrollToSection();
  };

  var getContentForMenuItem = () => {
    switch (selectedMenuItem) {
      case '2':
        return (
          <div className='lol1'>
            <span className="products_title">PROFIT PRIME GLOBAL</span>
            <div className="products_content">
            <img src={plq} className='plaq' alt='plaq'>
             
            </img>
            <span className='plaq_txt1'>67$</span>
            <iframe className='video_mp' src="https://www.youtube.com/embed/HZY4A5HiFcc?si=rIj7j1yokfQktejW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                       
            </div>
            <div className="products_text">Уникальный продукт, который перевернёт ваше представление об автоматизированной торговле. <br/><br/>
Обычно трейдеры стараются подбирать мелких брокеров, которые ещё не установили искусственную задержку при открытии сделок. Они вынуждены терять огромную прибыль и рисковать при выводе средств из-за бессилия перед несправедливыми ограничениями.<br/><br/>
Алгоритм системы Global устраняет задержки и снижает проскальзывание при открытии ордеров практически до нуля, что значительно расширяет список крупных брокеров, доступных для торговли. <br/><br/>
Забудьте навсегда об ограничениях и работайте по-крупному вместе с <span className='bold'>PROFIT PRIME GLOBAL</span>.</div>
        
            
            <a href='https://t.me/Matvey_Polozkov'className="products_btn" target='_blank'rel="noreferrer"><span className='products_btn_txt'>Получить бесплатный тестовый ключ</span> </a>
           
          </div>
          
        );
      case '3':
        return (
          <div className='lol1'>
            <span className="products_title">PROFIT PRIME Forex</span>
            <div className="products_content">
            <img src={plq} className='plaq' alt='plaq'>
             
             </img>
            <span className='plaq_txt'>887$</span>
            <iframe className='video_mp' src="https://www.youtube.com/embed/HZY4A5HiFcc?si=rIj7j1yokfQktejW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="products_text"><span className='bold'>PROFIT PRIME FOREX</span> объединяет в себе такие технологии, как опережение по скорости котировок, расчет цен активов на основании исторических показателей, арбитраж между счетами и предотвращение проскальзывания. <br/><br/>
Все самые продвинутые технологии теперь адаптированы для торговли на крупнейшем рынке планеты - международном рынке forex. <br/><br/>
Валютные пары, криптовалюты, акции, индексы, металлы ­ — вам доступен любой существующий на торговых площадках актив. профессиональные трейдеры используют эту систему для прохождения проп экзаменов.<br/><br/>
Торговать с помощью <span className='bold'>PROFIT PRIME FOREX</span> - это как играть в шахматы с множеством фигур, управляя ими так, чтобы соперник даже не догадался о вашем следующем ходе. </div>
<div className="kek"><div className="dop_text" onClick={() => {  setIsModalOpen(true);}}>Ключевые особенности продукта</div>  </div>
            {isModalOpen && <ForexModal  closeModal={() => setIsModalOpen(false)} /> }
<a href='https://t.me/Matvey_Polozkov' className="products_btn" target='_blank'rel="noreferrer"><span className='products_btn_txt'>Получить бесплатный тестовый ключ</span> </a>
          </div>
        );
        case '4':
            return (
              <div className='lol1'>
                <span className="products_title">PROFIT PRIME AI</span>
                <div className="products_content">
                <img src={plq} className='plaq' alt='plaq'>
             
             </img>
            <span className='plaq_txt'>987$</span>
                  <img src={aipng} className='video_mp' alt="video/mp4" />
               
                </div>
                <div className="products_text"><span className='bold'>PROFIT PRIME AI</span> - это апогей автоматизированной торговли на финансовых рынках. искусственный интеллект за долю секунды способен провести детальный анализ рынка и найти лучшую точку входа в сделку, на что у профессионального трейдера ушел бы не один час работы.<br/><br/>
Cистема специально обучена для анализа финансовых рынков. Она изучает всё: от мелких изменений в ценах и тенденциях до глобальных геополитических событий, влияющих на движение рынка.<br/><br/>
Алгоритм мгновенно реагирует, Как только появляются новости о корпоративных отчетах, стихийных бедствиях или важных политических решениях, определяя, как это повлияет на рынок. Он быстро адаптируется к изменениям, чтобы минимизировать риски и использовать уникальные возможности, возникающие в таких ситуациях.<br/><br/>
<span className='bold'>PROFIT PRIME AI</span> - ваш личный трейдер и финансовый аналитик, который круглосуточно работает, чтобы заработать для вас максимальную прибыль.</div>

<a href='https://t.me/Matvey_Polozkov' className="products_btn"target='_blank'rel="noreferrer"><span className='products_btn_txt'>Оформить предзаказ</span> </a>

              </div>
            );
            case '1':
                return (
                  <div className='lol1'>
                    <span className="products_title">Profit Prime binary</span>
                    <div className="products_content">
                    <img src={plq} className='plaq' alt='plaq'>
             
             </img>
            <span className='plaq_txt'>147$</span>
                      
            <iframe className='video_mp' src="https://www.youtube.com/embed/6zOKG1uPRMs?si=8_RITCEijSUxaGfh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="products_text">Суть в том, что система <span className='bold'>Binary</span> проверяет, насколько раньше брокера вы узнаете о цене актива. Сделки всегда открываются в момент опережения.<br/><br/>
Через 1-2 секунды брокер увидит актуальную цену, и заплатит вам за верный прогноз. чистое превосходство алгоритмов над человеком и никакой магии.</div>
<div className="kek"><div className="dop_text" onClick={openModal}>Ключевые особенности продукта</div>  </div>
{isModalOpen && <BinaryModal  closeModal={() => setIsModalOpen(false)} />}
<div className="products_btn"><span className='products_btn_txt'>Получить бесплатный тестовый ключ </span> </div>

                  </div>
                );
      
      default:
        return (
          <div className='lol1'>
          <span className="products_title">Profit Prime binary</span>
          <div className="products_content">
    <img src={plq} className='plaq' alt='plaq'>
   
   </img>
  <span className='plaq_txt'>147$</span>
            
  <iframe className='video_mp' src="https://www.youtube.com/embed/6zOKG1uPRMs?si=8_RITCEijSUxaGfh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="products_text">Суть в том, что система Binary проверяет, насколько раньше брокера вы узнаете о цене актива. Сделки всегда открываются в момент опережения.<br/><br/>
Через 1-2 секунды брокер увидит актуальную цену, и заплатит вам за верный прогноз. чистое превосходство алгоритмов над человеком и никакой магии.</div>
<div className="products_btn"><span className='products_btn_txt'>Получить бесплатный тестовый ключ</span> </div>
        </div>
        );
    }
  };

  var getImageAndCssPath = () => {
    switch (selectedMenuItem) {
      case '2':
        return { imgPath: case1mg, cssClass: 'custom-css-for-case1-img' };
      case '3':
        return { imgPath: case2mg, cssClass: 'custom-css-for-case2-img' };
      case '4':
        return { imgPath: case3mg, cssClass: 'custom-css-for-case3-img' };
      case '1':
        return { imgPath: case4mg, cssClass: 'custom-css-for-case4-img' };
      default:
        return { imgPath: case4mg, cssClass: 'custom-css-for-case4-img' };
    }
  };

  return (
    <section id="products" className="products">
      <span className="second_title">О продуктах PROFIT PRIME</span>
      <div className="products_context">
        <div className="products_context_left">
          <div className="products_menu">
            {[1, 2, 3, 4].map((menuItem) => (
              <div
                key={menuItem}
                className={`menu_item ${selectedMenuItem === menuItem.toString() ? 'selected' : ''}`}
                onClick={() => handleMenuItemClick(menuItem.toString())}
              >
                PROFIT PRIME {['BINARY', 'GLOBAL', 'FOREX', 'AI'][menuItem - 1]}
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

    </section>
  );
};

export default ProductsSection;
