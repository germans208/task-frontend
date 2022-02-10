import React from 'react';
import Project from './Project';

const ListProjects = () => {

    const projects = [
        { name: 'Proyecto 1' },
        { name: 'Proyecto 2' },
        { name: 'Proyecto 3' }
    ];

    return (
        <ul className="listado-proyectos">
            {
                projects.map(project => (<Project project={project} />))
            }
        </ul>
    );
}

export default ListProjects;