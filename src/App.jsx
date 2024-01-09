
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
        <ProductsSection/>
        <ConsSection/>
        <TradersSection/>
      </div>
      <div className="app3">
        <div className="app1">
            <CompanySection/>
        </div>
      </div>
      <div className="app1">
        <TeamSection/>
        <AccordionMenu/>
        <ContacsSection/>
        <Footer/>
      </div>

     
    
    </div>
  );
}

export default App;
