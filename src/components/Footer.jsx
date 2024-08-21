import classes from '../styles/Footer.module.css';

import { Facebook, Twitter, Instagram, Youtube } from '../icons';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <hr />
            <div className={classes.social}>
                <Facebook />
                <Twitter />
                <Instagram />
                <Youtube />
            </div>
            <p className={classes.logo}>CeramicShop</p>
            <p className={classes.cite}>Copyright &copy; 2024, CeramicShop, Inc.</p>
        </footer>
    );
};
export default Footer;
