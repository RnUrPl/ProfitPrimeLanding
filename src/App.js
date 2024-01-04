
import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

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
      <SecondSection/>
      <ThirdSection/>
      </div>
    
    </div>
  );
}

export default App;
