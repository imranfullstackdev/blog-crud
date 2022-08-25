import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

const NavbarEqaim = () => {
  const navigate=useNavigate()
  const navViewPage=()=>{
    navigate('/')
  }
  return (
    <>
     <Navbar>
    <Container className="navbarLogo">
        {/* logo */}
      <Navbar.Brand href="#home">
        <img onClick ={navViewPage}
          src={
            "https://eqaim.com/static/media/eqaim_logo.7931af7c1cc14118a5440d37a7e4de86.svg"
          }
          alt="LOGO"
        />
      </Navbar.Brand>
      {/* Home icon */}
      <Nav >
        <Nav.Link href="#Addproduct" className="addtopageicon">
          
          <h6 style={{ color: "#3058a7" }} onClick ={navViewPage}><AiFillHome/></h6>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </>
  )
}

export default NavbarEqaim