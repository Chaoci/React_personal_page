import React, { useState } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
      </form>

      <div onClick={handleButtonClick} role="button" tabIndex={0} className="btn btn-2 hover-filled-opacity">
        <a href="#3"><span>Send Email</span></a> 
      </div>
    </div>
  );
}

export default ContactForm;
