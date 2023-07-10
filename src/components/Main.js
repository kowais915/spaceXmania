
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Vehicles from './Vehicles';
import Launchpads from './Launchpads';


const Main= ({page}) => {
    return (

        <Container>
            <div className='main'>
            
                <h1>
                    {page == 'vehicles' ? <Vehicles/> : <Launchpads/>}
                </h1>
            
            </div>
        </Container>
      );
}
 
export default Main;