import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowVaccines = () => {

    const [ vaccine, setVaccine] = useState( [] )
    useEffect( () => {
        getAllVaccines()
    }, [])

    const getAllVaccines = async () => {
        const response = await axios.get(`${endpoint}/vaccine`)
        setVaccine(response.data)
    }

    const deleteVaccine = async () => {
        await axios.delete(`${endpoint}/vaccine`)
        getAllVaccines()
    }



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
                        <th>Ilness</th>
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
                                <Link to={`/edit/${vaccine.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=> deleteVaccine(vaccine.id) } className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>

    </div>
  )
}

export default ShowVaccines