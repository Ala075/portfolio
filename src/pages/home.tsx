

const Home=()=>{
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <h2 className="home__name">
                    Home page
                </h2>
            <div className="home__perfil">
                <div className="home__image">
                    <img src="/src/assets/Picsart_2.jpg" alt="image" className="home__img"/>
                    
                    <div className="home__shadow">
                    </div>
                    
                    <img src="src/assets/curved-arrow.svg" alt="" className="home__arrow"/>
                                    
                    <img src="src/assets/random-lines.svg" alt="" className="home__line"/>
                    <div className="geometric-box"></div>

                </div>
                <div className="home__social">
                    <a href="https://instagram.com/" target="_blank" className="home__social-link">
                         <i className="ri-instagram-line"></i> 
                    </a>
                    <a href="https://www.linkedin.com/in/ala-arfaoui-9a69ab225" target="_blank" className="home__social-link">
                        <i className="ri-linkedin-box-line"></i>
                    </a>
                    <a href="https://github.com/Ala075" target="_blank" className="home__social-link">
                        <i className="ri-github-line"></i>
                    </a>
                </div>
            </div>
            <div className="home__info">
                <p className="home__description">
                    <b>Frontend & Backend</b> Developer, with knowledge in web development and mobile developement, I offer the best projects resulting in quality work.
                    </p>
                    <a href="#about" className="home__scroll">
                        <div className="home__scroll-box">
                            <i className="ri-arrow-down-s-line"></i>
                        </div>
                        <span className="home__scroll-text">
                         Scroll Down
                        </span>
                    </a>
                 </div>
            </div>
         </section>
    );
}
export default Home;
