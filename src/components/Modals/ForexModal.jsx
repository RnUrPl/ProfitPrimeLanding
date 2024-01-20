import React from 'react';


const ForexModal = ({  closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="Nmodal" id='nm'>
        <button className="close-button" onClick={closeModal}>
        ✖
        </button>


        <span className='newModal_txt'>

ДЛЯ МАКСИМИЗАЦИИ ПРИБЫЛИ ТРЕЙДЕРУ ДОСТУПНЫ ДВА РЕЖИМА ТОРГОВЛИ, ПОСТРОЕННЫХ НА АНАЛИЗЕ РАЗРЫВОВ И ИМПУЛЬСОВ.<br/><br/>

<span className='bold'>РЕЖИМ АНАЛИЗА РАЗРЫВОВ.</span><br/><br/>
ВО ВРЕМЯ РАБОТЫ торговая СИСТЕМА использует специальные алгоритмы для ПРОВЕРКИ скорости передачи данных о текущих котировках. Сравнивается скорость в двух парах: поставщик/брокер и поставщик/трейдер.<br/><br/>
трейдер всегда получает данные раньше брокера, ПОЭТОМУ появляется возможность для опережения - открытия СДЕЛОК на 1-2 секунды раньше, чем эти данные ПОЯВЯТСЯ У БРОКЕРА. ТАКИМ ОБРАЗОМ ДЛЯ БРОКЕРА ВЫ КАК БЫ “ПРЕДСКАЗЫВАЕТЕ” ЦЕНУ АКТИВА И ЗАРАБАТЫВАЕТЕ НА ПРАВИЛЬНОМ ПРОГНОЗЕ. <br/><br/>

<span className='bold'>РЕЖИМ АНАЛИЗА ИМПУЛЬСОВ.</span><br/><br/>
АЛГОРИТМ ДАННОГО РЕЖИМА РАБОТАЕТ СЛЕДУЮЩИМ ОБРАЗОМ: ТРЕЙДЕР ЗАДАЁТ ЗНАЧЕНИЕ ИМПУЛЬСА - скачка цены на графике В ОДНУ ИЗ СТОРОН.<br/><br/>
СИСТЕМА binary ОТСЛЕЖИВАЕТ эти движения в реальном времени И моментально ОТКРЫВАЕТ сделки во время резких изменений цены.<br/><br/>

<span className='bold'>алгоритм вычисления ТРЕНДОВ.</span> <br/><br/>

умный алгоритм использует такие методы, как анализ цен и Волновое исследование, а также учитывает множество Экономических показателей, ЧТОБЫ максимально повысить долю успешных решений.<br/><br/>

<span className='bold'>широкий выбор поставщиков котировок.</span><br/><br/>

МЫ ПРЕДОСТАВЛЯЕМ ДОСТУП К ДАННЫМ О КОТИРОВКАХ ОТ ТРЁХ САМЫХ БЫСТРЫХ ПОСТАВЩИКОВ НА РЫНКЕ, ЧТОБЫ ВЫ МОГЛИ ПОДОБРАТЬ ОПТИМАЛЬНУЮ СВЯЗКУ ДЛЯ РАЗЛИЧНЫХ БРОКЕРОВ. <br/><br/>

<span className='bold'>торговля на нескольких аккаунтах.</span><br/><br/>

система binary легко настраиается для одновременной работы с десятками аккаунтов. нужно всего лишь выбрать расположение кнопок BUY/Sell на экране для каждого открытого графика.<br/><br/>
        </span>
        

      </div>
    </div>
  );
};

export default ForexModal;