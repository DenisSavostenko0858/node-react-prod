import React, {useContext, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import ProductList from "../components/ProductList"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchProduct, fetchTypes} from "../http/productAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const {product} = useContext(Context)

  useEffect(() => {
      fetchTypes().then(data => product.setTypes(data))
      fetchBrands().then(data => product.setBrand(data))
      fetchProduct(null, null, 1, 2).then(data => {
        product.setProduct(data.rows)
        product.setTotalCount(data.count)
      })
  }, [])

  useEffect(() => {
    fetchProduct(product.selectedType.id, product.selectedBrand.id, product.page, 2).then(data => {
        product.setProduct(data.rows)
        product.setTotalCount(data.count)
      })
  }, [product.page, product.selectedType, product.selectedBrand,])

  return (
      <Container>
          <Row className="mt-2">
              <Col md={3}>
                  <TypeBar/>
              </Col>
              <Col md={9}>
                  <BrandBar/>
                  <ProductList/>
                  <Pages/>  
              </Col>
          </Row>
      </Container>
  );
});

export default Shop;