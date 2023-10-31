function Card({ icon, title, description}){

    return(
        <>
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
        </>
    );
}
export default Card;
