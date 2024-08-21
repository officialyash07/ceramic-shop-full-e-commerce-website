import classes from '../styles/CheckoutForm.module.css';

import { useState, useEffect } from 'react';

import { Lock, Check } from '../icons';

import Button from '../UI/Button';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { cartActions } from '../store/cartSlice';

const CheckoutForm = () => {
    const [countries, setCountries] = useState([]);

    const [isPlaced, setIsPlaced] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchCountries() {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
        }
        fetchCountries();
    }, []);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
        setIsPlaced(true);
        dispatch(cartActions.clearCart());
    };

    const handleClickOkay = () => {
        setIsPlaced(false);
    };

    return (
        <>
            {isPlaced && (
                <div className={classes.submitted}>
                    <Check />
                    <h1>Your order has been placed successfully.</h1>
                    <h3>
                        You will get the tracking details on your registered phone number as soon as the order is
                        shipped.{' '}
                    </h3>
                    <div className={classes.placedActions}>
                        <Button onClick={handleClickOkay}>okay</Button>
                        <Button>
                            <Link to="/products">continue shopping</Link>
                        </Button>
                    </div>
                </div>
            )}
            {!isPlaced && (
                <form className={classes.checkoutForm} onSubmit={handlePlaceOrder}>
                    <h3>Customer Information</h3>
                    <input type="email" name="email" id="email" placeholder="Email Address *" required />
                    <h3>Billing Details</h3>
                    <div className={classes.flex}>
                        <input type="text" name="fName" id="fName" placeholder="First name *" required />
                        <input type="text" name="sName" id="sName" placeholder="Last name *" required />
                    </div>
                    <input type="text" name="company" id="company" placeholder="Company name" />
                    <select name="country" id="country" required>
                        <option value="">Select Country *</option>
                        {countries.map((country) => (
                            <option value={country.name.common} key={country.cca3}>
                                {country.name.common}
                            </option>
                        ))}
                    </select>
                    <div className={classes.flex}>
                        <input
                            type="text"
                            name="houseNo"
                            id="houseNo"
                            placeholder="House number and Street name"
                            required
                        />
                        <input
                            type="text"
                            name="unit"
                            id="unit"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                        />
                    </div>
                    <div className={classes.flex}>
                        <input type="text" name="city" id="city" placeholder="Town / City *" required />
                        <input type="text" name="state" id="state" placeholder="State *" required />
                        <input type="text" name="postalCode" id="postalCode" placeholder="ZIP Code *" required />
                    </div>
                    <input type="number" name="number" id="number" placeholder="Phone *" required />
                    <h3>Additional Information</h3>
                    <textarea
                        name="extra"
                        id="extra"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                    ></textarea>
                    <Button className={classes.orderBtn}>
                        <Lock />
                        place order {`total`}
                    </Button>
                </form>
            )}
        </>
    );
};
export default CheckoutForm;
