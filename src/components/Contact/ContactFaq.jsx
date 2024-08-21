import classes from '../../styles/ContactFaq.module.css';

import Qna from './Qna';

const ContactFaq = () => {
    return (
        <div className={classes.faqContainer}>
            <div>
                <h2>FAQs</h2>
                <h4>
                    Find answers to common questions about our ceramic products, ordering, shipping, care, and more. If
                    you need further information, feel free to contact our support team.
                </h4>
            </div>
            <div className={classes.qnaContainer}>
                <Qna />
            </div>
        </div>
    );
};
export default ContactFaq;
