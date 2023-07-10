import React from 'react'
import {FaRegCalendarAlt} from 'react-icons/fa';
import {BsChatText} from 'react-icons/bs';
import {NavLink } from 'react-router-dom';
const sidebar = () => {



  return (
    <div className='leftSideswitch'>
      <div className='calenderSymbol' >
        
        <NavLink  className='calendericon' to="/">
          <FaRegCalendarAlt className='cicon'/>
          <span className= "uni">Calendar</span>
        </NavLink>  
      </div>  
      <div className='calenderSymbol'>
        <NavLink className='chatIcon' to="/home">
          <BsChatText className='cIcon'/>
          <span className='uni'>Chat</span>
        </NavLink>  
      </div>  
      
    </div>
  )
}

export default sidebar
