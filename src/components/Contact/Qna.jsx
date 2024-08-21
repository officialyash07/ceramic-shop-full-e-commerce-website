import { useState } from 'react';

import classes from '../../styles/Qna.module.css';

import { AngleDown, AngleUp } from '../../icons';

const Qna = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleToggle = (index) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    const faqs = [
        {
            question: 'Ordering and Shipping',
            answer: 'Find answers to questions about the ordering process, shipping options, delivery times, and tracking your ceramic product shipments.',
        },
        {
            question: 'Product Care and Maintenance',
            answer: 'Learn how to care for and maintain your ceramic products to ensure their longevity and beauty. Get tips on cleaning, handling, and preserving your pieces.',
        },
        {
            question: 'Returns and Refunds',
            answer: 'Discover our policies on returns and refunds. This section explains how to initiate a return, the eligibility criteria, and the refund process for your ceramic purchases.',
        },
        {
            question: 'Custom Orders and Personalization',
            answer: 'Interested in custom or personalized ceramic products? Here, you’ll find information on how to place custom orders and personalize your items to make them uniquely yours.',
        },
        {
            question: 'Contact and Customer Support',
            answer: 'Have questions or need assistance? Find details on how to get in touch with our customer support team, including contact information and response times. We’re here to help with any inquiries you may have.',
        },
    ];

    return (
        <div className={classes.qna}>
            {faqs.map((faq, index) => (
                <div key={index} className={classes.qnaItem}>
                    <div onClick={() => handleToggle(index)} className={classes.question}>
                        <p>{faq.question}</p>
                        <div>{selectedQuestion === index ? <AngleUp /> : <AngleDown />}</div>
                    </div>
                    <div className={`${classes.answer} ${selectedQuestion === index ? classes.show : ''}`}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Qna;
