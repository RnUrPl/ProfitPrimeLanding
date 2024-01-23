import React, { useRef, useState } from 'react'
import tg from './assets/tg.png'
import emailjs from "@emailjs/browser";

var forbiddenWords = ['лох', 'пиздюк', 'хуй', 'пизда', 'говно', 'залупа', 'пенис', 'еблан', 'пидор', 'шлюха', 'говноед', 'блядь', 'блядина'];

const ContactForm = () => {
    var formRef = useRef();
    var [form, setForm] = useState({
      name: "",
      number: "",
    });
    function validateForm() {
      var inputValue = form.name.toLowerCase();
      var hasForbiddenWord = forbiddenWords.some(word => inputValue.includes(word));
      if (hasForbiddenWord) {
          alert('Обнаружено матерное слово. Пожалуйста, исправьте ввод.');
          return false; 
      }
      else if(form.name !=='' || form.number !==''){
        alert("Заполните пустые поля");
        return false; 
      }
      return true;
  }

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

        if (!validateForm()) {
          setForm({
            name: "",
            number: "",
          });
          return; 
      }

        const templateParams =  {
            from_name: form.name,
            to_name: "ProfitPrime",
            from_email: 'profitprimecontacs@gmail.com',
            number: form.number,
          }
    

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
    
    }

  return (
    <form      
    className="contact_form"
    ref={formRef}
   >
   
         <input placeholder='Имя' className='contact_input'
                       name='name'
                       value={form.name}
                       onChange={handleChange}
         ></input>
  
    
         <input placeholder='Телефон' className='contact_input disabled_scroll sc'
         type='number'
                       name='number'
                       value={form.number}
                         min='0'
                     
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
  )
}

export default ContactForm