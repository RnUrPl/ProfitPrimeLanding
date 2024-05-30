
import CompanySection from './CompanySection';
import ContacsSection from './ContacsSection';
import Footer from './Footer';
import MainSection from './MainSection';
import Navbar from './Navbar';
import AccordionMenu from './QuestionsSection';
import ProductsSection from './ProductsSection';
import TeamSection from './TeamSection';
import ConsSection from './ConsSection';
import TradersSection from './TradersSection';
import Section from '../Section';
import Animation from '../Anmation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../DropDownMenu';






function App() {
 

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
 
  };
  
  const [showMainSection, setShowMainSection] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowMainSection(true);
    }, 1000);
    return () => clearTimeout(timerId);
  }, []); 

  return (
    <div className="App">

      <div className='app2'>
        <div className='app1'>

          <Navbar t={t} changeLanguage={changeLanguage}/>
          {showMainSection && <MainSection t={t} currentLanguage={currentLanguage}/>}
      
        
       
        </div>
      </div>
      <div className='app1'>
        <Animation>
         <ProductsSection t={t} currentlanguage={currentLanguage}/>
        </Animation>
        <Section>
            <ConsSection t={t} currentlanguage={currentLanguage}/>
            </Section>
            <Animation>
            <TradersSection t={t}  currentlanguage={currentLanguage}/>
            </Animation>
      </div>
      <div className="app3">
        <div className="app1">
          <Section>
            <CompanySection t={t} currentlanguage={currentLanguage}/>
            </Section>
        </div>
      </div>
      <div className="app1">
        <Section>
          <TeamSection t={t} currentlanguage={currentLanguage}/>
        </Section>
        <Section>
        <AccordionMenu t={t} currentlanguage={currentLanguage}/>
        </Section>
        <Section>
        <ContacsSection t={t} currentlanguage={currentLanguage}/>
        </Section>
        <Animation t={t}>
        <Footer t={t}/>
        </Animation>
      </div>

     
    
    </div>
  );
}

export default App;
