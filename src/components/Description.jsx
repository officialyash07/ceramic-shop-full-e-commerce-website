/* eslint-disable react/prop-types */
import classes from '../styles/Description.module.css';

import Button from '../UI/Button';

import { useState } from 'react';

const Description = ({ name }) => {
    const [isSelected, setIsSelected] = useState('description');

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [active, setActive] = useState('description');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
        setIsSubmitted(true);
    };

    const handleClickOkay = () => {
        setIsSubmitted(false);
    };

    const handleClick = (value) => {
        setIsSelected(value);
        setActive(value);
    };

    return (
        <div className={classes.descriptionContainer}>
            <hr />
            <div className={classes.buttons}>
                <Button
                    className={active === 'description' ? classes.active : ''}
                    onClick={() => handleClick('description')}
                >
                    Description
                </Button>
                <Button className={active === 'review' ? classes.active : ''} onClick={() => handleClick('review')}>
                    Reviews
                </Button>
            </div>
            <div className={classes.content}>
                {isSelected === 'description' && (
                    <div className={classes.description}>
                        <p>
                            Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry
                            and function, making it a versatile addition to any space. Whether used as a decorative
                            accent or a practical item, this ceramic creation adds a touch of elegance to your
                            surroundings. Showcases the craftsmanship and timeless appeal of ceramics. Its ensures
                            it&apos;s built to last, serving both as a beautiful addition and a functional part of your
                            daily life. Experience the artistry of ceramics and enhance your living spaces with our.
                            Order today and elevate your surroundings with this exquisite piece.
                        </p>
                    </div>
                )}
                {isSelected === 'review' && (
                    <div className={classes.reviewForm}>
                        {isSubmitted ? (
                            <div className={classes.thanks}>
                                <h2>Thanks for the honest review.</h2>
                                <Button onClick={handleClickOkay} className={classes.submitBtn}>
                                    okay
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <h2>Be the first to review &quot;{name}&quot;</h2>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <label htmlFor="review">Your Review *</label>
                                <textarea name="review" id="review" required></textarea>
                                <div className={classes.name}>
                                    <div>
                                        <label htmlFor="name">Name *</label>
                                        <input type="text" name="name" id="name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email *</label>
                                        <input type="email" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className={classes.save}>
                                    <input type="checkbox" name="save" id="save" />
                                    <label htmlFor="save">
                                        Save my name, email, and website in the browser for the next time I comment.
                                    </label>
                                </div>
                                <Button className={classes.submitBtn}>submit</Button>
                            </form>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Description;
