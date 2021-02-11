import React from 'react';
import { useSelector } from 'react-redux';

function Menu(){
    const stateTitulo = useSelector((state) =>
         state.tituloReducer.titulo);

    return(
        
        <div>
            Menu: 
            {stateTitulo}
        </div>
    )
}

export default Menu;