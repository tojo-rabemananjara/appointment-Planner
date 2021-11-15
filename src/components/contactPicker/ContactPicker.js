import React from "react";
import PropTypes from 'prop-types';

export const ContactPicker = ({contacts, onChange, defaultListValue}) => {
  const names = contacts.map(contact => contact.name);

  return (
    <select
      onChange={onChange}
      id='contactList'
      required
    >
      <option value="" key='default' defaultValue>{defaultListValue}</option>
      {names.map((name,index) => 
        <option 
          value={name}
          key={index}>
            {name}
        </option>)
      }
    </select>
  );
};

ContactPicker.propTypes = {
  contacts:         PropTypes.array.isRequired,
  onChange:         PropTypes.func.isRequired,
  defaultListValue: PropTypes.string.isRequired
}