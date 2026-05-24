import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useMenuStore } from '../../store/menuStore';

function Menu() {
    const setActive = useMenuStore((state) => state.setActive);
    const activeKey = useMenuStore((state) => state.menu.active);

    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark ">
            <Container>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle> 
                <Navbar.Collapse>
                    <Nav activeKey={activeKey} onSelect={(selectedKey) => selectedKey && setActive(selectedKey)}>
                        <Nav.Link eventKey='tasks'>Tareas</Nav.Link>
                        <Nav.Link eventKey='goals'>Metas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;