import classes from '../../styles/HomeBest.module.css';

import img_1 from '../../assets/best-1.jpg';
import img_2 from '../../assets/best-2.jpg';
import img_3 from '../../assets/best-3.jpg';

const HomeBest = () => {
    return (
        <div className={classes.best}>
            <div className={classes.first}>
                <h5>the best of ceramics</h5>
                <h2>our products category</h2>
                <p>
                    Explore our exquisite collection of ceramic treasures that elevate your spaces and celebrate the
                    artistry of craftsmanship. From dinnerware to decor, each piece in our product range is a testament
                    to quality, style, and the timeless beauty of ceramics.
                </p>
                <figure className={classes.image}>
                    <img src={img_1} alt="" />
                    <figcaption className={classes.firstCap}>
                        <h3>stylish ceramic home decor</h3>
                        <p>Starting from just $99.00</p>
                    </figcaption>
                </figure>
            </div>
            <div className={classes.second}>
                <figure className={classes.image}>
                    <img className={classes.image_2} src={img_2} alt="" />
                    <figcaption className={classes.secondCap}>
                        <h3>trending ceramic dinnerware</h3>
                        <p>Starting from just $299.00</p>
                    </figcaption>
                </figure>
                <figure className={classes.image}>
                    <img className={classes.image_3} src={img_3} alt="" />
                    <figcaption className={classes.thirdCap}>
                        <h3>garden and outdoor accents</h3>
                        <p>Starting from just $149.00</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};
export default HomeBest;
