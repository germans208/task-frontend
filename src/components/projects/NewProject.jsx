import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContext);
    const { newForm } = projectsContext;

    const [state, setSate] = useState({
        name: ''
    });

    const { name } = state;

    const onChange = (e) => {
        setSate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>

            {newForm ?
                (<form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre Proyecto"
                        className="input-text"
                        value={name}
                        onChange={onChange}
                    />
                    <input
                        type="submit"
                        name="name"
                        placeholder="Nombre Proyecto"
                        value="Agregar Proyecto"
                        className="btn btn-block btn-primario"
                    />

                </form>)
                :
                null
            }
        </Fragment>
    );
}

export default NewProject;
;
