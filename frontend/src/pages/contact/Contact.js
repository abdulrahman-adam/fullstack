import React, { useState } from 'react';
import api from '../../services/api'; 
import "./Contact.css";


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setConfirmationMessage(''); // Reset previous messages
    setErrorMessage('');

    try {
      await api.post('/api/contact/add', formData);
      setConfirmationMessage('✅ We received your message, thank you! We will contact you soon!');
      setFormData({ name: '', telephone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error creating contact:', error.response ? error.response.data : error.message);
      setErrorMessage('❌ Failed to create contact.');
    } finally {
      setLoading(false);
    }
  };

  return (

    <section style={{height:""}}>
      <h4 className="title" style={{textAlign:"center", margin:"26px auto"}}>Contact Us</h4> 
      <section className='parent'>

        <div className="side-information">
      <h5
        className="text-center"
        style={{
          backgroundColor: '#0d6efd',
          borderRadius: '6px',
          padding: '11px',
          width: '300px',
          margin: '12px auto'
        }}
      >
        Contact our team
      </h5>

      <p
        className="text-center"
        style={{
          backgroundColor: 'rgb(208, 208, 201)',
          borderRadius: '6px',
          padding: '11px',
          width: 'auto'
        }}
      >
        To get in touch with our team at Ayacodia, please feel free to reach out via email.
        <br /><br />
        We welcome your inquiries, feedback, or any questions you may have. Our dedicated team is here to assist you and will respond as promptly as possible.​
        <br /><br />
        We look forward to hearing from you and assisting with your needs.
      </p>

      <span>
        <a href="mailto:info@ayacodia.com" style={{ textDecoration: 'none' }}>
          <i className="bi bi-envelope"></i> &nbsp;
          <span>info&#64;ayacodia.com</span>
        </a>
      </span>
        </div>

        <div style={{ maxWidth: '400px', padding: '20px' }} className='contact-container'>
        <h4>Fill out the form below and we'll get back to you shortly </h4>
        <form onSubmit={handleSubmit} >
          
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
          <input
            type="text"
            name="telephone"
            placeholder="Your telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px', minHeight: '100px' }}
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {/* Display confirmation or error messages */}
        {confirmationMessage && (
          <div style={{ color: 'green', marginTop: '20px', fontSize: '16px', textAlign: 'center'}}>
            {confirmationMessage}
          </div>
        )}
        {errorMessage && (
          <div style={{ color: 'red', marginTop: '20px', fontSize: '16px', textAlign: 'center'}}>
            {errorMessage}
          </div>
        )}
        </div>

        
      </section>   
    </section>
    
   
  );
}

export default Contact;
