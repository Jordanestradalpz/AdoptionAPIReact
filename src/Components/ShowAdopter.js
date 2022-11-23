import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DialogScreen from './DialogScreen'


const endpoint = 'http://localhost:8000/api';

const ShowAdopter = () => {
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null)

  const [ adopter, setAdopters ] = useState( [] )


  useEffect ( ()=> {
      getAllAdopters()
  }, [])

  const getAllAdopters = async () => {
    const response = await axios.get(`${endpoint}/adopter`)
    setAdopters(response.data)
    console.log(response.data)
  }

  const deleteAdopter = async (id) => {
    await axios.delete(`${endpoint}/adopter/${id}`)
    getAllAdopters()
    setDisplayConfirmationModal(false)
  }

  const showDeleteModal = (idAdoptante) => {
    setId(idAdoptante);
    setDeleteMessage(`Are you sure you want to delete the registry?`);
    setDisplayConfirmationModal(true);
  };
 
  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/adopter/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-hover'>
            <thead className='bg-secondary text-white'>
                <tr>
                    <th>idAdopter</th>
                    <th>idUsuario</th>
                    <th>activo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { adopter.map( (adopter) => (
                    <tr>
                        <td> {adopter.idAdoptante} </td>    
                        <td> {adopter.idUsuario} </td>    
                        <td> {adopter.activo} </td>    
                        <td>
                            <Link to={`/adopter/edit/${adopter.idAdoptante}`} className='btn btn-outline-warning'>Edit</Link>
                            <button onClick={ ()=>showDeleteModal(adopter.idAdoptante) } className='btn btn-outline-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
        <div><DialogScreen showModal={displayConfirmationModal} confirmModal={deleteAdopter} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  /></div>
    </div>
  )
}

export default ShowAdopter