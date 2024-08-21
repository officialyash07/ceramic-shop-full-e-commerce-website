import classes from '../styles/Checkout.module.css';

import CheckoutForm from './CheckoutForm';

import { useSelector } from 'react-redux';

import { currencyFormatter } from '../util/formatting';

const Checkout = () => {
    const items = useSelector((state) => state.cart.items);

    const cartTotal = items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
    }, 0);

    return (
        <div className={classes.checkout}>
            <h2>Checkout</h2>
            <div className={classes.content}>
                <div className={classes.form}>
                    <CheckoutForm />
                </div>
                <div className={classes.orders}>
                    <h3>Your Order</h3>
                    <div>
                        <div className={classes.title}>
                            <p>Product</p>
                            <p>Subtotal</p>
                        </div>
                        <div className={classes.products}>
                            {items.map((item) => (
                                <div key={item.id} className={classes.product}>
                                    <img src={`http://localhost:3000/${item.image}`} alt="" />
                                    <p className={classes.productName}>{`${item.name} x ${item.quantity}`}</p>
                                    <p className={classes.price}>
                                        {currencyFormatter.format(item.price * item.quantity)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className={classes.subtotal}>
                            <p>Subtotal</p>
                            <p>{currencyFormatter.format(cartTotal)}</p>
                        </div>
                        <div className={classes.total}>
                            <p>Total</p>
                            <p>{currencyFormatter.format(cartTotal)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;
