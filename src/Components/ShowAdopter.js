import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowAdopter = () => {
  const [ adopter, setAdopters ] = useState( [] )

  useEffect ( ()=> {
      getAllAdopters()
  }, [])

  const getAllAdopters = async () => {
    const response = await axios.get(`${endpoint}/adopter`)
    setAdopters(response.data)
    //console.log(response.data)
  }

  const deleteAdopter = async (id) => {
    await axios.delete(`${endpoint}/adopter/${id}`)
    getAllAdopters()
  }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/adopter/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>idAdopter</th>
                    <th>idUsuario</th>
                    <th>activo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { adopter.map( (adopter) => (
                    <tr key={adopter.idAdopter}>
                        <td> {adopter.idAdopter} </td>    
                        <td> {adopter.idUsuario} </td>    
                        <td> {adopter.activo} </td>    
                        <td>
                            <Link to={`/edit/${adopter.idAdopter}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteAdopter(adopter.idAdopter) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowAdopter