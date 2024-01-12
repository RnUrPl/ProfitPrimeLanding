import React from 'react'

const CompanySection = () => {
  return (
    <section id="company" className='company'>
        <span className='abcomp_title'>О КОМПАНИИ PROFIT PRIME</span>
        <div className="abc_gr">
        <div className="abcomp_group">  
            <div className="abcomp_chunk">
                <div className="abcomp_box1">
                    <span className='box1_num'>5</span>
                    <div className="box1_group">
                        <span className="box1_title">начало пути</span>
                        <span className="box1_subtitle custom_scroll2">Пять лет назад мы начали свой путь как команда трейдеров-разработчиков, обеспечивая безопасность брокерских компаний. Мы разрабатывали программные решения для защиты от арбитражных команд, сохраняя миллионы долларов таким крупным брокерам, как <span className='bold'>Roboforex и Quotex</span>. За годы взаимодействия с крупнейшими игроками рынка мы узнали не только все тонкости их работы, но и неприятную правду о том, как они обходились со своими клиентами.</span>
                    </div>
                </div>
                <div className="abcomp_box2">
                    
                    <div className="box1_group">
                        <span className="box2_title">Новый вектор развития</span>
                        <span className="box2_subtitle">Искусственная задержка перед открытием сделок, резкое расширение спреда и проскальзывание при открытии ордеров - всё это заставило нас сменить вектор развития компании.</span>
                    </div>
                </div>
                {/* <div className="abcomp_box2"></div> */}
            </div>
            <img src={require('./assets/abcomp_img.png')} className='abcomp_img' alt='Traders'/>
        </div>
        <div className="abcomp_group">
            <div className="abcomp_box3">
            <div className="box1_group">
                <span className="box3_title">УНИКАЛЬНЫЕ РЕШЕНИЯ</span>
                <span className="box3_subtitle">Более 3-х лет мы разрабатываем продвинутые торговые системы, которые помогают начинающих трейдерам не только вернуть потерянные средства, но и начать по-настоящему зарабатывать на трейдинге.<br/><br/> Наша компания  ведёт активную разработку в области интеграции искусственного интеллекта в торговые системы для полной автоматизации анализа и открытия сделок. на данный момент мы выпустили на рынок 4 абсолютно уникальных продукта, которые обходят все существующие ограничения со стороны брокера.</span>
            </div>
            </div>
            <div className="abcomp_box4">
            <img src={require('./assets/box4_img.png')} className='box_img2'/>
            <div className="box1_group">
                <span className="box3_title">мы сопровождаем наших клиентов</span>
                <span className="box1_subtitle">Мы не только проводим консультации с клиентами, чтобы подобрать наиболее подходящий продукт для комфортной торговли, но и сопровождаем их на всём пути совместной работы. это наш главный принцип, благодаря которому нас выбирают тысячи экспертов и новичков в трейдинге на протяжении уже 3-х лет.</span>
            </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default CompanySection