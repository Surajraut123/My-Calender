import React from 'react'
import {FaRegCalendarAlt} from 'react-icons/fa';
import timeslot from '../time_slots.json'
import Freeslot from './Freeslot';
const Shedule = () => {
  function accessDay() {
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let name = day[d.getUTCDay()];
    return name;
  }
  // const d = new Date();/
  // let a = d.getDate();

  return (
    <>
    <div className='shedule-of-calendar'>
      <div className='currMoment'>
        <div className='heading'>
          <FaRegCalendarAlt className='CalendarSheduleIcon'/>
          <span id='cal'> Calendar </span>
          <span id='user'>{timeslot.user}</span>
        </div>
        <div className='user-time'>
          <div id='today'>Today</div>
          <span id='demo' >{timeslot.startDate}, {accessDay()}</span>
        </div>
      </div>

      <div className='Calendershedule'>
        <Freeslot/>
      </div>
    </div>
    </>  
  )

  

}

export default Shedule
