import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowSpecies = () => {

    const [species, setSpecies] = useState( [] )
    useEffect ( () => {
        getAllSpecies()
    }, [])

    const getAllSpecies = async () => {
        const response = await axios.get(`${endpoint}/species`)
        setSpecies(response.data)
    }

    const deleteSpecies = async (id) => {
        await axios.delete(`${endpoint}/species/${id}`)
        getAllSpecies()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to={`/create`} className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
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
                    { species.map( (species) => (
                        <tr key={species.id}>
                            <td> {species.nombre} </td>
                            <td> {species.raza} </td>
                            <td>
                                <Link to={`/edit/species/${species.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=> deleteSpecies(species.id) } className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ShowSpecies