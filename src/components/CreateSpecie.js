import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/species'

const CreateSpecie = () => {
    const [nombre, setName] = useState('')
    const [raza, setRace] = useState('')
    
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nombre: nombre, raza: raza})
        navigate('/showSpecies')
    }
    
  return (
    <div>
        <h3>Create Specie</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={nombre}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Race</label>
                <input 
                    value={raza}
                    onChange={ (e)=> setRace(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Save</button>
        </form>
    </div>
  )
}

export default CreateSpecie