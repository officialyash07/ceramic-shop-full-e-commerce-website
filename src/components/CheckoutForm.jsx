import classes from "../styles/CheckoutForm.module.css";

import { useState } from "react";

import { Lock, Check } from "../icons";

import { QRCodeCanvas } from "qrcode.react";

import Button from "../UI/Button";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../store/cartSlice";

const CheckoutForm = () => {
    const [isPlaced, setIsPlaced] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [upiId, setUpiId] = useState("");
    const [cardDetails, setCardDetails] = useState({
        number: "",
        expiry: "",
        cvv: "",
    });
    const items = useSelector((state) => state.cart.items);
    const cartTotal = items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
    }, 0);

    const upiIdToPay = "yashpathik@ybl";
    const upiPayeeName = "Ceramic Shop";
    const txnId = `TXN${Date.now()}`;
    const upiString = `upi://pay?pa=${upiIdToPay}&pn=${encodeURIComponent(
        upiPayeeName
    )}&am=${cartTotal}&cu=INR&tid=${txnId}`;

    const dispatch = useDispatch();

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        setShowPayment(true);
    };

    const handleClickOkay = () => {
        setIsPlaced(false);
    };

    const handleConfirmPayment = (e) => {
        e.preventDefault();
        setIsPlaced(true);
        setShowPayment(false);
        dispatch(cartActions.clearCart());
    };

    return (
        <>
            {isPlaced && (
                <div className={classes.submitted}>
                    <Check />
                    <h1>Your order has been placed successfully.</h1>
                    <h3>
                        You will get the tracking details on your registered
                        phone number as soon as the order is shipped.{" "}
                    </h3>
                    <div className={classes.placedActions}>
                        <Button onClick={handleClickOkay}>okay</Button>
                        <Button>
                            <Link to="/products">continue shopping</Link>
                        </Button>
                    </div>
                </div>
            )}
            {!showPayment && !isPlaced ? (
                <form
                    className={classes.checkoutForm}
                    onSubmit={handlePlaceOrder}
                >
                    <h3>Customer Information</h3>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address *"
                        required
                    />
                    <h3>Billing Details</h3>
                    <div className={classes.flex}>
                        <input
                            type="text"
                            name="fName"
                            id="fName"
                            placeholder="First name *"
                            required
                        />
                        <input
                            type="text"
                            name="sName"
                            id="sName"
                            placeholder="Last name *"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Company name"
                    />
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
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Town / City *"
                            required
                        />
                        <input
                            type="text"
                            name="state"
                            id="state"
                            placeholder="State *"
                            required
                        />
                        <input
                            type="text"
                            name="postalCode"
                            id="postalCode"
                            placeholder="ZIP Code *"
                            required
                        />
                    </div>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Phone *"
                        required
                    />
                    <h3>Additional Information</h3>
                    <textarea
                        name="extra"
                        id="extra"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                    ></textarea>
                    <Button className={classes.orderBtn}>
                        <Lock />
                        place order
                    </Button>
                </form>
            ) : null}
            {showPayment && (
                <div className={classes.paymentOptions}>
                    <h3>Select Payment Method</h3>
                    <div className={classes.paymentBtns}>
                        <Button
                            onClick={() => {
                                setPaymentMethod("scan");
                            }}
                        >
                            Scan to Pay
                        </Button>
                        <Button onClick={() => setPaymentMethod("upi")}>
                            UPI ID
                        </Button>
                        <Button onClick={() => setPaymentMethod("card")}>
                            Card
                        </Button>
                    </div>

                    {paymentMethod === "scan" && (
                        <div className={classes.scan}>
                            <p>Scan this QR code to pay ${cartTotal}:</p>
                            <QRCodeCanvas value={upiString} size={200} />
                            <Button onClick={handleConfirmPayment}>
                                Confirm Payment
                            </Button>
                        </div>
                    )}

                    {paymentMethod === "upi" && (
                        <form
                            className={classes.upi}
                            onSubmit={handleConfirmPayment}
                        >
                            <input
                                type="text"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                placeholder="your-upi@bank"
                                required
                            />
                            <Button type="submit">
                                Continue to pay ${cartTotal}
                            </Button>
                        </form>
                    )}

                    {paymentMethod === "card" && (
                        <form
                            className={classes.card}
                            onSubmit={handleConfirmPayment}
                        >
                            <input
                                type="number"
                                value={cardDetails.number}
                                onChange={(e) =>
                                    setCardDetails({
                                        ...cardDetails,
                                        number: e.target.value,
                                    })
                                }
                                placeholder="Card Number"
                                required
                            />
                            <input
                                type="number"
                                value={cardDetails.expiry}
                                onChange={(e) =>
                                    setCardDetails({
                                        ...cardDetails,
                                        expiry: e.target.value,
                                    })
                                }
                                placeholder="MM/YY"
                                required
                            />
                            <input
                                type="password"
                                value={cardDetails.cvv}
                                onChange={(e) =>
                                    setCardDetails({
                                        ...cardDetails,
                                        cvv: e.target.value,
                                    })
                                }
                                placeholder="CVV"
                                required
                            />
                            <Button type="submit">
                                Continue to pay ${cartTotal}
                            </Button>
                        </form>
                    )}
                </div>
            )}
        </>
    );
};
export default CheckoutForm;
