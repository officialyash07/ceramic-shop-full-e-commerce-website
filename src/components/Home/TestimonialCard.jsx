/* eslint-disable react/prop-types */
import classes from '../../styles/TestimonialCard.module.css';

import star from '../../icons/star.png';

const TestimonialCard = ({ feedback, image, name, designation }) => {
    return (
        <div className={classes.testimonialCard}>
            <div className={classes.ratings}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <p className={classes.feedback}>{feedback}</p>
            <div className={classes.profile}>
                <img src={image} alt="" />
                <div>
                    <p className={classes.name}>{name}</p>
                    <p className={classes.designation}>{designation}</p>
                </div>
            </div>
        </div>
    );
};
export default TestimonialCard;
