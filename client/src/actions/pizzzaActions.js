import axios from 'axios';
import Pizza from '../components/Pizza';
import pizzas from '../pizzazdata';

export const getAllPizzas=()=>async dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})
    
    try{
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response);
        dispatch({type:'GET_PIZZAS_SUCCES' , payload : response.data})
    }
    catch(error)
    {
        dispatch({type:'GET_PIZZAS_FAILED' , payload : error})
    }
    
}

export const filterPizzas=(searchkey , category)=>async dispatch=>{

    var filteredPizzas ;
    dispatch({type:'GET_PIZZAS_REQUEST'})
    
    try{
        const response = await axios.get('/api/pizzas/getallpizzas')
        filteredPizzas = response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey))

        if(category!='all')
        {
            filteredPizzas = response.data.filter(pizza=>pizza.category.toLowerCase()==category)
        }


        dispatch({type:'GET_PIZZAS_SUCCES' , payload : filteredPizzas})
    }
    catch(error)
    {
        dispatch({type:'GET_PIZZAS_FAILED' , payload : error})
    }
    
}


