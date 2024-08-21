import classes from '../styles/RootPage.module.css';

import { Outlet } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

import { AngleUp } from '../icons';

import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

const RootPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const isCartShown = useSelector((state) => state.ui.isCartShown);

    const handleToggleButton = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleToggleButton);

        return () => {
            window.removeEventListener('scroll', handleToggleButton);
        };
    }, []);

    return (
        <div id={classes.rootPage}>
            <Header />
            {isCartShown && <Cart />}
            <main>
                <Outlet />
            </main>
            {isVisible && (
                <button className={classes.scrollButton} onClick={handleScrollTop}>
                    <AngleUp />
                </button>
            )}

            <Footer />
        </div>
    );
};
export default RootPage;
