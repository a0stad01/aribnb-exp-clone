import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Nav';
import data from './components/Data';



function App() { 
  return (
    <div className="App">
     <Navbar  />
     <Hero />
      <Card 
        items={data}
      />
    </div>
  );
}

export default App;
