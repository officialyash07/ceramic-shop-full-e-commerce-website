import classes from '../../styles/OurJourney.module.css';

import story_img from '../../assets/our-story.jpg';
import journey_img from '../../assets/our-journey.jpg';

const OurJourney = () => {
    return (
        <div className={classes.journeyContainer}>
            <div className={classes.storyImg}>
                <img src={story_img} alt="" />
            </div>
            <div className={classes.journey}>
                <div className={classes.journeyImg}>
                    <img src={journey_img} alt="" />
                </div>
                <div>
                    <h5>our journey</h5>
                    <p className={classes.heading}>Our Ceramic Odyssey Crafting Beauty and Quality.</p>
                    <p className={classes.para1}>
                        Our company story is a testament to the enduring love for craftsmanship, where we combine our
                        passion for ceramics with an unwavering commitment to quality and timeless beauty. Explore the
                        journey that has led us to become a trusted source for exquisite ceramic products. We&apos;re
                        proud to share our story, which mirrors the growth of a dream into a thriving destination for
                        exceptional creations, reflecting artistry and innovation.
                    </p>
                    <p className={classes.para2}>
                        Our dedication to crafting elegant, functional ceramic pieces that enhance everyday living is at
                        the heart of our narrative, and it&apos;s a story we&apos;re excited to share with you.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default OurJourney;
