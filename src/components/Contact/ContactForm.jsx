import classes from '../../styles/ContactForm.module.css';

import Button from '../../UI/Button';

import thankImg from '../../assets/thank.png';

import { useState } from 'react';

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        setIsSubmitted(true);
        console.log(data);
    };

    const handleOkay = () => {
        setIsSubmitted(false);
    };

    return (
        <div className={classes.formContainer}>
            {!isSubmitted ? (
                <form className={classes.contactForm} onSubmit={handleSubmit}>
                    <div className={classes.name}>
                        <p>
                            <label htmlFor="fName">First Name</label>
                            <input type="text" name="fName" id="fName" required />
                        </p>
                        <p>
                            <label htmlFor="sName">Second Name</label>
                            <input type="text" name="sName" id="sName" required />
                        </p>
                    </div>
                    <div className={classes.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className={classes.message}>
                        <label htmlFor="message">Comment or Message</label>
                        <textarea name="message" id="message" required></textarea>
                    </div>
                    <Button className={classes.submitBtn}>submit</Button>
                </form>
            ) : (
                <div className={classes.thankContainer}>
                    <div className={classes.image}>
                        <img src={thankImg} alt="" />
                    </div>
                    <h2>Thanks for being awesome! First of all, thank you for contacting us.</h2>
                    <p>
                        We received your message and our team has already started working on it. If the inquiry is
                        urgent, it&apos;s best to use the number listed below to talk to our team. Otherwise, we&apos;ll
                        reply by email asap.
                    </p>
                    <p className={classes.para2}>Talk to you soon, and thanks again for being awesome!</p>
                    <h3>[Ceramic Shop]</h3>
                    <div className={classes.okayBtn}>
                        <Button onClick={handleOkay}>Okay</Button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ContactForm;
