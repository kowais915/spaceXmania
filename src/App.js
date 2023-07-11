
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Vehicles from './components/Vehicles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import {useQuery, QueryClient, QueryClientProvider} from '@tanstack/react-query';



function App() {
  const [page, setPage] = useState('vehicles');
  const queryClient = new QueryClient();

  // const fetchData =  async ()=>{
  //   const response = await fetch();
  //   return response.json();

  // }

//  const vehiclesQuery =  useQuery({
//     queryKey: 'vehicles',
//     queryFn: async ()=>{
//       const response = await fetch("https://api.spacexdata.com/v4/rockets");
//       return response.json();
//     }
//   })

  
 
  
  return (

    <QueryClientProvider client={queryClient}>
    
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
    </QueryClientProvider>
  );
}

export default App;
