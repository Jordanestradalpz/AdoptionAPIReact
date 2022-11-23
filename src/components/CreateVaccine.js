import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/vaccine'

const CreateVaccine = () => {
    const [nombre, setName] = useState('')
    const [enfermedad, setIllness] = useState('')
    
    const navigate = useNavigate()

    const storeVaccine = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nombre: nombre, enfermedad: enfermedad})
        navigate('/showVaccines')
    }
    
  return (
    <div>
        <h3>Create Vaccine</h3>
        <form onSubmit={storeVaccine}>
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
                <label className='form-label'>Illness</label>
                <input 
                    value={enfermedad}
                    onChange={ (e)=> setIllness(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Save</button>
        </form>
    </div>
  )
}

export default CreateVaccine