import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'> 
    <div className='footer-parent'>
        <img src={require("../shape-bg.png" )}
         alt="No internet connection"/>
    </div>
    </div>
  )
}

export default Footer