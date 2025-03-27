import React from 'react'
import './Footer.css'

const Footer = () => {
  let footerStyle ={
    position : "relative",
    width: "100%",
    top: "10vh",
    border: "2px solid gray"
  }
  return (
    <footer>
    <div className='bg-dark text-center text-light p-4' style={footerStyle}>
      
        Copyright &copy; MyTodosList.com
      
      
    </div>
    </footer>
  )
  
}

export default Footer
