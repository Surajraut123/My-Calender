import React from 'react'
import timeslot from '../time_slots.json'
const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        Calender
      </div>
      <span id='username'>{timeslot.user}</span>
    </>  
  )
}

export default Navbar
