import React, {useState} from 'react'

//const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;

const GifExpertApp = () => {

    
    const [categorias, setCategorias] = useState(['DBZ', 'SS', 'Pokemon']);

   

//Función para imprimir una lista por cada elemento en categorias
    return (
        <div>
            <ol>
                
                {
                    categorias.map(category => {
                        return  <li key={category}> {category} </li>        
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
