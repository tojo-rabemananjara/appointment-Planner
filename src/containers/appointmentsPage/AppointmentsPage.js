import React, { useState } from "react";
import Utils from "../../Util/util";
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
    /*
    Send email with appointment details.
    */
    const targetContact = Utils.getContactDetails(contact, contacts);
    const name = targetContact.name;
    const contactEmail = targetContact.email;
    const subject = `${title} with ${name}`;
    const ebody = `Dear ${name},\r\n\r\nI'd like to schedule an appointment with you. Here are the details:\r\nTitle: ${title}\r\nDate: ${date}
Time: ${time}\r\nPlease let me know if you can make it, or if another time would be better.\r\n\r\nSincerely,\r\n
`;
    window.open(`mailto:${contactEmail}?subject=${subject}&body=${encodeURIComponent(ebody)}`);
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