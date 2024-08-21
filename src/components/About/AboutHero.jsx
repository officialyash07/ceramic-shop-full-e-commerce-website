import classes from '../../styles/AboutHero.module.css';

import hero from '../../assets/about-hero.jpg';

const AboutHero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes.content}>
                <h2>about us</h2>
                <p>
                    Welcome to the world of CeramicShop, where artistry and innovation come together to craft stunning
                    ceramic pieces. Discover our story, the passion that drives us, and our commitment to delivering
                    timeless beauty and quality.
                </p>
            </div>
            <div className={classes.image}>
                <img src={hero} alt="" />
            </div>
        </div>
    );
};
export default AboutHero;
