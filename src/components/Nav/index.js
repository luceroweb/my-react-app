import Navbar from 'react-bootstrap/Navbar';
import RBNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Nav = () => {
  return (
    <Navbar bg='light' className="mb-3">
      <Container>
        <Navbar.Brand>Show Database</Navbar.Brand>
        <Navbar.Collapse>
          <RBNav.Link href="/">Search</RBNav.Link>
          <RBNav.Link href="/user-show-list">My List</RBNav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav;