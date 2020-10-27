import React,{useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
import useFetchGifs from './hooks/useFetchGifs';


//--> Versión que no utiliza el customhooks


const GifGrid = ({category}) => {

    const [Imagenes, setImagenes] = useState([])
    //console.log(Imagenes);

    const {data, loading} = useFetchGifs();
    console.log(data, loading);

    useEffect(  () => {
        getGifs(category)
            .then(imgs => setImagenes(imgs));
    }, [category] );

    return (
        <>
        <h3>{category}</h3>

        {loading ? 'Cargando...' : 'Data cargada'}
        
        <div className="card-grid">
            {
                Imagenes.map(img => (
                    <GifGridItem
                        key= {img.id}
                        {...img}
                    />
                ))
            }
        </div>
        </>
    )
}

export default GifGrid
/* Lista desestructurada del arreglo imagenes que contiene los gifs
{Imagenes.map( ({id, title}) => (
    <li key= {id}> {title} </li>
        )
)}
*/