import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SubHead from '../components/SubHead'
import axios from 'axios'
import { Container, Row, Col, Table } from 'react-bootstrap'
import ActionBar from '../components/ActionBar'
import Modelpop from '../components/Modelpop'
import UserForm from '../components/UserForm'

const Users = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const [data, setdata] = useState([])
    const [modelTitle, setmodelTitle] = useState('')
    const [modelContent, setmodelContent] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modelSetting = (modelTitle, modelContent) => {
        handleShow();
        setmodelTitle(modelTitle)
        setmodelContent(modelContent);
    }

    const handleNewUser = () => {
        console.log('this is new user')
        modelSetting('Add a user', <UserForm handleClose={handleClose} />)

    }
    const handleDeleteUser = () => {
        console.log('this is new user')
        modelSetting('delete a user', 'delete')
    }


    const actionData = [
        { title: "Add new User", action: handleNewUser },
        { title: "Delete new User", action: handleDeleteUser }
    ];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl)
                console.log("response", response.data)
                setdata(response.data)
            } catch (errors) {
                console.log("errors", errors)
            }
        }
        fetchData();
    }, [])
    return (
        <div><Header />
            <SubHead pageTitle={'Users'} anotherTitle={true} />
            <ActionBar actionList={actionData} />
            <Modelpop show={show} handleShow={handleShow} handleClose={handleClose} modelContent={modelContent} modelTitle={modelTitle} />
            Users

            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>Zipcode</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((items, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{items.address.street}</td>
                                <td>{items.address.zipcode}</td>
                                <td>{items.website}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </Table>






        </div>
    )
}

export default Users