import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from '../Employee'
import { useNavigate } from 'react-router-dom';

function Edit() {

    const [empId,setId]=useState('')
    const [empName,setName]=useState('')
    const [empDesg,setDesg]=useState('')
    const [empSalary,setSalary]=useState(0)

    const navigate=useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem('empId'))
        setName(localStorage.getItem('empName'))
        setDesg(localStorage.getItem('empDesg'))
        setSalary(JSON.parse(localStorage.getItem('empSalary')))
    },[])

    let index =  Employee.map((item)=>item.empId).indexOf(empId)
    console.log(index);

    const handleUpdate=(event)=>{
        event.preventDefault()
       let emp=Employee[index] 
        emp.empName=empName
        emp.empSalary=empSalary
        emp.empDesg=empDesg
        navigate('/')
    }
  return (
    <>
        <div>
            <h1 className='text-center mt-5'>Update an Employee</h1>
    
        </div>
        <div style={{marginInlineStart:'400px'}} className='mt-5 w-50 text-center'>
            <Form className='border border-2 p-4'>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="email" value={empName} 
              onChange={(event)=>{setName(event.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDesg">
              <Form.Control type="email" value={empDesg}  
              onChange={(event)=>{setDesg(event.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Control type="email" value={empSalary} 
              onChange={(event)=>{setSalary(event.target.value)}}/>
            </Form.Group>
            <Button onClick={(event)=>handleUpdate(event)} variant="btn btn-outline-primary" type="submit">
              Update
            </Button>
          </Form>
        </div>
    </>
  )
}

export default Edit