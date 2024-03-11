import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SubHead = ({ pageTitle, anotherTitle }) => {
    return (
        <div>
            <Container fluid style={{ backgroundColor: 'palegoldenrod', height: '40px' }}>
                <Row>
                    <Col md={4}>{pageTitle}</Col>

                    <Col md={6}>
                        {
                            anotherTitle && <ul className="refer">
                                <li><Link to='/'>Home</Link></li>
                                <li>{pageTitle}</li>
                            </ul>

                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SubHead