import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        2023 KIPCOOL Headphones  All rights reservered
      </p>
          <p className='icons'>
            <AiFillInstagram />
            <AiFillFacebook />
            <AiOutlineTwitter />  
          </p>
    </div>
  )
}

export default Footer