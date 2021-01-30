import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';

export default function AddEmployee(props) {

    const history = useHistory()
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [salary, setSalary] = useState(0)

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onDesignationChange = (e) =>{
        setDesignation(e.target.value)
    }

    const onSalaryChange = (e)=>{
        setSalary(e.target.value)
    }

    const addEmployee = () =>{
        props.addNewEmployee({id: Math.floor(Math.random()*1000),Name: name, Designation: designation, Salary: salary})
        setName('')
        setDesignation('')
        setSalary(0)
        history.push('/')
    }

    const cancelAdd = ()=>{
        history.push('/')
    }

    return (
        <div>
            <Container>
        
        <Row>
            <Col xs="4"></Col>
            <Col xs="3">
            <h2 className="p-3"><Badge color="success">Add Employee Details</Badge></h2>
            <Form className="ml-2" inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 p-2">
                    <Label  className="mr-sm-2">Name</Label>
                    <Input className="ml-5" type="text" placeholder="Name" onChange={onNameChange} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 p-2">
                    <Label  className="mr-sm-2">Designation</Label>
                    <Input className="ml-1" type="text" placeholder="Designation" onChange={onDesignationChange} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 p-2">
                    <Label className="mr-sm-2">Salary</Label>
                    <Input className="ml-5"  type="number" placeholder="Salary" onChange={onSalaryChange}  />
                </FormGroup>
                <Button className="mt-2 bg-primary" onClick={addEmployee}>Save</Button>
                <Button className="mt-2 bg-danger ml-1" onClick={cancelAdd}>Cancel</Button>
            </Form>
            </Col>
            <Col xs="4"></Col>
        </Row>
      
    </Container>
          
        </div>
    )
}
