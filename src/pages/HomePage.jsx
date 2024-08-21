import {
    HomeHero,
    HomeAbout,
    HomeBest,
    HomePopular,
    HomeShop,
    HomeTrending,
    HomeTestimonial,
    HomeUncover,
} from '../components/Home';

import { useState, useEffect } from 'react';

const HomePage = () => {
    const [loadedProducts, setLoadedProducts] = useState([]);

    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchPopularProducts() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const products = await response.json();
                setLoadedProducts(products);
            } catch (error) {
                setError(true);
            }
        }
        fetchPopularProducts();
    }, []);

    return (
        <div>
            <HomeHero />
            <HomeAbout />
            <HomeBest />
            <HomePopular products={loadedProducts} error={error} />
            <HomeShop />
            <HomeTrending products={loadedProducts} error={error} />
            <HomeTestimonial />
            <HomeUncover />
        </div>
    );
};
export default HomePage;
