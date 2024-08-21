import classes from '../../styles/HomeAbout.module.css';

import img_1 from '../../assets/about-1.jpg';
import img_2 from '../../assets/about-2.jpg';

import Button from '../../UI/Button';

const HomeAbout = () => {
    return (
        <div className={classes.about}>
            <h5>about ceramic shop</h5>
            <p>
                The versatility of ceramics is what makes them truly remarkable, with their presence in various forms
                such as stoneware and porcelain.
            </p>
            <div className={classes.images}>
                <div className={classes.image_1}>
                    <img src={img_1} alt="" />
                </div>
                <div className={classes.image_2}>
                    <img src={img_2} alt="" />
                    <h3>
                        Welcome to Ceramic Shop, where passion meets craftsmanship to bring you a world of timeless
                        beauty and creativity.
                    </h3>
                    <p>
                        Our journey is steeped in the art of ceramics, where each piece tells a unique story. Get to
                        know the heart and soul behind our store.
                    </p>
                    <Button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={classes.button}
                    >
                        read more
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default HomeAbout;
