import React from 'react'
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
import useFetchGifs from './hooks/useFetchGifs';


const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);
 
    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>

            {loading && <p>Cargando</p>}
                   
            <div className="card-grid">
                {
                    data.map(img => (
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