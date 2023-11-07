
interface CardProps {
    image: string;
    subtitle: string ;
    title: string;
    description: string;
    links: { 
        github: string; 
        github2: string; 
    };
}


function Card({ image, subtitle, title, description, links }: CardProps){

    return(
        <div className="projects__card">
              <div className="projects__image">
                  <img src={image} alt="image" className="projects__img" />
                   <a href="#" className="projects__button button">
                       <i className="ri-arrow-right-up-line"></i>
                    </a>
              </div>
                    
              <div className="projects__content">
                  <h3 className="projects__subtitle">
                      {subtitle}
                  </h3>
                  <h2 className="projects__title">
                      {title}
                  </h2>
                        
                  <p className="projects__description">
                      {description}
                  </p>
              </div>
              
              <div className="projects__buttons">
                  <a href={links.github} target="_blanc" className="projects__link">
                      <i className="ri-github-line"></i>View
                  </a>
                        
                  <a href={links.github2} target="_blanc" className="projects__link">
                      <i className="ri-github-line"></i>View
                  </a>
            </div>
        </div>
    );
}
export default Card;
