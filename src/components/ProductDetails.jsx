import classes from '../styles/ProductDetails.module.css';

import { useParams } from 'react-router';

import { useEffect, useState } from 'react';

import { currencyFormatter } from '../util/formatting';

import Button from '../UI/Button';

import { Check } from '../icons/';

import Description from './Description';

import visa from '../assets/visa.png';
import master from '../assets/master-card.png';
import american from '../assets/american-express.jpg';
import discover from '../assets/discover.png';

import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../store/cartSlice';

const ProductDetails = () => {
    const params = useParams();

    const [loadedProduct, setLoadedProduct] = useState([]);

    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const counter = useSelector((state) => state.cart.counter);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const products = await response.json();
                const product = products.find((prod) => prod.name.split(' ').join('') === params.productName);
                setLoadedProduct(product);
            } catch (error) {
                setError(true);
            }
        }
        fetchProducts();
    }, [params]);

    const handleDecreaseItem = () => {
        dispatch(cartActions.decreaseItem());
    };

    const handleIncreaseItem = () => {
        dispatch(cartActions.increaseItem());
    };

    const handleAddToCart = () => {
        dispatch(cartActions.addItemToCart(loadedProduct));
    };

    return (
        <>
            <div>
                {error ? (
                    <p>Failed to load data...</p>
                ) : (
                    <div className={classes.productDetails}>
                        <div className={classes.image}>
                            <img src={`http://localhost:3000/${loadedProduct.image}`} alt="" />
                        </div>
                        <div className={classes.content}>
                            <p className={classes.miniTitle}>
                                Home / {loadedProduct.subName} / {loadedProduct.name}
                            </p>
                            <p className={classes.subTitle}>{loadedProduct.categories}</p>
                            <h2>{loadedProduct.name}</h2>
                            <p className={classes.price}>
                                {loadedProduct.prevPrice !== '' && (
                                    <span className={classes.prevPrice}>
                                        {currencyFormatter.format(loadedProduct.prevPrice)}
                                    </span>
                                )}
                                {`${currencyFormatter.format(loadedProduct.price)}`}
                                <span className={classes.free}>& Free Shipping</span>
                            </p>
                            <p className={classes.productDescription}>
                                Discover the beauty of ceramics with our handcrafted. This exquisite piece combines
                                artistry and function, making it a versatile addition to any space. Whether used as a
                                decorative accent or a practical item, this ceramic creation adds a touch of elegance to
                                your surroundings.
                            </p>
                            <div className={classes.actions}>
                                <div>
                                    <button onClick={handleDecreaseItem} disabled={counter === 1}>
                                        -
                                    </button>
                                    <p>{counter}</p>
                                    <button onClick={handleIncreaseItem}>+</button>
                                </div>
                                <Button onClick={handleAddToCart} className={classes.cartBtn}>
                                    add to cart
                                </Button>
                            </div>
                            <hr />
                            <p className={classes.categories}>
                                Categories: <span>{loadedProduct.categories}</span>
                            </p>
                            <div className={classes.shipping}>
                                <h3>Free shipping on orders over $50!</h3>
                                <p>
                                    <Check />
                                    No-Risk Money Back Guarantee!
                                </p>
                                <p>
                                    <Check />
                                    No Hassle Refunds
                                </p>
                                <p>
                                    <Check />
                                    Secure Payments
                                </p>
                            </div>
                            <div className={classes.guarantee}>
                                <h2>Guaranteed Safe Checkout</h2>
                                <div className={classes.images}>
                                    <img src={visa} alt="" />
                                    <img src={master} alt="" />
                                    <img src={american} alt="" />
                                    <img src={discover} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Description name={loadedProduct.name} />
        </>
    );
};
export default ProductDetails;
