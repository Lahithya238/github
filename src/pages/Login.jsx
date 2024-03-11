import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Col, Row, Container } from 'react-bootstrap'
import * as Yup from 'yup';
import Header from '../components/Header'
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import SubHead from '../components/SubHead';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const initialvalues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('name is required'),
        password: Yup.string().required('password is required')
    })

    const onSubmit = async (values, { setSubmitting }) => {
        console.log("values", values);
        await login(values);
        navigate('/');
    }
    return (
        <>
            <Header />
            <SubHead pageTitle={'Login'} anotherTitle={true} />
            <Formik
                initialValues={initialvalues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ isSubmitting, touched, errors }) => (
                    <Form>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <BootstrapForm.Group controlId='username'>
                                        <BootstrapForm.Label>Username</BootstrapForm.Label>
                                        <Field type='text' name='username' placeholder='username' className={touched.username && errors.username ? "form-control is-inavalid" : "form-control"} />
                                        {touched.username && errors.username && (<div className='text-danger'>{errors.username}</div>)}
                                    </BootstrapForm.Group>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={4}>
                                    <BootstrapForm.Group controlId='password'>
                                        <BootstrapForm.Label>Password</BootstrapForm.Label>
                                        <Field type='password' name='password' placeholder='password' className={touched.password && errors.password ? "form-control is-inavalid" : "form-control"} />
                                        {touched.password && errors.password && (<div className='text-danger'>{errors.password}</div>)}
                                    </BootstrapForm.Group>
                                </Col>
                            </Row>
                            <br />
                            <button type='submit'>Login</button>
                        </Container>
                    </Form>
                )}

            </Formik>


        </>
    )
}

export default Login