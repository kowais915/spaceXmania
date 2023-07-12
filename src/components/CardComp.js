import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import styles from '../styles/Card.module.css';

const CardComp = ({title, pic, desc, name}) => {
   


  
    return ( 

        <Card className={styles.card}>

            <CardMedia
                sx={{ height: 140 }}
                image = {`${pic}`}
                title="vehicle"

                 
            />


            {/* card content */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                   {desc}
                </Typography>

                <CardActions>
                    <Button size='small'>
                        Like
                    </Button>

                    <Button size='small'>
                        Share
                    </Button>
                </CardActions>

            </CardContent>

           
        </Card>
     );
}
 
export default CardComp;