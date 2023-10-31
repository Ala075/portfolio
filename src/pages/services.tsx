

const Services=()=>{
    return(
    <>
        <section className="services section">
             <h2 className="section__title-2">
                 <span>Services.</span>
             </h2>
            <div className="services__container container grid">
                <div className="services__card">
                    <div className="services__border"></div>
                    
                    <div className="services__content">
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i className="ri-layout-4-line"></i>
                        </div>
                        <h2 className="services__title">
                            Web Design
                        </h2>
                        <p className="services__description">
                            Beautiful and elegant designs with interfaces that are intuitive, efficient and pleasant  to use for the user.
                        </p>
                    </div>
                </div>
                <div className="services__card">
                    <div className="services__border"></div>
                    
                    <div className="services__content">
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i className="ri-code-box-line"></i>
                        </div>
                        <h2 className="services__title">
                            Develement Web
                        </h2>
                        <p className="services__description">
                            Custom web development tailored to your specifications, designed to provide a flawless user experience.
                        </p>
                    </div>
                </div>
                <div className="services__card">
                    <div className="services__border"></div>
                    
                    <div className="services__content">
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i className="ri-smartphone-line"></i>
                        </div>
                        <h2 className="services__title">
                            Developement Mobile
                        </h2>
                        <p className="services__description">
                            Design and transform website projects into mobile apps to provide a seamless user experience.
                        </p>
                    </div>
                </div>
            </div>
         </section>
      </>
    )
}
export default Services 
