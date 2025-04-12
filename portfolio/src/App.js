import './App.css';
import Header from './components/Header';
import GreetScreen from './components/GreetScreen';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <GreetScreen/>
      <Projects/>
    </div>
    
  );
}

export default App;
