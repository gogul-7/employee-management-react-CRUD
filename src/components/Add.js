import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import Employee from '../Employee'
import { useNavigate } from 'react-router-dom';

function Add() {

    const [empName,setName]=useState('')
    const [empDesg,setDesg]=useState('')
    const [empSalary,setSalary]=useState(0)

    const navigate=useNavigate()
        
    const hanldeSubmit = ((event)=>{
        event.preventDefault()

        const ids = uuid()
        let uniqueId = ids.slice(0,8)
        
        let salary = Number(empSalary)

        Employee.push({
          empId:uniqueId,
          empName,
          empDesg,
          empSalary:salary
    })
    navigate('/')
        }  )
  return (
    <>
        <div>
            <h1 className='text-center mt-5'>Add an Employee</h1>
    
        </div>
        <div style={{marginInlineStart:'400px'}} className='mt-5 w-50 text-center'>
            <Form className='border border-2 p-4'>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="email" placeholder="Enter Employee Name" 
              onChange={(event)=>setName(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDesg">
              <Form.Control type="email" placeholder="Enter Employee Designation" 
              onChange={(event)=>setDesg(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Control type="email" placeholder="Enter Employee Salary" 
              onChange={(event)=>setSalary(event.target.value)}/>
            </Form.Group>
            <Button onClick={(event)=>hanldeSubmit(event)} variant="btn btn-outline-primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
    </>
  )
}

export default Add