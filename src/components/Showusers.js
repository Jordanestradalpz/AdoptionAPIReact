import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DialogScreen from './DialogScreen'

const endpoint = 'http://localhost:8000/users'

const ShowUsers = () => {

    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    const [user, setUsers] = useState( [] )
    useEffect ( () => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const response = await axios.get(`${endpoint}/users`)
        setUsers(response.data)
        console.log(response.data);
    }

    const deleteUsers = async (id) => {
        console.log(id);
        await axios.delete(`${endpoint}/users/${id}`)
        getAllUsers()
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
                <Link to="/createUser" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create new user</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID user</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Genre</th>
                        <th>id Home</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { user.map( (users) => (
                        <tr key={users.id}>
                            <td> {users.idUsuario} </td> 
                            <td> {users.nombre} </td>
                            <td> {users.apellido} </td>
                            <td> {users.telefono} </td>
                            <td> {users.edad} </td>
                            <td> {users.sexo} </td>
                            <td> {users.idHome} </td>
                            <td>
                                <Link to={`/edit/${users.idUsuario}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=> showDeleteModal(users.idUsuario) } className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <div><DialogScreen showModal={displayConfirmationModal} confirmModal={deleteUsers} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  /></div>
        </div>
    )
}

export default ShowUsers