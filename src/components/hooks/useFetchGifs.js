import {useState, useEffect} from 'react';
import { getGifs } from '../../helpers/getGifs';




const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)    
            .then(imgs => {

                setTimeout( () => {
                    //console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 3000); 
            })
    }, [category] )


    return state;
}

export default useFetchGifs


