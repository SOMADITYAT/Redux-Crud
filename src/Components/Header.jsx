import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
   
  return (
    <div className='header  py-3 text-white bg-dark' > 
     <Nav className='d-flex justify-content-end px-5 gap-3  '>
       <Link className='text-white text-decoration-none' to={"/"}>Home</Link>
       <Link className='text-white text-decoration-none' to={"/user"}>User</Link>
     </Nav>
    </div>
  )
}

export default Header