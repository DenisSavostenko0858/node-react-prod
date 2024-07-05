import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import ProductList from "../components/ProductList"

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
        <TypeBar />
        </Col>
        <Col md={9}>
        <BrandBar />
        <ProductList />
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;