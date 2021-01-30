import { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom'
import Employeelist from '../Employee.json'
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap'

function Dashboard(props) {
  const [employeeList, setEmployeeList] = useState(Employeelist)
  const [tempEmployeeList, setTempEmployeeList] = useState(Employeelist)
  const [searchValue, setSearchValue] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if(Object.keys(props.addEmployee).length !== 0){
      setEmployeeList(e=> [...e, props.addEmployee])
      setTempEmployeeList(e=> [...e, props.addEmployee])
    }
    if(Object.keys(props.editEmployee).length !== 0){
      //Need to write Logic Here
      setEmployeeList(e=> [...e, props.editEmployee])
    }
  }, [props.addEmployee, props.editEmployee])

  const handleDelete =(id)=>{
    setEmployeeList(employeeList.filter(f=> f.id !== id))
    setTempEmployeeList(tempEmployeeList.filter(f=> f.id !== id))
  }

  const handleEdit = (data)=>{
    history.push(`/edit/${data.id}/${data.Name}/${data.Designation}/${data.Salary}`)
  }

  const onChangeSearch = (e)=>{
    setSearchValue(e.target.value)
  }

  const onClickSearch = ()=>{

    if (searchValue.length > 0) {
      setIsSearchActive(true)

      let filteredData = employeeList.filter(item => {
          return item.Name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || item.Designation.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      })
      setEmployeeList([...new Set(filteredData)])
    }
    else {
        alert('Please Enter Something...')
    }
  }

  const onClickSearchCancel = ()=>{
    setSearchValue('')
    setIsSearchActive(false)
    setEmployeeList(tempEmployeeList)
  }

  
  return (
    
    <div>
    <Container> 
    <h1 className="p-1 text-center"><Badge color="secondary">Employee Details</Badge></h1>
      <Row>
        
        <Col xs="6"> <input type="text" className="mt-3 p-1 pb-2" placeholder="Enter Name or Designation" value={searchValue} onChange={onChangeSearch} />
        <button onClick={onClickSearch} className="btn btn-success ml-1" >Search</button>
        {
          isSearchActive ? <button onClick={onClickSearchCancel} className="btn btn-danger ml-1">Cancel</button> : null
        }
        </Col>
        <Col xs="6"> <button className="mt-3 btn btn-secondary text-light float-right"><Link to="/add"> Add Employee</Link></button></Col>
      </Row>
    </Container>
    <Container className="p-3">
      <Table dark>
       <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {
                  employeeList.map((data,key)=> (
                    <tr>
                    <th scope="row">{key+1}</th>
                    <td>{data.Name}</td>
                    <td>{data.Designation}</td>
                    <td>{data.Salary}</td>
                    <td><button onClick={()=> handleEdit(data)}>Edit</button></td>
                   <td> <button onClick={()=> handleDelete(data.id)}>Delete</button></td>
                  </tr>
                    ))
                  }
        </tbody>
    </Table>

    </Container>
    </div>
  );
        }

export default Dashboard
