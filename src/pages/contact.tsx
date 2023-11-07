import Form from "../components/form"

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
                    <h2 className="contact__title">Send Me A Message</h2>

                    {/* Using the Form component here */}
                    <Form />

                </div>
            </div>
        </section>  
    );     
}
export default Contact;
