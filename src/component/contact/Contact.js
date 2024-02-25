import React from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import './Contact.css'
import { useNavigate } from 'react-router';
function Contact() {
    const form = useRef();
    const navigate =useNavigate()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jihv7xf', 'template_3e1a8p1', form.current, 'J7VzkA-mxDVKmpEDX')
          .then(() => {
              alert('Mail send successfully');
          }, () => {
              console.log('internal server error');
          });
          navigate('/')
      }
    
  return (
    <div className="container-fluid  ">
      <div className="row ">
        <div className="col   formcenter">
        
          {/* <!-- contact form --> */}
          <form className='form' ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_body">Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
                name='message'
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact