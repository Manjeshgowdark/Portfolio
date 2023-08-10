import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import  {useRef} from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_apn9ivm', 'template_jjnl5ko', form.current, 'RYhjtnQeMux891JJI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>manjeshgowdark10@gmail.com</h5>
            <a href="mailto:phphoenix83@gmail.com" target='_blank '>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'  placeholder='Your full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact