import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation} from "react-router-dom";
import {Context} from "../index";
import {LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE} from "../utils/consts";


const Auth = () => {
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
    >
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-3"
                    placeholder="Введите ваш email..."
                    
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите ваш пароль..."
                   
                    type="password"
                />
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTER_ROUTE}>зарегистрируйтесь</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>войдите</NavLink>
                        </div>
                    }
                    <Button
                        variant={"outline-success"} style={{marginTop: "15px"}}
                    >
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Row>

            </Form>
        </Card>
    </Container>
  );
}

export default Auth;