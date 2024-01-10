
import './App.css';
import CompanySection from './components/CompanySection';
import ContacsSection from './components/ContacsSection';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import AccordionMenu from './components/QuestionsSection';
import ProductsSection from './components/ProductsSection';
import TeamSection from './components/TeamSection';
import ConsSection from './components/ConsSection';
import TradersSection from './components/TradersSection';
import { animated, useSpring } from '@react-spring/web'
import Section from './components/Section';
import Animation from './components/Anmation';





function App() {


  return (
    <div className="App">
      <div className='app2'>
        <div className='app1'>
          <Navbar/>
          <Section>
          <MainSection/>
          </Section>
        </div>
      </div>
      <div className='app1'>
        <Animation>
         <ProductsSection/>
        </Animation>
        <Section>
            <ConsSection />
            </Section>
            <Animation>
            <TradersSection />
            </Animation>
      
         
      </div>
      <div className="app3">
        <div className="app1">
          <Section>
            <CompanySection/>
            </Section>
        </div>
      </div>
      <div className="app1">
        <Section>
          <TeamSection/>
        </Section>
        <Section>
        <AccordionMenu/>
        </Section>
        <Section>
        <ContacsSection/>
        </Section>
        <Animation>
        <Footer/>
        </Animation>
      </div>

     
    
    </div>
  );
}

export default App;
