import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DialogScreen from './DialogScreen'

const endpoint = 'http://127.0.0.1:8000/api/home'

const ShowCard = () => {

    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    const [cards, setCards] = useState( [] )
    useEffect ( () => {
        getAllCards()
    }, [])

    const getAllCards = async () => {
        const response = await axios.get(`${endpoint}/cards`)
        setCards(response.data)
        console.log(response.data);
    }

    const deleteCards = async (id) => {
        console.log(id);
        await axios.delete(`${endpoint}/cards/${id}`)
        getAllCards()
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
                <Link to="/createCard" className='btn btn-warning btn-lg mt-2 mb-2 text-white'>Crear</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID home</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { cards.map( (cards) => (
                        <tr key={cards.id}>
                            <td> {cards.idHome} </td> 
                            <td> {cards.nombre} </td>
                            <td> {cards.dirección} </td>
                            <td> {cards.teléfono} </td>
                            <td> {cards.email} </td>
                            <td>
                                <Link to={`/edit/${cards.idHome}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={ ()=> showDeleteModal(cards.idHome) } className='btn btn-danger'>Borrar</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <div><DialogScreen showModal={displayConfirmationModal} confirmModal={deleteCards} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  /></div>
        </div>
    )
}

export default ShowCard