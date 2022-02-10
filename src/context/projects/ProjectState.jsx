import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
    const initialState = {
        newForm: true
    }

    //Dispatch para ejecutar las acciones 

    const [state, dispatch] = useReducer(projectReducer, initialState);

    //Funciones para el CRUD 
    //props.children para tome que los hijos que se pasen 
    return (

        <projectContext.Provider
            value={{
                newForm: state.newForm
            }}
        >
            {props.children}
        </projectContext.Provider>

    )
}

export default ProjectState;