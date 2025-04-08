import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GreetScreen from './components/GreetScreen';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <GreetScreen/>
        <AboutUs/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
