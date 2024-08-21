import classes from '../../styles/HomeTestimonial.module.css';

import { TestimonialCard } from '.';

import testimonial_1 from '../../assets/testimonial-1.jpg';
import testimonial_2 from '../../assets/testimonial-2.jpg';

const HomeTestimonial = () => {
    return (
        <div className={classes.testimonial}>
            <h5>testimonial</h5>
            <p className={classes.heading}>what our customers say</p>
            <div className={classes.cards}>
                <TestimonialCard
                    image={testimonial_1}
                    feedback="Your ceramic pieces are simply stunning! I recently purchased a vase from your shop, and it has quickly become the centerpiece of my living room."
                    name="wade wilson"
                    designation="business man"
                />
                <TestimonialCard
                    image={testimonial_2}
                    feedback="I bought a set of ceramic mugs from your shop, and they are absolutely perfect! The quality is outstanding, and the designs are both elegant and functional."
                    name="tony stark"
                    designation="fashion designer"
                />
            </div>
        </div>
    );
};
export default HomeTestimonial;
