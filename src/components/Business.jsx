import { features } from '../constants';
import styles, { layout } from '../style'
import Button from './Button';

const FeatureCard = ( {icon, title, content, index}) => (
    <div>
        <div>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
    </div>
)


const Business = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /></h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quae odio soluta atque libero hic cumque dolor labore et ut!</p>

                <Button styles="mt-20" />

                <div className={`${layout.sectionImg} flex-col`}>
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.id} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Business;