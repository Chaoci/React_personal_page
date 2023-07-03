import React, { useState } from 'react';
import './Contact.css'


function ContactForm() {
  var recipient = 'new.chaoci@gmail.com';
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink);
  };

  const handleButtonClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink);
  };

  return (
    <div className='Contact-wrapper' id="contact">
      <div className="Contact-card">
        <h2>Contact Me</h2>
        <p>Reach Me Here</p>
        <form onSubmit={handleSubmit} className='Contact-form'>
          <label>
            Subject<br/>
            <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </label>
          <label>
            Message<br/>
            <textarea id="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
        </form>

        <div onClick={handleButtonClick} role="button" tabIndex={0} className="btn btn-2 hover-filled-opacity">
          <a href="#3"><span>Send Email</span></a> 
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
