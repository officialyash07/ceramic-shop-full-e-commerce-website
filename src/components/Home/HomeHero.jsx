import classes from '../../styles/HomeHero.module.css';

import hero_1 from '../../assets/hero.jpg';
import hero_2 from '../../assets/hero-2.jpg';

import Button from '../../UI/Button';

const HomeHero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes.intro}>
                <h5>welcome to ceramic shop</h5>
                <h2>
                    Elevate Your <br /> Space with <br /> Ceramic Elegance.
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
            <div className={classes.imgContainer}>
                <img className={classes.hero1_img} src={hero_1} alt="" />
                <img className={classes.hero2_img} src={hero_2} alt="" />
            </div>
        </div>
    );
};
export default HomeHero;
