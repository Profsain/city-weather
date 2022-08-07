import CitiesList from './components/CitiesList';
import './styles/App.css';

const App = () => (
  <div className="App">
    <h1>Welcome to City Weather</h1>
    <h4>Find out the weather condition in your city.</h4>
    <CitiesList />
  </div>
);

export default App;
