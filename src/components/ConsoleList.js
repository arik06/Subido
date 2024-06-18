import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

const ConsoleList = () => {
    const [consoles, setConsoles] = useState([]);
    const [sort, setSort] = useState('price-asc');
    const [filter, setFilter] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        fetchConsoles();
    }, [sort, filter, minPrice, maxPrice, type]);

    const fetchConsoles = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/consoles/', {
                params: {
                    sort: sort,
                    filter: filter,
                    min_price: minPrice,
                    max_price: maxPrice,
                    type: type
                }
            });
            setConsoles(response.data);
        } catch (error) {
            console.error('Error fetching consoles', error);
        }
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="sort">Ordenar por:</label>
                        <select className="form-control" id="sort" value={sort} onChange={handleSortChange}>
                            <option value="price-asc">Precio: de menor a mayor</option>
                            <option value="price-desc">Precio: de mayor a menor</option>
                            <option value="date-asc">Fecha: más antiguos primero</option>
                            <option value="date-desc">Fecha: más recientes primero</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="filter">Filtrar por:</label>
                        <input type="text" className="form-control" id="filter" value={filter} onChange={handleFilterChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="minPrice">Precio mínimo:</label>
                        <input type="number" className="form-control" id="minPrice" value={minPrice} onChange={handleMinPriceChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="maxPrice">Precio máximo:</label>
                        <input type="number" className="form-control" id="maxPrice" value={maxPrice} onChange={handleMaxPriceChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Tipo:</label>
                        <select className="form-control" id="type" value={type} onChange={handleTypeChange}>
                            <option value="">Todos</option>
                            <option value="portatil">Portátil</option>
                            <option value="hogar">De hogar</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {consoles.length > 0 ? (
                            consoles.map(console => (
                                <div className="col-md-4 mb-4" key={console.id}>
                                    <div className="card">
                                        <img src={console.image} className="card-img-top" alt={console.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{console.name}</h5>
                                            <p className="card-text">{console.description}</p>
                                            <p className="card-text">Precio: ${console.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No se encontraron consolas</p>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ConsoleList;
