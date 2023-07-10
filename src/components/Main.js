
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Vehicles from './Vehicles';
import Launchpads from './Launchpads';
import CardComp from './CardComp';


const Main= ({page}) => {
    return (

        <Container>
            <br></br>
            <div className='main'>
            
                <h1>
                    {page == 'vehicles' ? <Vehicles/> : <Launchpads/>}
                </h1>

             
            
            </div>
        </Container>
      );
}
 
export default Main;