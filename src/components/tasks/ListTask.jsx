import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {
    const tasks = [
        { name: 'Elegir Plataforma', status: true },
        { name: 'Elegir Colores', status: true },
        { name: 'Elegir Plataformas de Pago', status: false }
    ];

    return (
        <Fragment>
            <h2>Listado de Tareas</h2>

            <ul className="listado-tareas">
                {tasks.length === 0 ?
                    <li className="tarea">No hay Tarea</li>
                    :
                    tasks.map(t => (<Task task={t} />))
                }
            </ul>
            <button type="button" className="btn btn-eliminar">
                Eliminar Proyectos &times;
            </button>
        </Fragment>
    );
}

export default ListTask;