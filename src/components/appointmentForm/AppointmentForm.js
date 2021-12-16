import React from "react";
import Utils from "../../Util/util";
import {ContactPicker} from '../contactPicker/ContactPicker';
import PropTypes from 'prop-types';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  defaultListValue
}) => {
  //getting current date
  const today = Utils.getTodayString();
  const handleTitleChange = ({target}) => {
    setTitle(target.value);
  }
  const handleDateChange = ({target}) => {
    setDate(target.value);
  }
  const handleTimeChange = ({target}) => {
    setTime(target.value);
  }
  const handleContactChange = ({target}) => {   
    setContact(target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={handleTitleChange}
          placeholder={'enter title'}
          required
        />

        <label htmlFor='apt-date'>Date:</label>
        <br/>
        <input 
          type='date'
          id='apt-date'
          value={date}
          onChange={handleDateChange}
          min={today}
          placeholder={today}
          required
        />
        <br/>
        <label htmlFor='apt-time'>Time:</label>
        <br/>
        <input
          type='time'
          id='apt-time'
          value={time}
          onChange={handleTimeChange}
          min="08:00"
          max="18:00"
          required
        />

        <ContactPicker 
          contacts={contacts}
          onChange={handleContactChange}
          defaultListValue={defaultListValue} />

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

AppointmentForm.propTypes = {
  contacts:         PropTypes.array.isRequired,
  title:            PropTypes.string.isRequired,
  setTitle:         PropTypes.func.isRequired,
  contact:          PropTypes.string.isRequired,
  setContact:       PropTypes.func.isRequired,
  date:             PropTypes.string.isRequired,
  setDate:          PropTypes.func.isRequired,
  time:             PropTypes.string.isRequired,
  setTime:          PropTypes.func.isRequired,
  handleSubmit:     PropTypes.func.isRequired,
  defaultListValue: PropTypes.string.isRequired
}