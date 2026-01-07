import ThemeToggle from '../theme-toggle';
import './Navbar.scss';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';

export default function MyNavbar() {
  const { theme } = useTheme();
  
  return (
    <Navbar className={theme === 'dark' ? 'bg-dark text-white' : 'bg-body-tertiary'}>
        <Container className={theme === 'dark' ? 'bg-dark text-white' : 'bg-white'}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://blogzine.webestica.com/assets/images/logo.svg"
              width="150"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav activeKey="/home" className={theme === 'dark' ? 'text-white' : ''}>
            <Nav.Item className='d-flex '>
              <Nav.Link href="/home" active className={theme === 'dark' ? 'text-white' : ''}>Home</Nav.Link>
              <Nav.Link href="/pages" className={theme === 'dark' ? 'text-white' : ''}>Pages</Nav.Link>
              <Nav.Link href="/post" className={theme === 'dark' ? 'text-white' : ''}>Post</Nav.Link>
              <Nav.Link href="/lifestyle" className={theme === 'dark' ? 'text-white' : ''}>Lifestyle</Nav.Link>
              <Nav.Link href="/dashboard" className={theme === 'dark' ? 'text-white' : ''}>Dashboard</Nav.Link>
              <Nav>
                <ThemeToggle></ThemeToggle>
              </Nav>
              <Button variant="danger text-white">
                Subscribe
              </Button>
              <Nav.Link href="search" className={theme === 'dark' ? 'text-white' : ''}>
                <i className="bi bi-search fs-5"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
    </Navbar>
    
  )
}
