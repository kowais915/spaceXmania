import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardComp = ({title}) => {
    console.log(title)
  
    return ( 

        <Card>

            <CardMedia
                sx={{ height: 140 }}
                image ="/space.jpeg"
                title="vehicle"

            
            />


            {/* card content */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
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