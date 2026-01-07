import './Navbar.scss';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';


export default function MyNavbar() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container className='bg-white'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://blogzine.webestica.com/assets/images/logo.svg"
              width="150"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav activeKey="/home">
            <Nav.Item className='d-flex '>
              <Nav.Link href="/home" active>Home</Nav.Link>
              <Nav.Link href="/pages">Pages</Nav.Link>
              <Nav.Link href="/post">Post</Nav.Link>
              <Nav.Link href="/lifestyle">Lifestyle</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/theme">
                <i className="bi bi-sun"></i>
              </Nav.Link>
              <Nav.Link href="/dots">
                <i className="bi bi-three-dots"></i>
              </Nav.Link>
              <Button variant="danger text-white">
                Subscribe
              </Button>
              <Nav.Link href="search">
                <i className="bi bi-search fs-5"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
    </Navbar>
    
  )
}
