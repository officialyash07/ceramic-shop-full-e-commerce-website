import classes from '../../styles/HomeUncover.module.css';

import Button from '../../UI/Button';

const HomeUncover = () => {
    return (
        <div className={classes.uncover}>
            <div className={classes.image}></div>
            <div className={classes.content}>
                <h2>
                    Uncover the World <br />
                    of Ceramic Artistry <br />
                    Start Your Journey <br /> Here!
                </h2>
                <Button
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}
                    className={classes.button}
                >
                    shop now
                </Button>
            </div>
        </div>
    );
};
export default HomeUncover;
