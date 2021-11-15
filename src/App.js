import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    if (!name)
      throw Error('no name provided')
    if (!phone)
      throw Error('no number provided')
    if (!email)
      throw Error('no email provided')

    const newContact = {
      name: name,
      phone: phone,
      email: email
    };

    setContacts((prev) => [...prev, newContact]);
  }

  const addAppointment = (title, contact, date, time) => {
    if (!title)
      throw Error('no title provided')
    if (!contact)
      throw Error('no contact provided')
    if (date == null)
      throw Error('no date provided')
    if (time == null)
      throw Error('no time provided')
      
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };

    setAppointments((prev) => [...prev, newAppointment])
  }

  const navStyle = {
    maxWidth: 600,
    margin: '0 auto'
  }

  const mainStyle = {
    maxWidth: 600,
    margin: '0 auto'
  }

  return (
    <>
      <nav style={navStyle}>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main style={mainStyle}>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts}
              addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
