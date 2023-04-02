import React from 'react'
import Table from 'react-bootstrap/Table';
import Employee from '../Employee'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    const userDelete = (empId)=>{
      let index =  Employee.map((item)=>item.empId).indexOf(empId)
      Employee.splice(index,1)
      navigate('/')
    }

    const userEdit = (empId,empName,empDesg,empSalary)=>{
      localStorage.setItem("empId",empId)
      localStorage.setItem("empName",empName)
      localStorage.setItem("empDesg",empDesg)
      localStorage.setItem("empSalary",empSalary)
    }
  return (
    <>
        <h1 className='text-center mt-5'>List of Employee&nbsp;&nbsp;&nbsp;
        <Link to={'/Add'}><button className='btn btn-outline-success'>Add&nbsp;<i class="fa-solid fa-user-plus"></i></button></Link></h1>
        <div style={{ marginInlineStart: '20rem',marginTop:'3rem' }}>
            <Table style={{ width: '900px' }} striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Empolyee Name</th>
                  <th>Employee Designation</th>
                  <th>Employee Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                    Employee && Employee.length>0?
                    Employee.map(emp=>(
                  <tr>
                        <td>{emp.empName}</td>
                        <td>{emp.empDesg}</td>
                        <td>{emp.empSalary}</td>
                        <td>
                            <Link to={'/edit'}><button onClick={()=>userEdit(emp.empId,emp.empName,emp.empDesg,emp.empSalary)} className='btn btn-outline-light'>&nbsp;<i class="fa-solid fa-user-pen"></i></button>&nbsp;&nbsp;</Link >
                            <button onClick={()=>userDelete(emp.empId)} className='btn btn-outline-light'>&nbsp;<i class="fa-solid fa-user-xmark"></i></button>
                        </td>
                  </tr>
                    ))
                    :"No data to Display"
                }
                </tbody>
              
            </Table>
        </div>
    </>
  )
}

export default Home