import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/home'

const CreateCard = () => {
    const [nombre, setName] = useState('')
    const [dirección, setAddress] = useState('')
    const [teléfono, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nombre: nombre, dirección: dirección,teléfono: teléfono,email:email})
        navigate('/')
    }
    
  return (
    <div>
        <h3>Nuevo Refugio</h3>
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
                <label className='form-label'>address</label>
                <input 
                    value={dirección}
                    onChange={ (e)=> setAddress(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
    
            <div className='mb-3'>
                <label className='form-label'>Phone</label>
                <input 
                    value={teléfono}
                    onChange={ (e)=> setPhone(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>email</label>
                <input 
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateCard