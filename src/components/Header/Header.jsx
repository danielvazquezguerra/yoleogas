import React from 'react';
import './Header.scss';

const Header = () => {

    return (
        <div>

            <nav className="HeaderMain container navbar navbar-light">
                <a className="navbar-brand" href="https://ganaenergia.com/tarifas-gas">
                    <img className="Logo" src="/img/gana-energia-gas-logo-gris.png" alt="gana-energia-gas-logo" loading="lazy"/>
                </a>
            </nav>
            
        </div>
    )
}

export default Header;
