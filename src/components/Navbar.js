import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button'
import { ButtonBase } from "@mui/material";
import styles from '../styles/Navbar.module.css'


const Navbar = ({page, setPage}) => {

    
    return (  

        <nav className={styles.container}>

           <div className={styles.brand}>
                <h1>SpaceX Mania</h1>
           </div>

           <div className={styles.links}>
                
                <Button 
                    className={styles.button} 
                    variant="contained"
                    onClick={()=> setPage('vehicles')}
                >
                    Vehicles
                </Button>

                <Button  
                    className={styles.button} 
                    variant="contained"
                    onClick={()=> setPage('launchpads')}
                    >
                        Launchpads
                </Button>
               

           </div>


        </nav>
    );
}
 
export default Navbar;