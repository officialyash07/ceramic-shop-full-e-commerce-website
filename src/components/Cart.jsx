import classes from '../styles/Cart.module.css';

import { CloseIcon } from '../icons';

import { uiActions } from '../store/uiSlice';

import { useDispatch, useSelector } from 'react-redux';

import CartItem from './CartItem';

import Button from '../UI/Button';

import { Link } from 'react-router-dom';

import { currencyFormatter } from '../util/formatting';

const Cart = () => {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);

    const handleCloseCart = () => {
        dispatch(uiActions.hideCart());
    };

    const cartTotal = items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
    }, 0);

    return (
        <div className={classes.cartContainer}>
            <div className={classes.cart}>
                <div className={classes.cartHeader}>
                    <h2>Shopping Cart</h2>
                    <button className={classes.closeBtn} onClick={handleCloseCart}>
                        <CloseIcon />
                    </button>
                </div>
                <hr />
                <div className={classes.cartItemsContainer}>
                    {items.length !== 0 ? (
                        items.map((item) => <CartItem key={item.id} item={item} />)
                    ) : (
                        <div className={classes.noItems}>
                            <p>No products in the cart yet</p>
                        </div>
                    )}
                </div>
                <div className={classes.cartFooter}>
                    {items.length !== 0 && (
                        <>
                            <hr />
                            <div className={classes.total}>
                                <p>Subtotal:</p>
                                <p className={classes.amount}>{currencyFormatter.format(cartTotal)}</p>
                            </div>
                            <hr />
                        </>
                    )}

                    <div className={classes.actions}>
                        {items.length === 0 ? (
                            <Link to="/products">
                                <Button onClick={handleCloseCart}>Continue Shopping</Button>
                            </Link>
                        ) : (
                            <>
                                <Link to="/cart">
                                    <Button onClick={handleCloseCart}>view cart</Button>
                                </Link>
                                <Link to="/checkout">
                                    <Button onClick={handleCloseCart}>checkout</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cart;
