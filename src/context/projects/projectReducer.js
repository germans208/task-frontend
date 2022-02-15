import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTOS } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                newForm: true,
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                projects: action.payload,
            }
        case AGREGAR_PROYECTOS:
            return {
                ...state,
                projects: [...state.projects, action.payload],  
                newForm: false,
            }
        default:
            return state;
    }
}