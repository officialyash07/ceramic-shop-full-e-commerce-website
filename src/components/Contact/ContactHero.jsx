import classes from '../../styles/ContactHero.module.css';

import hero from '../../assets/contact-hero.jpg';

const ContactHero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes.content}>
                <h2>about us</h2>
                <p>
                    We&apos;re here to assist you in any way we can. Whether you have questions about our products, need
                    personalized recommendations, or simply want to connect with our team, don&apos;t hesitate to reach
                    out.
                </p>
            </div>
            <div className={classes.image}>
                <img src={hero} alt="" />
            </div>
        </div>
    );
};
export default ContactHero;
