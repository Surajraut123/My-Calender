import React from 'react'
import Chat_Contact from '../MessageView/Chat_Contact'
import Chat_Details from '../MessageView/Chat_Details'

const Home = () => {
  return (
    <div className='msg-home-page'>
        <div className='msg-container'>
            <Chat_Details/>
            <Chat_Contact/>
            
        </div>
    </div>
  )
}

export default Home
