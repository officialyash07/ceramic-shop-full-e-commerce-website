import classes from '../../styles/ContactContent.module.css';

import { LocationIcon, PhoneIcon, EnvelopeIcon, Facebook, Instagram, Twitter, Youtube } from '../../icons';

import ContactForm from './ContactForm';

const ContactContent = () => {
    return (
        <div className={classes.content}>
            <div className={classes.touchContainer}>
                <h2>Get in touch</h2>
                <strong>We&apos;d Love to Hear from You!</strong>
                <p>Whether you have a question, feedback, or just want to say hello, reach out to us through:</p>
                <div className={classes.address}>
                    <h3>
                        <span>
                            <LocationIcon />
                        </span>
                        address
                    </h3>
                    <p>2972 Westheimer Rd. Santa Ana, Illinois 85386</p>
                </div>
                <hr />
                <div className={classes.phone}>
                    <h3>
                        <span>
                            <PhoneIcon />
                        </span>
                        phone
                    </h3>
                    <p>(+91) 987 654 3210</p>
                </div>
                <hr />
                <div className={classes.email}>
                    <h3>
                        <span>
                            <EnvelopeIcon />
                        </span>
                        email
                    </h3>
                    <p>info@contact.com</p>
                </div>
                <hr />
                <div>
                    <h3>follow</h3>
                    <div className={classes.links}>
                        <a href="">
                            <Facebook />
                        </a>
                        <a href="">
                            <Instagram />
                        </a>
                        <a href="">
                            <Twitter />
                        </a>
                        <a href="">
                            <Youtube />
                        </a>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};
export default ContactContent;
