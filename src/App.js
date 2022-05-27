import './App.css';
import FrelanceWork from './components/FreelanceWork';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import getWeb3 from './getWeb3';

function App() {
  const [web3, setWeb3] = useState();
  
  getWeb3().then(value => setWeb3(value))

  if (web3)
    return (
      <div className="App">
        <FrelanceWork web3={web3}></FrelanceWork>
      </div>
    );
  else
    return (
      <CircularProgress />
    )
}

export default App;
