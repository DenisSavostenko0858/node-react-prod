import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
// import {useParams} from 'react-router-dom'
// import {fetchOneDevice} from "../http/deviceAPI";

const ProductCard = () => {
    const product = {id: 1, name:'Свеча Gucci', price:25000, rating:1, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adverti.ru%2Fp-15626.html&psig=AOvVaw3Yp8KkefiDbYcagrerSNlS&ust=1720272255623000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDyotf_j4cDFQAAAAAdAAAAABAE'};
    // const [product, setProduct] = useState({info: []})
    // const {id} = useParams()
    // useEffect(() => {
    //     fetchOneDevice(id).then(data => setDevice(data))
    // }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={product.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{product.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {product.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {product.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {/* {product.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )} */}
            </Row>
        </Container>
    );
};

export default ProductCard;