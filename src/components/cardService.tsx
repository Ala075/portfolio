
interface CardProps {
    icon: string;
    title: string;
    description: string;
}


function Card({ icon, title, description}: CardProps){
    return(
        <div className="services__card">
            <div className="services__border"></div>
                    
            <div className="services__content">
                <div className="services__icon">
                    <div className="services__box"></div>
                    
                    <i className={icon}></i>
                </div>
                
                <h2 className="services__title">
                    {title}
                </h2>
                <p className="services__description">
                    {description}
                </p>
            </div>
        </div>
    );
}
export default Card;
