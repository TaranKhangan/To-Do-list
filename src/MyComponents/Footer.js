import React from 'react'
//import './footer.css'

const Footer = () => {
  let footerStyle ={
    position : "absolute",
    width: "100%",
    top: "100vh",
    border: "2px solid gray"
  }
  return (
    <footer>
    <div className='bg-dark text-light mt-4 p-4' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodosList.com
      </p>
      
    </div>
    </footer>
  )
  
}

export default Footer
