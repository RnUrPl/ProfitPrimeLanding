import React from 'react'
import barPng from '../assets/bar.png'

const ConsSection = () => {
  return (
    <section className='about'>
        <span className='about_title'>PROFIT PRIME ACADEMY</span>
        <div className="cons_section">
            <div className="cons_hor_gr">
                <div className="vertical-line"/>
                <div className="con">          
                    <div className="con_title">01</div>
                    <div className="con_subtitle">Сообщество трейдеров самого разного уровня: от новичков и до профессионалов с 6-летним опытом, которые каждый день общаются в закрытом чате, разрабатывают стратегии и обсуждают изменения на рынке.</div>
                </div>
                <div className="vertical-line"/>
                <div className="con">         
                    <div className="con_title">02</div>
                    <div className="con_subtitle">Участники академии получают подробное обучение по таким важным темам, как: </div>
                    <div className="con_li">
                        <img src={barPng} className='bar_png' alt='barPng'/>
                        <div className="const_list">
                            <span className='const_txt'>Подбор брокеров для<br/> безопасной работы</span>
                            <span className='const_txt'>Анализ торговых пар</span>
                            <span className='const_txt'>Разработка собственной<br/> торговой стратегии</span>
                            <span className='const_txt'>Маскировка сделок</span>
                            <span className='const_txt'>Правильный вывод средств</span>
                            <span className='const_txt'>Поиск аккаунтов для торговли</span>
                            <span className='const_txt'>Общение со службой<br/> поддержки брокера</span>
                            <span className='const_txt'>Решение спорных ситуаций</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cons_hor_gr">
                <div className="vertical-line"></div>
                <div className="con">
                
                    <div className="con_title">03</div>
                    <div className="con_subtitle">Академия <span className='bold'>Profit Prime</span> - это больше, чем просто сильное комьюнити. Это полноценный инструмент, основанный на огромном опыте сотен трейдеров и разработчиков из 12 стран мира. </div>
                </div>
                <div className="vertical-line"></div>
                <div className="con">
        
                    <div className="con_title">04</div>
                    <div className="con_subtitle">Вам не нужно тратить время на  анализ и ошибки, если вы можете задать вопрос в чате  тому, кто уже проходил через эти трудности. В этом и заключается главная ценность <span className='bold'>PROFIT PRIME ACADEMY</span>.</div>
                </div>
            </div>
            
        </div>
        <a href='https://t.me/Matvey_Polozkov'  target='_blank'rel="noreferrer" className="about_btn"><span className="aboutbtn_txt">Стать участником Profit Prime Academy</span></a>
    </section>
  )
}

export default ConsSection