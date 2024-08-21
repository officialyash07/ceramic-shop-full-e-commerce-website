/* eslint-disable react/prop-types */
import classes from '../../styles/HomeTrending.module.css';

import ProductItem from '../ProductItem';

const HomeTrending = ({ products, error }) => {
    const trending = products.sort(() => 0.11 - Math.random());

    const trendingProducts = trending.slice(0, 3);

    return (
        <div className={classes.trending}>
            <h5>trending now</h5>
            <p className={classes.heading}>minimalistic ceramic designs</p>
            <div className={classes.trendingProducts}>
                {error && <p>Failed to fetch data...</p>}
                {trendingProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default HomeTrending;
