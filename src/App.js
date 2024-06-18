import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ConsoleList from './components/ConsoleList';
import AccessoryList from './components/AccessoryList';
import Footer from './components/Footer';
import './App.css';
const App = () => {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Game Store AcPs</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/games">Juegos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/consoles">Consolas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/accessories">Accesorios</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/games" element={<ProductList />} />
                        <Route path="/consoles" element={<ConsoleList />} />
                        <Route path="/accessories" element={<AccessoryList />} />
                        <Route path="/" element={<ProductList />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

