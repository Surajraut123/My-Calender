import React from 'react'
import Messages from './Messages_Area'
import Input from './Input'
import records from '../contact_details.json'
export default function Chat_Details(){

  const contacts = records[0].contact;
  
  return (
    <div className='msg-chat'>
      <div className='msg-chatinfo'>

        {records[0].title==="" && contacts.map((element, index)=>{
            return<>
              <span key={index}>{element + ","}</span>
              <p>&nbsp;</p>
            </>
        })}
        
        {
          (records[0].title!=="") && (<span>{records[0].title}</span>)
        }
        <p> ...</p>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

// export default Chat_Details
