import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

const AccessoryList = () => {
    const [accessories, setAccessories] = useState([]);
    const [sort, setSort] = useState('price-asc');
    const [filter, setFilter] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        fetchAccessories();
    }, [sort, filter, minPrice, maxPrice]);

    const fetchAccessories = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/accessories/', {
                params: {
                    sort: sort,
                    filter: filter,
                    min_price: minPrice,
                    max_price: maxPrice
                }
            });
            setAccessories(response.data);
        } catch (error) {
            console.error('Error fetching accessories', error);
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
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {accessories.length > 0 ? (
                            accessories.map(accessory => (
                                <div className="col-md-4 mb-4" key={accessory.id}>
                                    <div className="card">
                                        <img src={accessory.image} className="card-img-top" alt={accessory.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{accessory.name}</h5>
                                            <p className="card-text">{accessory.description}</p>
                                            <p className="card-text">Precio: ${accessory.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No se encontraron accesorios</p>
                        )}
                    </div>
                </div>
            </div>
         
        </div>

        

    );
};

export default AccessoryList;
