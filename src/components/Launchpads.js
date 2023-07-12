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

            
        },
        
        
    })


    // laoding state
    if(launchQuery.isLoading){
        return(
            <h1>Loading...</h1>
        )
    }


    if(launchQuery.isFetching){
        return(
            <h1>Fetching...</h1>
        )
    }


    
    if(launchQuery.isError){
        return(
            <h1>Error...</h1>
        )
    }
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