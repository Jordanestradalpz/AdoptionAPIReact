import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowEmployee = () => {
  const [ employee, setEmployee ] = useState( [] )

  useEffect ( ()=> {
      getAllEmployee()
  }, [])

  const getAllEmployee = async () => {
    const response = await axios.get(`${endpoint}/employee`)
    setEmployee(response.data)
    //console.log(response.data)
  }

  const deleteEmployee = async (id) => {
    await axios.delete(`${endpoint}/employee/${id}`)
    getAllEmployee()
  }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/employee/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>idEmpleado</th>
                    <th>idUsuario</th>
                    <th>activo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { employee.map( (employee) => (
                    <tr key={employee.id}>
                        <td> {employee.idEmpleado} </td>    
                        <td> {employee.idUsuario} </td>    
                        <td> {employee.activo} </td>    
                        <td>
                            <Link to={`/edit/${employee.idEmpleado}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteEmployee(employee.idEmpleado) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowEmployee