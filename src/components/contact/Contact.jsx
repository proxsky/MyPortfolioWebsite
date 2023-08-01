import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>
      
        <div className="contact__content container grid">
            <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">xiaohuangricky@gmail.com</span>
            </div>
            <div className="contact__card">
                <i className="bx bx-phone contact__card-icon"></i>
                <h3 className="contact__card-title">Phone</h3>
                <span className="contact__card-data">502-403-3976</span>
            </div>
        </div>
     
    </section>
  )
}

export default Contact
