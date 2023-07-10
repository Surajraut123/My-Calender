import React from 'react'
// import Navbar from '../Calendar/Navbar'
// import Sidebar from '../Calendar/Sidebar'
import Shedule from '../Calendar/Daily_Shedule'

const home = () => {
  return (
    <>

    <div className='home'>
      {/* <div className='container'>
        <Navbar/>
      </div> */}
      <div className='block'>
        {/* <Sidebar/> */}
        <Shedule/>
      </div>    
    </div>
    </>
  )
}

export default home
