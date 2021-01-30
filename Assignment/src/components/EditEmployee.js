import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';

export default function EditEmployee(props) {
    const history = useHistory()
    const [name, setName] = useState(props.match.params.name)
    const [designation, setDesignation] = useState(props.match.params.designation)
    const [salary, setSalary] = useState(props.match.params.salary)

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onDesignationChange = (e) =>{
        setDesignation(e.target.value)
    }

    const onSalaryChange = (e)=>{
        setSalary(e.target.value)
    }

    const editEmployee = () =>{
        props.editEmployee({id: Number(props.match.params.id), Name: name, Designation: designation, Salary: salary})
        history.push('/')
    }
  
    console.log(name, designation, salary);

    return (
        <div>
        <Container>
        
        <Row>
            <Col xs="4"></Col>
            <Col xs="3">
            <h2 className="p-3"><Badge color="secondary">Update Employee Details</Badge></h2>
            <Form className="ml-2" inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 p-2">
                    <Label  className="mr-sm-2">Name</Label>
                    <Input className="ml-5" type="text" placeholder="Name" value={name} onChange={onNameChange} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 p-2">
                    <Label  className="mr-sm-2">Designation</Label>
                    <Input className="ml-1" type="text" placeholder="Designation" value={designation} onChange={onDesignationChange} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 p-2">
                    <Label className="mr-sm-2">Salary</Label>
                    <Input className="ml-5" type="number" placeholder="Salary" value={salary} onChange={onSalaryChange}  />
                </FormGroup>
                <Button className="mt-2 bg-success" onClick={editEmployee}>Save</Button>
            </Form>
            </Col>
            <Col xs="4"></Col>
        </Row>
      
    </Container>
            
        
        </div>
    )
}
