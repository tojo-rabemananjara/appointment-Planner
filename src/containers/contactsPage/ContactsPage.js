import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {contacts, addContact} = props;

  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect( () => {
    const names = contacts.map(contact => contact.name);
    if (names.length > 0 && names.indexOf(currentName) !== -1) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(currentName, currentPhone, currentEmail);
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    } else {
      alert(`${currentName} already appears in contacts!`);
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={currentName}
          phone={currentPhone}
          email={currentEmail}
          setName={setCurrentName}
          setPhone={setCurrentPhone}
          setEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objectList={contacts} />
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts:   PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
}