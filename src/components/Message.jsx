import  { useState } from 'react'

const Message = () => {
    const [message, setMessage] = useState("Welcome visitors")
  return (
    <div>
    <h1>{message}</h1> 
    <button onClick={()=> setMessage('Thank you for subscribing')}></button> 
    </div>
  )
}

export default Message
