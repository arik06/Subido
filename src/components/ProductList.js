import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Importa el componente Footer
import '../App.css'; // Ajustar la ruta de importación


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('price-asc');
    const [filter, setFilter] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [platform, setPlatform] = useState('');
    const [condition, setCondition] = useState('');

    useEffect(() => {
        fetchProducts();
    }, [sort, filter, minPrice, maxPrice, platform, condition]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/products/', {
                params: {
                    sort: sort,
                    filter: filter,
                    min_price: minPrice,
                    max_price: maxPrice,
                    platform: platform,
                    condition: condition
                }
            });
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products', error);
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

    const handlePlatformChange = (event) => {
        setPlatform(event.target.value);
    };

    const handleConditionChange = (event) => {
        setCondition(event.target.value);
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
                        <label htmlFor="platform">Plataforma:</label>
                        <select className="form-control" id="platform" value={platform} onChange={handlePlatformChange}>
                            <option value="">Todas</option>
                            <option value="PC">PC</option>
                            <option value="Xbox">Xbox</option>
                            <option value="Nintendo">Nintendo</option>
                            <option value="PlayStation">PlayStation</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="condition">Estado:</label>
                        <select className="form-control" id="condition" value={condition} onChange={handleConditionChange}>
                            <option value="">Todos</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {products.length > 0 ? (
                            products.map(product => (
                                <div className="col-md-4 mb-4" key={product.id}>
                                    <div className="card">
                                        <img src={product.image} className="card-img-top" alt={product.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text">Precio: ${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No se encontraron productos</p>
                        )}
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default ProductList;
