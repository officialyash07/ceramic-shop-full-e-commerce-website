import classes from "../styles/Header.module.css";

import { NavLink } from "react-router-dom";

import { CartIcon } from "../icons";

import { uiActions } from "../store/uiSlice";

import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const items = useSelector((state) => state.cart.items);

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    const dispatch = useDispatch();

    const handleShowCart = () => {
        dispatch(uiActions.showCart());
    };

    return (
        <header className={classes.header}>
            <h2>CeramicShop</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button onClick={handleShowCart}>
                <CartIcon />
                {totalItems > 0 && (
                    <span className={classes.itemCount}>{totalItems}</span>
                )}
            </button>
        </header>
    );
};
export default Header;
