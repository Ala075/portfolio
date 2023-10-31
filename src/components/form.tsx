import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function Form(){

    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xupxysd', 'template_bplvqe6', '#contact-form', 'srYPRH4RgR10iEaOE')
        .then(() => {
            setMessage('Message sent successfully ✅');
            setTimeout(() => {
                setMessage('');
            }, 5000);
        document.getElementById('contact-form').reset();
        })
        .catch(() => {
            setMessage('Message not sent (service error) ❌');
            setTimeout(() => {
                setMessage('');
            }, 8000);
        document.getElementById('contact-form').reset();
        });
    };

    useEffect(() => {
        const contactForm =                  document.getElementById('contact-form');
        contactForm.addEventListener('submit', sendEmail);

        return () => {
     contactForm.removeEventListener('submit', sendEmail);
        };
    }, []);

    return(
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
    )
}
export default Form
