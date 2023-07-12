import CardComp from './CardComp';
import {useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {useState} from 'react';

const Launchpads = () => {
    
    const [data, setData ] = useState([]);

    const launchQuery = useQuery({
        queryKey: ['launchpads'],
        queryFn: async function(){
            const response = await fetch("https://api.spacexdata.com/v4/launchpads");
            const data = await response.json();
            setData(data);
            return data;

            
        }
        
    })

    console.log(data)

    return ( 
    <div>
    
        {data.map((item)=>{
            console.log(item.images.large)
            return(
                <CardComp
                    key={item.id}
                    desc={item.details}
                    pic={item.images.large}
                
                />
            )
        })}
    
    </div>);
}
 
export default Launchpads;