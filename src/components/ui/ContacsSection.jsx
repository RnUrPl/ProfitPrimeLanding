import React, { useRef, useState } from 'react'
import tg from '../assets/tg.png'
import emailjs, { sendForm } from "@emailjs/browser";

const ContacsSection = () => {
    var formRef = useRef();
    var [form, setForm] = useState({
      name: "",
      number: "",
    });

    var handleChange = (e) => {
        var { target } = e;
        var { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };
      var handleSubmit = (e) => {
        e.preventDefault();

        const templateParams =  {
            from_name: form.name,
            to_name: "ProfitPrime",
            from_email: 'profitprimecontacs@gmail.com',
            number: form.number,
          }
    
    if(form.name !=='' && form.number !==''){
        emailjs
        .send(
          'service_tj7u6fd',
          'template_flm7myr',
          templateParams
         ,
          'xtTggU33fjQZ1fSJA'
        )
        .then(
          () => {
            alert("Спасибо, мы скоро с вами свяжемся!");
      
            setForm({
              name: "",
              number: "",
            });
          },
          (error) => {
        
  
            alert("Упс, что-то пошло не так..");
          }
        );
    }else{
        alert("Заполните пустые поля");
      }
    
    }
  
  return (
    <section id ='contacts' className='contacts'>
        <div className="contact_inf">
            <div className="contact_title">КОНТАКТЫ</div>
            <div className="contact_sub">
            Наши трейдеры бесплатно помогут вам <br/>подобрать наиболее подходящую<br/> торговую систему под ваши цели
            </div>
            <div className="contact_email">support@profitprime.pro</div>
        </div>
        <form      
           className="contact_form"
           ref={formRef}
          >
          
                <input placeholder='Имя' className='contact_input'
                              name='name'
                              value={form.name}
                              onChange={handleChange}
                ></input>
         
           
                <input placeholder='Телефон' className='contact_input'
                type='number'
                              name='number'
                              value={form.number}
                              onChange={handleChange}
                ></input>
            
            <div className="contact_btn_group">
                <div className="contact_btn"type="submit"  onClick={handleSubmit}>
                    <span className='contact_btn_txt'>Получить консультацию</span>
                </div>
                <a href='https://t.me/LossRecoveryProfitPrime' className="contact_tg" rel="noreferrer" target="_blank">
                    <img src={tg} alt='tg_png'/>
                </a>
            </div>
        </form>
    </section>
  )
}

export default ContacsSection