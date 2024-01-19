
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






function App() {


  return (
    <div className="App">
      <div className='app2'>
        <div className='app1'>

          <Navbar/>
          <MainSection/>
      
        
       
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
