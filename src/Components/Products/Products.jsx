import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h3>{products.length} Products found.</h3>
            <div className='container row row-cols-3'>
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
}

export default Products;
