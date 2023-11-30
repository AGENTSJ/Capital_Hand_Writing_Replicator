import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authcontext'
import { useRef } from 'react'
import'../styles/display.css'
const Display = (props) => {
  
    const {authToken,setAuthToken} = useContext(AuthContext)

    const [img,setimg] = useState(null)

    let desc = useRef(null)

    async function fetchPic(){
        const  response = await fetch("http://127.0.0.1:5000/image/aout",{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'Authorization':authToken.split('=')[1]
            },
            body:JSON.stringify({"inputstring":desc.current.value})
          })
          let data = await response.json()
          setimg(data.a4)
          
        }
    
  return (
    <>
    <div className="dcont">

    <img src={`data:image/png;base64,${img}`} className='image' alt="" />
    <textarea className='desc' placeholder='Insert text here' ref={desc} cols="30" rows="10"></textarea>
    <button onClick={fetchPic}>get Pic</button>
    </div>
    </>

  )
}

export default Display
