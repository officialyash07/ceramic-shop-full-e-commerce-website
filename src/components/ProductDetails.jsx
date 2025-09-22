import classes from "../styles/ProductDetails.module.css";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { currencyFormatter } from "../util/formatting";

import Button from "../UI/Button";
import { Check } from "../icons/";
import Description from "./Description";

import visa from "../assets/visa.png";
import master from "../assets/master-card.png";
import american from "../assets/american-express.jpg";
import discover from "../assets/discover.png";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

const ProductDetails = () => {
    const params = useParams();

    const [loadedProduct, setLoadedProduct] = useState(null);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.cart.counter);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/products.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const products = await response.json();
                const product = products.find(
                    (prod) =>
                        prod.name.split(" ").join("") === params.productName
                );
                setLoadedProduct(product);
            } catch (err) {
                console.error(err);
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
        if (loadedProduct) {
            dispatch(cartActions.addItemToCart(loadedProduct));
        }
    };

    if (error) {
        return <p className={classes.error}>Failed to load data...</p>;
    }

    if (!loadedProduct) {
        return <p className={classes.loading}>Loading...</p>;
    }

    return (
        <>
            <div className={classes.productDetails}>
                <div className={classes.image}>
                    <img
                        src={`/${loadedProduct.image}`}
                        alt={loadedProduct.name}
                    />
                </div>
                <div className={classes.content}>
                    <p className={classes.miniTitle}>
                        Home / {loadedProduct.subName} / {loadedProduct.name}
                    </p>
                    <p className={classes.subTitle}>
                        {Array.isArray(loadedProduct.categories)
                            ? loadedProduct.categories.join(", ")
                            : loadedProduct.categories}
                    </p>

                    <h2>{loadedProduct.name}</h2>

                    <p className={classes.price}>
                        {loadedProduct.prevPrice && (
                            <span className={classes.prevPrice}>
                                {currencyFormatter.format(
                                    loadedProduct.prevPrice
                                )}
                            </span>
                        )}
                        {currencyFormatter.format(loadedProduct.price)}
                        <span className={classes.free}>& Free Shipping</span>
                    </p>

                    <p className={classes.productDescription}>
                        Discover the beauty of ceramics with our handcrafted
                        pieces. Each item combines artistry and function, making
                        it a versatile addition to any space. Whether used as a
                        decorative accent or a practical item, this ceramic
                        creation adds a touch of elegance to your surroundings.
                    </p>

                    <div className={classes.actions}>
                        <div>
                            <button
                                onClick={handleDecreaseItem}
                                disabled={counter === 1}
                            >
                                -
                            </button>
                            <p>{counter}</p>
                            <button onClick={handleIncreaseItem}>+</button>
                        </div>
                        <Button
                            onClick={handleAddToCart}
                            className={classes.cartBtn}
                        >
                            Add to Cart
                        </Button>
                    </div>

                    <hr />

                    <p className={classes.categories}>
                        Categories:{" "}
                        <span>
                            {Array.isArray(loadedProduct.categories)
                                ? loadedProduct.categories.join(", ")
                                : loadedProduct.categories}
                        </span>
                    </p>

                    <div className={classes.shipping}>
                        <h3>Free shipping on orders over $50!</h3>
                        <p>
                            <Check /> No-Risk Money Back Guarantee!
                        </p>
                        <p>
                            <Check /> No Hassle Refunds
                        </p>
                        <p>
                            <Check /> Secure Payments
                        </p>
                    </div>

                    <div className={classes.guarantee}>
                        <h2>Guaranteed Safe Checkout</h2>
                        <div className={classes.images}>
                            <img src={visa} alt="Visa" />
                            <img src={master} alt="MasterCard" />
                            <img src={american} alt="American Express" />
                            <img src={discover} alt="Discover" />
                        </div>
                    </div>
                </div>
            </div>
            <Description name={loadedProduct.name} />
        </>
    );
};

export default ProductDetails;
