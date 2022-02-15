import React, { useReducer } from 'react';
import uuid, { v4 as uuidv4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTOS } from '../../types';

const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Proyecto 1' },
        { id: 2, name: 'Proyecto 2' },
        { id: 3, name: 'Proyecto 3' },
        { id: 4, name: 'Proyecto 4' }
    ];

    const initialState = {
        projects: [],
        newForm: false
    }

    //Dispatch para ejecutar las acciones 

    const [state, dispatch] = useReducer(projectReducer, initialState);

    //Funciones para el CRUD 
    const showForm = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const getProjects = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: projects
        })
    }

    const addProjects = (project) => {
        project.id = uuidv4();

        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: project
        })
    }


    //props.children para tome que los hijos que se pasen 
    return (

        <projectContext.Provider
            value={{
                projects: state.projects,
                newForm: state.newForm,
                showForm,
                getProjects,
                addProjects
            }}
        >
            {props.children}
        </projectContext.Provider>

    )
}

export default ProjectState;