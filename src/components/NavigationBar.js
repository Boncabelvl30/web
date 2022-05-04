import { Container, Navbar, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>Nonton Gratis</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Trending Now</Nav.Link>
                        <Nav.Link>Superhero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar