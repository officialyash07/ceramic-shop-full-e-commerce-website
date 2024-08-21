import classes from '../../styles/Shop.module.css';

import ProductItem from '../ProductItem';

import { useEffect, useState } from 'react';

const Products = () => {
    const [loadedProducts, setLoadedProducts] = useState([]);

    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const products = await response.json();
                setLoadedProducts(products);
            } catch (error) {
                setError(true);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div className={classes.shopContainer}>
            <h2>Shop</h2>
            <hr />
            <div className={classes.subHeading}>
                <p>Showing all 11 results</p>
                <select name="sorting" id="sorting">
                    <option value="default">Default Sorting</option>
                    <option value="popularity">Sort by Popularity</option>
                    <option value="latest">Sort by Latest</option>
                    <option value="lowPrice">Sort by Price: Low to High</option>
                    <option value="highPrice">Sort by Price: High to Low</option>
                </select>
            </div>
            <div className={classes.products}>
                {error && <h1 className={classes.error}>Failed to fetch data...</h1>}
                {loadedProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default Products;
