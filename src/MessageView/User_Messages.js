import React from 'react'
import record from '../contact_details.json'
export default function Message() {


  return (
    <>
      <div id='msg-demo'></div>
      <div className='message'>
        {record[0].message}
      </div>
    </>  
  )
}

// export default Message
