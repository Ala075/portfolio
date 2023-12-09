import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
`;

const Marquee = styled.div`
    white-space: nowrap;
    animation: ${scroll} 10s linear infinite;
`;

const Footer=()=>{
    return(
        <div className="footer">
            <div className="grid">
                <div className="box form">
                    <h3>Newsletter</h3>
                    <p className="contact__social-description-1">Get on the list and get 10% off your first order! 
                    </p>
                    
                    <input type="email" name="" id="" placeholder="Enter your email"/>
                    
                    <button type="submit" className="sub">
                        <a href="#">Subscribe</a>
                    </button>
                </div>
            
                <div className="box" id="contact">
                    <h3>Contact</h3>
                    <div className="contact__social-data">
                        <div>
                            <p className="contact__social-description-1">
                                Does not send emails
                            </p>
                            
                             <p className="contact__social-description-2">
                                Write me on my social networks
                             </p>
                        </div>
                        
                        <div className="contact__social-links">
                            <a href="https://instagram.com/arfaoui_ala75" target="_blank" className="contact__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            
                            <a href="https://www.facebook.com/ala.arfaoui.751" target="_blank" className="contact__social-link">
                                <i className="ri-facebook-box-line"></i>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/ala-arfaoui-9a69ab225" target="_blank" className="contact__social-link">
                                <i className="ri-linkedin-box-line"></i>
                            </a>   
                        </div>
                    </div>   
                </div>        
            </div>
        
            <div className="copyright">
                <p>
                    <Marquee>
                        2023 <i className="fa-regular fa-copyright">  
                        </i>
                        Copyright | All right reserved .
                    </Marquee>
                </p>
            </div>
        </div>
    );
}
export default Footer;
