/* eslint-disable react/prop-types */
import classes from '../../styles/HomePopular.module.css';

import ProductItem from '../ProductItem';

const HomePopular = ({ products, error }) => {
    const popular = products.sort(() => 0.11 - Math.random());

    const popularProducts = popular.slice(0, 6);

    return (
        <div className={classes.popular}>
            <h5>most popular</h5>
            <p className={classes.heading}>Discover the latest Additions at Your Top Choice Flower Shop</p>
            <div className={classes.popularProducts}>
                {error && <p>Failed to fetch data...</p>}
                {popularProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default HomePopular;
