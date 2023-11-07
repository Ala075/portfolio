

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
                            <a href="" target="_blank" className="contact__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            
                            <a href="" target="_blank" className="contact__social-link">
                                <i className="ri-facebook-box-line"></i>
                            </a>
                            
                            <a href="" target="_blank" className="contact__social-link">
                                <i className="ri-linkedin-box-line"></i>
                            </a>   
                        </div>
                    </div>   
                </div>        
            </div>
        
            <div className="copyright">
                <p>
                    <div className="marquee">
                        2023 <i className="fa-regular fa-copyright">  
                        </i>
                        Copyright | All right reserved .
                    </div>
                </p>
            </div>
        </div>
    );
}
export default Footer;
