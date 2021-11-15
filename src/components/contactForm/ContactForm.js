import React from "react";
import PropTypes from 'prop-types';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = ({target}) => {
    setName(target.value);
  };

  const handlePhoneChange = ({target}) => {
    setPhone(target.value);
  }

  const handleEmailChange = ({target}) => {
    setEmail(target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        pattern="^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*"
        placeholder='Your Name'
        value={name}
        onChange={handleNameChange}
        required
      />

      <label htmlFor='phone'>Phone number:</label>
      <input
        type='tel'
        id='phone'
        pattern='^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$'
        placeholder='(XXX) XXX-XXXX'   
        value={phone} 
        onChange={handlePhoneChange} 
        required
      />

      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        pattern="^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$"
        placeholder='your@email.com'
        value={email}
        onChange={handleEmailChange}
        required
      />
      <input type='submit' value='Submit' />
    </form>
  );
};

ContactForm.propTypes = {
  name:         PropTypes.string.isRequired,
  phone:        PropTypes.string.isRequired,
  email:        PropTypes.string.isRequired,
  setName:      PropTypes.func.isRequired,
  setPhone:     PropTypes.func.isRequired,
  setEmail:     PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}