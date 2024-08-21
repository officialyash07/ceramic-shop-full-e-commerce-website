/* eslint-disable react/prop-types */
import classes from '../styles/CartItem.module.css';

import { DeleteIcon } from '../icons';

import { currencyFormatter } from '../util/formatting';

import { cartActions } from '../store/cartSlice';

import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const productTotal = item.price * item.quantity;

    const handleRemoveItemFromCart = () => {
        dispatch(cartActions.removeItemFromCart(item));
    };

    const handleDeleteItem = () => {
        dispatch(cartActions.deleteItemFromCart(item));
    };

    const addItemToCart = () => {
        dispatch(cartActions.increaseItemCount(item));
    };

    return (
        <div className={classes.cartItem}>
            <div className={classes.images}>
                <img src={`http://localhost:3000/${item.image}`} alt="" />
            </div>
            <div className={classes.title}>
                <h2>{item.name}</h2>
                <div className={classes.actions}>
                    <button onClick={handleRemoveItemFromCart}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={addItemToCart}>+</button>
                </div>
            </div>
            <div className={classes.delete}>
                <button onClick={handleDeleteItem}>
                    <DeleteIcon />
                </button>
                <p>{currencyFormatter.format(productTotal)}</p>
            </div>
        </div>
    );
};
export default CartItem;
