import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Nav.css'

function Navb() {
  return (
    <>
      <Navbar id='navbar'  bg="light" expand="lg" data-bs-theme="light">
        <Container fluid  >
          <Navbar.Brand href="/" className='ms-4' id='brand'><span style={{color:'red'}}> 
            J</span>aswanth</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className=' me-4 ms-lg-auto'>
            {/* <Nav.Link id='work'><Link id='link' to='/project' >Work</Link></Nav.Link> */}
            <Nav.Link id='about'><Link id='link' to='/about'>About</Link></Nav.Link>
            <Nav.Link  id='skill'><Link id='link' to='/skill'>Skill</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;