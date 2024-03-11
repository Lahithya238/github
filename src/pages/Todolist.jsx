import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { FaTeamspeak } from 'react-icons/fa'
import { Table, Container, Row, Col } from 'react-bootstrap'
import SubHead from '../components/SubHead'

const Todolist = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
    const [somedata, setsomedata] = useState([]);
    const [search, setsearch] = useState("");
    const [filterData, setfilterData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(apiUrl);
                console.log('list', response.data)
                response.data.map((list) => {
                    if (list.completed == true) {
                        list.task = "done";
                    } else {
                        list.task = "not done"
                    }
                })
                setsomedata(response.data);
                setfilterData(response.data)
            } catch (errors) {
                console.log("errors", errors)
            }
        }
        fetchdata();
    }, [])

    const handleSearch = (e) => {
        console.log('searched', e.target.value);
        setsearch(e.target.value)
        if (search.length > 2) {
            const sampleData = somedata.filter(item => item.title.includes(search))
            console.log('sampleData', sampleData);
            setfilterData(sampleData);
        } else {
            setfilterData(somedata)
        }

    }

    const handleSelect = (e) => {
        console.log('selectdata', e.target.value)
        const selectedData = somedata.filter((items) => {
            console.log("selectedvalue", items.completed)
            return items.task === e.target.value
        })
        if (e.target.value !== "") {
            setfilterData(selectedData)
        } else {
            setfilterData(somedata)
        }

    }

    const handleDelete = (todoitems) => {
        console.log("data", todoitems)
        const deletedData = somedata.filter((items) => {
            return items.title !== todoitems.title
        })
        console.log("delteddata", deletedData)
        setsomedata(deletedData);
        setfilterData(deletedData)
    }

    return (
        <div>
            <Header />
            <SubHead pageTitle={'Todolist'} anotherTitle={true} />
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <input class='form-control' type='text' placeholder='enter a text' value={search} onChange={handleSearch} />
                    </Col>
                    <Col md={6}>
                        <select class='form-control' placeholder='select any one' onChange={handleSelect}>
                            <option value={""}>All</option>
                            <option value={'done'}>Completed</option>
                            <option value={'not done'}>InComplete</option>
                        </select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {
                            filterData && filterData.length > 0 ? (
                                <Table stripped>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Task</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filterData.map((items) => (
                                                <tr key={items.id}>
                                                    <td>{items.id}</td>
                                                    <td>{items.title}</td>
                                                    <td>{items.completed === true ? "completed" : "Incomplete"}</td>
                                                    <td><button onClick={() => handleDelete(items)}>Delete</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            ) : "data not found"
                        }

                    </Col>
                </Row>




            </Container>

        </div>
    )
}

export default Todolist