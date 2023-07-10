import records from '../contact_details.json'
const Contact_name = ()=> { 

  const contacts = records[0].contact;
  return (
    <div className='msg-chats'>
      <div className='msg-userchat'>
          {contacts.map((con,index)=>{
            return(<div key={index} className='msg-userchatinfo'>
                      <p id='id2'>{con}</p>
                  </div>)
          })}
      </div>
    </div>
  )
}

export default Contact_name
