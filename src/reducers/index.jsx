import {combineReducers} from 'redux';


const initialState = { frutas: [{nome:"Morango"}, {nome:"Carambola"}] }

function frutasReducer(state = initialState, action){ 
    
    switch(action.type){
        case "ADICIONAR": return { frutas:[ ...state.frutas, {...action.value }]};  
        default: return state;
    }
}

function tituloReducer( state = {titulo:"Frutas"}, action){ 
    switch(action.type){
        case "ALTERAR": return {titulo: action.value};
        default: return state;
    }
}

const Reducers = combineReducers({frutasReducer, tituloReducer});
export default Reducers;