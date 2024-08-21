import classes from '../../styles/HomeShop.module.css';

import Button from '../../UI/Button';

const HomeShop = () => {
    return (
        <div className={classes.homeShop}>
            <div>
                <h2>
                    begin your ceramic journey, explore <br /> our stunning collections
                </h2>
                <p>Starting from just $149.00</p>
                <Button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={classes.button}
                >
                    shop now
                </Button>
            </div>
        </div>
    );
};
export default HomeShop;
