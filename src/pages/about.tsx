

const About=()=>{
    return(
        <section className="about section" id="about">
             <div className="about container" id="about">
                 <div className="about__container container grid">
                     <h2 className="section__title-1">
                         About Me
                     </h2>
                     <div className="about__perfil">
                         <div className="about__image">
                             <img src="src/assets/profile-pic (5).png" alt="" className="about__img"/>
                         </div>
                         <div className="about__shadow">
                         </div>
                         <div className="geometric-box">
                         </div>
                         
                         <img src="src/assets/random-lines.svg" alt="" className="about__line"/>
                         <div className="about__box">
                         </div>
                     </div>
                     
                     
                     <div className="about__info">
                         <p className="about__description">
                             Passionate about creating <b>Web Pages and Mobile Applications</b> with 
<b>UI/UX User Interface</b>, I have 3 years of 
experience and many clients are happy with 
the projects carried out.
                         </p>
                         <ul className="about__list">
                             <li className="about__item">
                                 <b>My Skills Are:</b> Kotlin, HTML, CSS, JavaScript, 
MongoDB, Express, React Js, Node Js, Tailwind, Git & GitHub.
                             </li>
                         </ul>
                         
                         <div className="about__buttons">
                             <a href="#contact" className="button">
                                 <i className="ri-send-plane-line"></i>Contact Me
                             </a>
                             <a href="https://www.linkedin.com/in/ala-arfaoui" target="_blank" className="button__ghost">
                                 <i className="ri-linkedin-box-line"></i>
                             </a>
                         </div>
                     </div>
                 </div>  
             </div>
         </section>
    );
}
export default About;
