import Data from "../../data/db.json"
import Card from '../components/cardService';

const Services = () => {

    const{services}=Data;

    return (
        <>
            <section className="services section">
                <h2 className="section__title-2">
                    <span>Services.</span>
                </h2>
                <div className="services__container container grid">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;
