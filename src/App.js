
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Vehicles from './components/Vehicles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [page, setPage] = useState('vehicles');
 
  return (
    
    <div className="App">
    
      <header>
         <Navbar 
          page={page}
          setPage={setPage}
         />
      </header>


      <main>
        <Main page={page}/>
      </main>

      



      

    </div>
  );
}

export default App;
