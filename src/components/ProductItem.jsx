/* eslint-disable react/prop-types */
import classes from '../styles/ProductItem.module.css';

import { StarIcon } from '../icons';

import { currencyFormatter } from '../util/formatting';

import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    return (
        <div className={classes.productItem}>
            <div className={classes.image}>
                <Link to={`/products/${product.name.split(' ').join('')}`}>
                    <img src={`http://localhost:3000/${product.image}`} alt="" />
                </Link>
            </div>
            <div className={classes.detail}>
                <p className={classes.static}>{product.subName}</p>
                <h2>{product.name}</h2>
                <div className={classes.rating}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <p className={classes.pricing}>
                    {product.prevPrice !== '' && <span>{currencyFormatter.format(product.prevPrice)}</span>}
                    {currencyFormatter.format(product.price)}
                </p>
            </div>
        </div>
    );
};
export default ProductItem;
