import React from 'react';
import logo from './logo.png'; // Asegúrate de que esta ruta es correcta

const Footer = () => {
    return (
        <footer>
            <div className="container text-center" style={{ maxWidth: '100%' }}>
                <img src={logo} alt="Logo" style={{ maxHeight: '50px', marginBottom: '10px' }} />
                <p>
                    <a href="https://wa.me/tu-numero-de-whatsapp" style={{ color: 'white', marginRight: '15px' }} target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>
                    <a href="https://github.com/tu-usuario-de-github" style={{ color: 'white', marginRight: '15px' }} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <span>Pedro Ortiz Clavijo</span>
                    <br />
                    <span>20/06/2024</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
