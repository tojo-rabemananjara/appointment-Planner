import React, { useState } from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";
import PropTypes from 'prop-types'; 

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState(''); //contact here is a string!
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const defaultListValue = 'Make a selection';

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
    document.getElementById('contactList').value = '';
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          contacts={contacts}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
          defaultListValue={defaultListValue}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objectList={appointments} />
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  appointments:   PropTypes.array.isRequired,
  contacts:       PropTypes.array.isRequired,
  addAppointment: PropTypes.func.isRequired
}