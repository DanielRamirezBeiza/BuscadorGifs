import React, {useState} from 'react'
import PropTypes from 'prop-types';
 

const AddCategory = ({setCategorias}) => {

    const [InputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(InputValue.trim().length > 2){
        setCategorias(categ =>[InputValue, ...categ] )
        setInputValue('');  
        }


    }
    return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={InputValue}
                    onChange= {handleInputChange}
                    
                    
                />
            </form>
        )

}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
  };

export default AddCategory
