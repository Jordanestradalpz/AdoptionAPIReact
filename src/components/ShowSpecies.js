import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DialogScreen from './DialogScreen'

const endpoint = 'http://localhost:8000/api'

const ShowSpecies = () => {

    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    const [species, setSpecies] = useState( [] )
    useEffect ( () => {
        getAllSpecies()
    }, [])

    const getAllSpecies = async () => {
        const response = await axios.get(`${endpoint}/species`)
        setSpecies(response.data)
        console.log(response.data);
    }

    const deleteSpecie = async (id) => {
        console.log(id);
        await axios.delete(`${endpoint}/species/${id}`)
        getAllSpecies()
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
                <Link to="/createSpecie" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID Specie</th>
                        <th>Name</th>
                        <th>Race</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { species.map( (cards) => (
                        <tr key={cards.id}>
                            <td> {cards.idEspecie} </td> 
                            <td> {cards.nombre} </td>
                            <td> {cards.raza} </td>
                            <td>
                                <Link to={`/edit/${species.idEspecie}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=> showDeleteModal(species.idEspecie) } className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <div><DialogScreen showModal={displayConfirmationModal} confirmModal={deleteSpecie} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  /></div>
        </div>
    )
}

export default ShowSpecies