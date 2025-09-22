import classes from "../styles/CartCompo.module.css";

import Button from "../UI/Button";

import { DeleteIcon, Empty } from "../icons";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../store/cartSlice";

import { currencyFormatter } from "../util/formatting";

const CartCompo = () => {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);

    const cartTotal = items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
    }, 0);

    const deleteItemFromCart = (itemId) => {
        const item = items.find((item) => item.id === itemId);
        dispatch(cartActions.deleteItemFromCart(item));
    };

    const removeItemFromCart = (itemId) => {
        const item = items.find((item) => item.id === itemId);
        dispatch(cartActions.removeItemFromCart(item));
    };

    const addItemToCart = (itemId) => {
        const item = items.find((item) => item.id === itemId);
        dispatch(cartActions.addItemToCart(item));
    };

    return (
        <div className={classes.cartCompo}>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <>
                    <div className={classes.emptyCart}>
                        <Empty />
                        <p>Your cart is currently empty.</p>
                    </div>
                    <Button className={classes.returnBtn}>
                        <Link to="/products">return to shop</Link>
                    </Button>
                </>
            ) : (
                <div className={classes.content}>
                    <div className={classes.products}>
                        <table>
                            <thead>
                                <tr>
                                    <th>product</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th>subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td className={classes.name}>
                                            <button
                                                onClick={() =>
                                                    deleteItemFromCart(item.id)
                                                }
                                            >
                                                <DeleteIcon />
                                            </button>
                                            <img
                                                src={`/${item.image}`}
                                                alt={item.name}
                                            />
                                            {item.name}
                                        </td>
                                        <td>
                                            {currencyFormatter.format(
                                                item.price
                                            )}
                                        </td>
                                        <td className={classes.productAction}>
                                            <button
                                                onClick={() =>
                                                    removeItemFromCart(item.id)
                                                }
                                            >
                                                -
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button
                                                onClick={() =>
                                                    addItemToCart(item.id)
                                                }
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            {currencyFormatter.format(
                                                item.quantity * item.price
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={classes.totals}>
                        <h4>Cart Totals</h4>
                        <div>
                            <p>Subtotal</p>
                            <p>{currencyFormatter.format(cartTotal)}</p>
                        </div>
                        <hr />
                        <div>
                            <p>Total</p>
                            <p>{currencyFormatter.format(cartTotal)}</p>
                        </div>
                        <hr />
                        <div className={classes.actions}>
                            <Button className={classes.couponBtn}>
                                Have a coupon?
                            </Button>
                            <Button className={classes.checkoutBtn}>
                                <Link to="/checkout">proceed to checkout</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default CartCompo;
