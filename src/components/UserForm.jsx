import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap'
import * as Yup from 'yup'

const UserForm = ({ handleClose }) => {
    const initialvalues = {
        firstname: "",
        lastname: "",
        emailid: "",
        mobileno: "",
        location: "",
        company: ""
    }
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("firstname is required"),
        lastname: Yup.string().required("lastname is required"),
        emailid: Yup.string().required("emailid is required"),
        mobileno: Yup.string().required("mobileno is required"),
        location: Yup.string().required("location is required"),
        company: Yup.string().required("company is required")
    })
    const onSubmit = (values, { setSubmitting }) => {
        console.log("form values", values);

        try {
            alert(JSON.stringify(values));
            setSubmitting(false);
            handleClose();
        } catch {

        } finally {

        }
    }
    return (
        <div>
            <Formik
                initialValues={initialvalues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ isSubmitting, touched, errors }) => (
                    <Form>
                        <Row>
                            <Col md={4}>
                                <BootstrapForm.Group controlId='firstname'>
                                    <BootstrapForm.Label>First Name</BootstrapForm.Label>
                                    <Field type='text' as='select' name='firstname' className={touched.firstname && errors.firstname ? "form-control is inavalid" : "form-control"} >
                                        <option value='option1'>Option1</option>
                                        <option value='option2'>Option2</option>
                                    </Field >
                                    {touched.firstname && errors.firstname && (<div className='text-danger'>{errors.firstname}</div>)}
                                </BootstrapForm.Group>
                            </Col>
                            <Col md={4}>
                                <BootstrapForm.Group controlId=' lastname'>
                                    <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                                    <Field type='text' name='lastname' className={touched.lastname && errors.lastname ? "form-control is inavalid" : "form-control"} />
                                    {touched.lastname && errors.lastname && (<div className='text-danger'>{errors.lastname}</div>)}
                                </BootstrapForm.Group>
                            </Col>
                            <Col md={4}>
                                <BootstrapForm.Group controlId='emailid'>
                                    <BootstrapForm.Label>Email Id</BootstrapForm.Label>
                                    <Field type='text' name='emailid' className={touched.emailid && errors.emailid ? "form-control is inavalid" : "form-control"} />
                                    {touched.emailid && errors.emailid && (<div className='text-danger'>{errors.emailid}</div>)}
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <BootstrapForm.Group controlId='mobileno'>
                                    <BootstrapForm.Label>Mobile No</BootstrapForm.Label>
                                    <Field type='text' name='mobileno' className={touched.mobileno && errors.mobileno ? "form-control is inavalid" : "form-control"} />
                                    {touched.mobileno && errors.mobileno && (<div className='text-danger'>{errors.mobileno}</div>)}
                                </BootstrapForm.Group>
                            </Col>
                            <Col md={4}>
                                <BootstrapForm.Group controlId='location'>
                                    <BootstrapForm.Label>Location</BootstrapForm.Label>
                                    <Field type='text' name='location' className={touched.location && errors.location ? "form-control is inavalid" : "form-control"} />
                                    {touched.location && errors.location && (<div className='text-danger'>{errors.location}</div>)}
                                </BootstrapForm.Group>
                            </Col>
                            <Col md={4}>
                                <BootstrapForm.Group controlId='company'>
                                    <BootstrapForm.Label>Company</BootstrapForm.Label>
                                    <Field type='text' name='company' className={touched.company && errors.company ? "form-control is inavalid" : "form-control"} />
                                    {touched.company && errors.company && (<div className='text-danger'>{errors.company}</div>)}
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Button type='submit'>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                )}

            </Formik >

        </div>
    )
}

export default UserForm