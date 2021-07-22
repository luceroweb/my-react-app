import Navbar from 'react-bootstrap/Navbar';
import RBNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Navbar bg='light'>
      <Container>
        <Navbar.Brand>Show Database Tool</Navbar.Brand>
        <Navbar.Collapse>
          <RBNav.Link href="/">Show Search</RBNav.Link>
          <RBNav.Link href="/user-movie-list">My Movie List</RBNav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav;