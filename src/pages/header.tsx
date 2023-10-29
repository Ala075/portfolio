

const Header=()=>{
    return(
        <div className="header" id="header">
         <div className="nav container">
             <a href="#" className="nav__logo">
             <span className="nav__logo-circle">
                 AA
             </span> 
             <span className="nav__logo-name">
                 Ala Arfaoui.
             </span>
             </a>
             
             <div className="nav__menu" id="nav-menu">
                 <span className="nav__title">
                     Menu
                 </span>
                 <h3 className="nav__name">
                     Ala Arfaoui
                 </h3>
                 <ul className="nav__list">
                     <li className="nav__item">
                         <a href="#home" className="nav__link active-link">
                             Home
                         </a>
                     </li>
                     <li className="nav__item">
                         <a href="#about" className="nav__link">
                             About Me
                         </a>
                     </li>
                     <li className="nav__item">
                         <a href="#projects" className="nav__link">
                             Projects
                         </a>
                     </li>    
                     <li className="nav__item">
                         <a href="#contact" className="nav__link nav__link-button">
                             Contact Me
                         </a>
                     </li>
                 </ul>
                 
                 <div className="nav__close" id="nav-close">
                 <i className="fa-solid fa-close"></i>
                 </div>
             </div>
             <div className="nav__buttons">
                
                 <i className="ri-moon-line change-theme" id="theme-button"></i>
                 
                 <div className="nav__toggle" id="nav-toggle">
                     <i class="ri-menu-5-line"></i>
                 </div>
             </div>
         </div>
      </div>
    );
}
export default Header;