import ContactContent from '../components/Contact/ContactContent';
import ContactFaq from '../components/Contact/ContactFaq';
import ContactHero from '../components/Contact/ContactHero';
import { HomeUncover } from '../components/Home';

const ContactPage = () => {
    return (
        <div>
            <ContactHero />
            <ContactContent />
            <ContactFaq />
            <HomeUncover />
        </div>
    );
};
export default ContactPage;
