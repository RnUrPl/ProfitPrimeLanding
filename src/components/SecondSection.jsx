import React, { useState } from 'react'
const videoPathGlobal = require('./assets/global.mp4');
const videoPathBinary = require('./assets/binary.mp4');
const plq = require('./assets/qwe.png')



const SecondSection = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState('1');
    const [prevMenuItem, setPrevMenuItem] = useState('1');
    

    const handleMenuItemClick = (menuItem) => {
      setSelectedMenuItem(menuItem);
      setPrevMenuItem(selectedMenuItem);

      const videoElement = document.querySelector('.video_mp');
      if (videoElement && videoElement.tagName.toLowerCase() === 'video') {
        videoElement.load();
      }
    };
 

      const getContentForMenuItem = () => {
        switch (selectedMenuItem) {
          case '1':
            return (
              <div className='lol1'>
                <span className="products_title">PROFIT PRIME GLOBAL</span>
                <div className="products_content">
                <img src={plq} className='plaq'>
                 
                </img>
                <span className='plaq_txt1'>67$</span>
                            <video className='video_mp' controls>
                            <source src={videoPathGlobal} type="video/mp4" />
                              
                            </video>
                           
                </div>
                <div className="products_text">Уникальный продукт, который перевернёт ваше представление об автоматизированной торговле. <br/><br/>
Обычно трейдеры стараются подбирать мелких брокеров, которые ещё не установили искусственную задержку при открытии сделок. Они вынуждены терять огромную прибыль и рисковать при выводе средств из-за бессилия перед несправедливыми ограничениями.<br/><br/>
Алгоритм системы Global устраняет задержки и снижает проскальзывание при открытии ордеров практически до нуля, что значительно расширяет список крупных брокеров, доступных для торговли. <br/><br/>
Забудьте навсегда об ограничениях и работайте по-крупному вместе с PROFIT PRIME gLOBAL.</div>
                <div className="products_btn">Получить бесплатный ключ на 24 часа </div>
              </div>
            );
          case '2':
            return (
              <div className='lol1'>
                <span className="products_title">PROFIT PRIME Forex</span>
                <div className="products_content">
                <img src={plq} className='plaq'>
                 
                 </img>
                <span className='plaq_txt'>887$</span>
                <video className='video_mp' controls>
                            <source src={videoPathGlobal} type="video/mp4" />
                              
                            </video>
                </div>
                <div className="products_text">profit prime forex объединяет в себе такие технологии, как опережение по скорости котировок, расчет цен активов на основании исторических показателей, арбитраж между счетами и предотвращение проскальзывания. <br/><br/>
Все самые продвинутые технологии теперь адаптированы для торговли на крупнейшем рынке планеты - международном рынке forex. <br/><br/>
Валютные пары, криптовалюты, акции, индексы, металлы ­ — вам доступен любой существующий на торговых площадках актив. профессиональные трейдеры используют эту систему для прохождения проп экзаменов.<br/><br/>
Торговать с помощью profit prime forex - это как играть в шахматы с множеством фигур, управляя ими так, чтобы соперник даже не догадался о вашем следующем ходе. </div>
                <div className="products_btn">получить бесплатный ключ на 24 часа </div>
              </div>
            );
            case '3':
                return (
                  <div className='lol1'>
                    <span className="products_title">PROFIT PRIME AI</span>
                    <div className="products_content">
                    <img src={plq} className='plaq'>
                 
                 </img>
                <span className='plaq_txt'>987$</span>
                      <img src={require('./assets/ai.png')} className='video_mp' alt="video/mp4" />
                   
                    </div>
                    <div className="products_text">PROFIT PRIME AI - это апогей автоматизированной торговли на финансовых рынках. искусственный интеллект за долю секунды способен провести детальный анализ рынка и найти лучшую точку входа в сделку, на что у профессионального трейдера ушел бы не один час работы.<br/><br/>
Cистема специально обучена для анализа финансовых рынков. Она изучает всё: от мелких изменений в ценах и тенденциях до глобальных геополитических событий, влияющих на движение рынка.<br/><br/>
Алгоритм мгновенно реагирует, Как только появляются новости о корпоративных отчетах, стихийных бедствиях или важных политических решениях, определяя, как это повлияет на рынок. Он быстро адаптируется к изменениям, чтобы минимизировать риски и использовать уникальные возможности, возникающие в таких ситуациях.<br/><br/>
PROFIT PRIME AI - ваш личный трейдер и финансовый аналитик, который круглосуточно работает, чтобы заработать для вас максимальную прибыль.</div>
                    <div className="products_btn">ОФОРМИТЬ ПРЕДЗАКАЗ</div>
                  </div>
                );
                case '4':
                    return (
                      <div className='lol1'>
                        <span className="products_title">Profit Prime binary</span>
                        <div className="products_content">
                        <img src={plq} className='plaq'>
                 
                 </img>
                <span className='plaq_txt'>147$</span>
                          
                            <video className='video_mp' controls>
                            <source src={videoPathBinary} type="video/mp4" />
                              
                            </video>
                        </div>
                        <div className="products_text">Суть в том, что система Binary проверяет, насколько раньше брокера вы узнаете о цене актива. Сделки всегда открываются в момент опережения.<br/><br/>
Через 1-2 секунды брокер увидит актуальную цену, и заплатит вам за верный прогноз. чистое превосходство алгоритмов над человеком и никакой магии.</div>
                        <div className="products_btn">получить бесплатный ключ на 24 часа </div>
                      </div>
                    );
          
          default:
            return (
              <div className='lol1'>
                <span className="products_title">PROFIT PRIME GLOBAL</span>
                <div className="products_content">
                <img src={plq} className='plaq'>
                 
                 </img>
                <span className='plaq_txt'>887$</span>
                </div>
                <div className="products_text">Уникальный продукт, который перевернёт ваше представление об автоматизированной торговле. <br/><br/>
Обычно трейдеры стараются подбирать мелких брокеров, которые ещё не установили искусственную задержку при открытии сделок. Они вынуждены терять огромную прибыль и рисковать при выводе средств из-за бессилия перед несправедливыми ограничениями.<br/><br/>
Алгоритм системы Global устраняет задержки и снижает проскальзывание при открытии ордеров практически до нуля, что значительно расширяет список крупных брокеров, доступных для торговли. <br/><br/>
Забудьте навсегда об ограничениях и работайте по-крупному вместе с PROFIT PRIME gLOBAL.</div>
                <div className="products_btn">Получить бесплатный ключ на 24 часа </div>
              </div>
            );
        }
      };

      const getImagePath = () => {
        switch (selectedMenuItem) {
            case '1':
            return require('./assets/case1.png');
            case '2':
            return require('./assets/case2.png');
            case '3':
            return require('./assets/case3.png');
            case '4':
            return require('./assets/case4.png');
          default:
            return require('./assets/case1.png');
        }
      };

      const getCustomCssClassForImg = () => {
        switch (selectedMenuItem) {
          case '1':
            return 'custom-css-for-case1-img';
          case '2':
            return 'custom-css-for-case2-img';
          case '3':
            return 'custom-css-for-case3-img';
          case '4':
            return 'custom-css-for-case4-img';
          default:
            return 'custom-css-for-case1-img';
        }
      };


  return (
    <section id="products"className='products'>
        <span className='second_title'>О продуктах PROFIT PRIME</span>
        <div className="products_context">
            <div className="products_context_left">
                <div className="products_menu">
                <div className={`menu_item ${selectedMenuItem === '1' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('1')}>PROFIT PRIME GLOBAL</div>
            <div className={`menu_item ${selectedMenuItem === '2' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('2')}>PROFIT PRIME FOREX</div>
            <div className={`menu_item ${selectedMenuItem === '3' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('3')}>PROFIT PRIME AI</div>
            <div className={`menu_item ${selectedMenuItem === '4' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('4')}>PROFIT PRIME BINARY</div>
                </div>
                <div className="q">
                <img src={getImagePath()} 
            
            className={`products_img ${getCustomCssClassForImg()} fade`}
            />
            </div>

            </div>
            <div className="products_context_right">
          {getContentForMenuItem()}
        </div>
        </div>
    </section>
  )
}

export default SecondSection