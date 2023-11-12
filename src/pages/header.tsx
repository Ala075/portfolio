import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('light');
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const currentTheme = localStorage.getItem('selected-theme');
        if (currentTheme) {
            setSelectedTheme(currentTheme);
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', selectedTheme === 'dark');
    }, [selectedTheme]);

    const handleThemeChange = () => {
        const newTheme = selectedTheme === 'light' ? 'dark' : 'light';
        setSelectedTheme(newTheme);
        localStorage.setItem('selected-theme', newTheme);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const handleScroll = () => {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 58 && rect.bottom > 58) {
                  setActiveSection(section.id);
                    setMenuVisibility(false);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };

    const closeMenu = () => {
        setMenuVisibility(false);
    };

    return (
        <div className={`header ${selectedTheme === 'dark' ? 'dark-theme' : ''}`} id="header">
            <div className="background-overlay"></div>
            <div className="nav container">
                <a href="#" className="nav__logo">
                    <span className="nav__logo-circle">AA</span>
                    <span className="nav__logo-name">Ala Arfaoui.</span>
                </a>

                <div className={`nav__menu ${isMenuVisible ? 'show-menu' : ''}`} id="nav-menu">
                    <span className="nav__title">Menu</span>
                    <h3 className="nav__name">Ala Arfaoui</h3>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}>
                                About Me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className={`nav__link ${activeSection === 'projects' ? 'active-link' : ''}`}>
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className={`nav__link nav__link-button ${activeSection === 'contact' ? 'active-link' : ''}`}>
                                Contact Me
                            </a>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close" onClick={closeMenu}>
                        <i className="fa-solid fa-close"></i>
                    </div>
                </div>

                <div className="nav__buttons">
                    <i
                        className={`ri-${selectedTheme === 'dark' ? 'sun' : 'moon'}-line change-theme ${selectedTheme === 'dark' ? 'dark-theme' : ''}`}
                        id="theme-button"
                        onClick={handleThemeChange}
                    ></i>
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className="ri-menu-5-line"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
