import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DialogScreen from './DialogScreen'

const endpoint = 'http://localhost:8000/api'

const ShowVaccines = () => {

    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    const [ vaccine, setVaccine] = useState( [] )
    useEffect( () => {
        getAllVaccines()
    }, [])

    const getAllVaccines = async () => {
        const response = await axios.get(`${endpoint}/vaccine`)
        setVaccine(response.data)
        console.log(response.data);
    }

    const deleteVaccine = async (id) => {
        console.log(id);
        await axios.delete(`${endpoint}/vaccine/${id}`)
        getAllVaccines()
        setDisplayConfirmationModal(false)
    }

    const showDeleteModal = (id) => {
        setId(id);
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
        <Link to="/createVaccine" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID vaccine</th>
                        <th>Name</th>
                        <th>Illness</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { vaccine.map( (vaccine) => (
                        <tr key={vaccine.id}>
                            <td> {vaccine.idVacuna} </td> 
                            <td> {vaccine.nombre} </td>
                            <td> {vaccine.enfermedad} </td>
                            <td>
                                <Link to={`/vaccine/edit/${vaccine.idVacuna}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=> showDeleteModal(vaccine.idVacuna) } className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <div><DialogScreen showModal={displayConfirmationModal} confirmModal={deleteVaccine} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  /></div>
    </div>
  )
}

export default ShowVaccines