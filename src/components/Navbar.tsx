import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom";

import { useShoppingCart } from "../contex/ShoppingCartContext";

import ShoppingIcon from "../assets/shopping.png"



export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/home" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button
                        onClick={openCart}
                        className="cursor-pointer d-flex justify-content-center align-items-center rounded-circle"
                        style={{ width: "3rem", height: "3rem", position: "relative" }}
                        variant="outline-primary"
                    >
                        <img style={{ width: "2rem", height: "2rem" }} src={ShoppingIcon} alt="Shopping" />
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: 'white',
                                height: "1.3rem",
                                width: "1.3rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)"
                            }}
                        >{cartQuantity}</div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    );
}
