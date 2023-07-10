
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Vehicles from './components/Vehicles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
    
      <header>
         <Navbar/>
      </header>


      <main>
      <Main/>
      </main>

      



      

    </div>
  );
}

export default App;
