import CardComp from "./CardComp";
import {useQuery, QueryClient, QueryClientProvider} from '@tanstack/react-query';







 


const Vehicles = () => {

    const vehiclesQuery = useQuery({

        queryKey: 'vehicles',
        queryFn: async function(){
            const response = await fetch("https://api.spacexdata.com/v4/rockets");
            return response.json();

        }
    })

    if(vehiclesQuery.isLoading){
        return(
            <h1>Loading...</h1>
        )
    }


    if(vehiclesQuery.isError){
        return(
            <h1>Error...</h1>
        ) 
    }



  
//     const vehiclesQuery = useQuery(
//    'vehicles',
//        async ()=>{
//             const response = await fetch("https://api.spacexdata.com/v4/rockets")
//             return response.json();
//         }
//     )

   
    console.log("Data: ", vehiclesQuery.data)
    return (

        <div>

           {/* <CardComp
            title= "Vehicles"
            
           />

            <CardComp
            title= "Vehicles"
            
        /> */}

        {vehiclesQuery.data.map((item)=>{
           
            return(
                <CardComp
                    key={item.id}
                    desc={item.description}
                    pic={item.flickr_images}
                    name={item.name}
                />
            )
        })}
        
        </div>
      );
}
 
export default Vehicles;