import './App.css';
import LoadExample from './Components/Examples';
import RenderHeader from './Components/Header';
import LoadMain from './Components/Main';
import LoadPricing from './Components/Pricing';
import './Styles/Header.css'



function App() {
  return (
    <div className="App">
      <RenderHeader/>
      <LoadPricing />
    </div>
  );
}

export default App;
