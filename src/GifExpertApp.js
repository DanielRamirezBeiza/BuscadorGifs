import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    
    const [categorias, setCategorias] = useState([]);

    
    /*
    const handleAdd = () => {
        console.log(categorias);
        //setCategorias(["Mewtwo", ...categorias])
        // --> utilizando su callback: setCategorias(categ =>[ 'Mewtwo', categ] )
    }
  */
    


    return (
        <div className="animate__animated animate__bounce">
            <h2> Gif Expert React Js </h2>
            <h5>Por Daniel Ramírez</h5>
            <hr/>
            <AddCategory setCategorias={setCategorias} />

            
                {
                    categorias.map(category => (
                        <GifGrid
                            key={category}
                            category= {category}
                        />      
                    ))
                }
           
        </div>
    )
}

export default GifExpertApp
