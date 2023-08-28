import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DialogScreen from './DialogScreen'


const endpoint = 'http://localhost:8000/api';

const ShowEmployee = () => {
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null)

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
    setDisplayConfirmationModal(false)
  }

  const showDeleteModal = (idEmpleado) => {
    setId(idEmpleado);
    setDeleteMessage(`Are you sure you want to delete the registry?`);
    setDisplayConfirmationModal(true);
  };
 
  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  return (
    <div>
              <h2>Employee</h2>
        <Link to="/employee/create" className='btn btn-success text-white'>Crear Empleado</Link>
        <br />
        <br />
        <table className='table'>
            <thead>
                <tr>
                    <th>idEmpleado</th>
                    <th>idUsuario</th>
                    <th>activo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { employee.map( (employee) => (
                    <tr>
                        <td> {employee.idEmpleado} </td>    
                        <td> {employee.idUsuario} </td>    
                        <td> {employee.activo} </td>    
                        <td>
                            <Link to={`/employee/edit/${employee.idEmpleado}`} className='btn btn-outline-warning'>Editar</Link>
                            <button onClick={ ()=>showDeleteModal(employee.idEmpleado) } className='btn btn-outline-danger'>Eliminar</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
        <div><DialogScreen showModal={displayConfirmationModal} confirmModal={deleteEmployee} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  /></div>
    </div>
  )
}

export default ShowEmployee