import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import SubHead from '../components/SubHead';

const Shop = () => {
    const { islogin } = useAuth();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const apiUrl = 'https://fakestoreapi.com/products'
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(apiUrl);
            console.log("response", response.data);
            setdata(response.data);
        }
        fetchdata();
    }, [])

    const handleaddTocart = (cartObj) => {
        console.log("cartobjs", cartObj)
        addToCart(cartObj);
    }

    const handleAddtocart = () => {
        navigate('/login');
    }
    return (
        <div>
            <Header />
            <SubHead pageTitle={'Shop'} anotherTitle={true} />
            <Container>
                <Row >
                    {
                        data.length > 0 && data.map((items, index) => (

                            <Col md={3} key={index} style={{ display: 'flex', gap: '10px' }}>
                                <Card style={{ width: '18rem', height: '600px' }}>
                                    <Card.Img src={items.image} style={{ height: '240px' }} />
                                    <Card.Body style={{ height: '250px' }}>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Text>
                                            <p>category:{items.category}</p>
                                            <p>Rating:{items.rating.rate}</p>
                                            <p>price:{items.price}</p>

                                            {
                                                islogin ? <button onClick={() => handleaddTocart(items)}>Addtocart</button> : <button onClick={() => handleAddtocart()}>Addtocart</button>
                                            }

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>


                        ))
                    }
                </Row>
            </Container>




        </div>
    )
}

export default Shop