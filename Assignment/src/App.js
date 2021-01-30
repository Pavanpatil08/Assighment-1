import {BrowserRouter, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import { useState } from 'react'

function App() {

  const [ newEmployeeDetails, setNewEmployeeDetails] = useState({})
  const [ editEmployeeDetails, setEditEmployeeDetails] = useState({})
  
  return (
    <div>
      <BrowserRouter>
          <Route path="/" exact render={(props) => { return (<Dashboard addEmployee={newEmployeeDetails} editEmployee={editEmployeeDetails} {...props} />) }} />
          <Route path="/add" exact render={(props) => { return (<AddEmployee addNewEmployee={(employee) => { setNewEmployeeDetails(employee) }}  {...props} />) }}/>
          <Route path="/edit/:id/:name/:designation/:salary" exact render={(props) => { return (<EditEmployee editEmployee={(employee) => { setEditEmployeeDetails(employee) }} {...props} />) }}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
