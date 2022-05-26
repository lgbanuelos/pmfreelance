import logo from './logo.svg';
import './App.css';
import FrelanceWork from './components/FreelanceWork';

function App() {
  const web3 = "My fake web3";
  
  return (
    <div className="App">
      <FrelanceWork web3={web3}></FrelanceWork>
    </div>
  );
}

export default App;
