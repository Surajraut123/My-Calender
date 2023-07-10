import React, { useEffect} from 'react'
import Swal from 'sweetalert2'
import record from '../contact_details.json'
export default function Input () {

  useEffect(() => {
    alert()
  },);

  const curr = document.getElementById('id3');
  console.log(curr)


  function alert() {

    setTimeout(function() {
      Swal.fire({
        title: 'Can You Please Confirm...',
        // Template literal used
        text: `You are sending a "${record[0].message}" message to "${record[0].title !== "" ? record[0].title : record[0].contact}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(71 68 207)',
        cancelButtonColor: 'rgb(255 0 0)',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if(!result.isConfirmed) {
          Swal.fire('Okay!',
                    'Message has been deleted',
                    'error'
          )
        }
        if (result.isConfirmed) {
          Swal.fire(
            'Sent',
            `Your Message has been sent to ${record[0].title !== "" ? record[0].title : record[0].contact}`,
            'success'
          )
          let inputs = document.querySelector('input')
          inputs.value=""
        }
      })
    },2000)    

  }
  // {<p style={{fontWeight : '800'}} id='id3'>{record[0].message}</p>}
  
  return (
    <div className='msg-input'>
      <input type='text' id='id1' placeholder='Type Someting here...' value={record[0].message}/>
      {/* <div className='send'>
        <button onClick={alert}>Send</button>
      </div> */}
      {/* <p display='' style={{fontWeight : '800'}} id='id3'>{record[0].message}</p> */}
    </div>
  )
}

