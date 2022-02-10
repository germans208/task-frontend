import react from 'react';

const Bar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">
                Hola <span>Germán Settino</span>
            </p>
            <nav className="nav-principal">
                <a href="#!" >
                    Cerrar Sesión
                </a>
            </nav>
        </header>
    );
}

export default Bar;