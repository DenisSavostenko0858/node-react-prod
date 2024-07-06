import React, { useContext } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink , useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite"
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavLink style={{color:"black", textDecoration:"none", fontSize:"18px", marginLeft:"25px"}} to={"/"}>Parfume</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            {user.isAuth ?
                <Nav className="ml-auto" navbarScroll style={{marginLeft:"50px"}}>
                    <Button onClick={()=> navigate(ADMIN_ROUTE)}>Управление (нужны права admin)</Button>
                    <Button
                            onClick={() => logOut()}
                            className="ml-2"
                            style={{marginLeft:"50px"}}
                        >
                            Выйти
                        </Button>
                </Nav>
            :
                <Nav className="ml-auto" navbarScroll style={{marginLeft:"50px"}}>
                    <Button onClick={()=> navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
});

export default NavBar;