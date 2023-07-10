import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button'
import { ButtonBase } from "@mui/material";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (  

        <nav className={styles.container}>

           <div className={styles.brand}>
                <h1>SpaceX Mania</h1>
           </div>

           <div className="links">
                
                <Button className={styles.button} variant="contained">Vehicles</Button>
                <Button  className={styles.button} variant="contained">Launchpads</Button>
               

           </div>


        </nav>
    );
}
 
export default Navbar;