import classes from '../styles/Header.module.css';

import { NavLink } from 'react-router-dom';

import { CartIcon } from '../icons';

import { uiActions } from '../store/uiSlice';

import { useDispatch } from 'react-redux';

const Header = () => {
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
                        <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                            shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button onClick={handleShowCart}>
                <CartIcon />
            </button>
        </header>
    );
};
export default Header;
