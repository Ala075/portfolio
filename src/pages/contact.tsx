

const Contact=()=>{
    return(
        <section className="contact section" id="contact">
            <div className="contact__container grid">
                <div className="contact__data">
                    <h2 className="section__title-2">
                        <span>Contact Me.</span>
                    </h2>
                    
                    <p className="contact__description-1">
                        I will read all emails. Send me any message you want and I'll get back to you.
                    </p>
                    
                    <p className="contact__description-2">
                        I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.
                    </p>
                    
                    <div className="geometric-box"></div>
                </div>
                
                <div className="contact__mail">
                    <h2 className="contact__title">
                        Send Me A Message
                    </h2>
                    
                    <form action="" className="contact__form" id="contact-form">
                        <div className="contact__group">
                            <div className="contact__box">
                                <input type="text" name="user_name" className="contact__input" id="name" required placeholder="First Name "/>
                                <label htmlfor="name" className="contact__label">First Name </label>
                            </div>
                            
                            <div className="contact__box">
                                <input type="email" name="user_email" className="contact__input" id="email" required placeholder="Email Address"/>
                                <label htmlfor="email" className="contact__label">Email Address</label>
                            </div>
                        </div>
                            
                        <div className="contact__box">
                            <input type="text" name="user_subject" className="contact__input" id="subject" required placeholder="Subject"/>
                            
                            <label htmlfor="subject" className="contact__label">Subject</label>
                        </div>
                            
                        <div className="contact__box contact__area">
                            <textarea name="user_message" id="message" className="contact__input" placeholder="Message" required></textarea>
                            <label htmlfor="message" className="contact__label">Message</label>
                        </div> 
                          
                        <p className="contact__message" id="contact-message"></p>                            
                        <button className="contact__button button" type="submit">
                            <i className="ri-send-plane-line"></i> Send Message
                        </button>       
                    </form>
                </div>
            </div>
        </section>  
    );     
}
export default Contact;
