// import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function NavigationBar() {
    return (
        <Navbar sticky="top">
            <Container>
                <Navbar.Brand className="cfLink" href="#home">
                    {/* <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '} */}
                CFfiction -- Real Life, Made Interesting
                </Navbar.Brand>
            </Container>
            <Nav className="me-auto">
                <Nav.Link href="/">home</Nav.Link>
                <Nav.Link href="/about">about the author</Nav.Link>
                <Nav.Link href="/contact" className="px-2">contact</Nav.Link>
                <Nav.Link href="/reviews" className="px-2">reviews</Nav.Link>
                <Nav.Link href="/press" className="px-2">press</Nav.Link>
                <Nav.Link href="/news" className="px-2">news</Nav.Link>
            </Nav>
        </Navbar>
    )
}