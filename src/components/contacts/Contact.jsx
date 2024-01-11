import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs'
import { useForm } from '@formspree/react'

const Contact = () => {

        const [state, handleSubmit] = useForm("xbjedjzo");
        if (state.succeeded) {
            return <p>Thanks For Reaching out. We will get back to you</p>;
        }
    return(
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>vincentlyondo12@gmail.com</h5>
                        <a href="mailto:Vincentlyondo12@gmail.com" rel='noreferrer' target="_blank">Send A Mail</a>
                    </article>
                    <article className="contact__option">
                        <FaPhoneAlt className='contact__option-icon'/>
                        <h4>Phone Number</h4>
                        <h5>+260772942123</h5>
                        <a href="tel:+260772942123" rel='noreferrer' target="_blank">Call Me</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <a href="https://wa.me/message/ZLUW6IEGIWCPP1" rel='noreferrer' target="_blank">Send A Message</a>
                    </article>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="Message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary' disabled={state.submitting}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
