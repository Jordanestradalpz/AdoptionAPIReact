import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/users'

const CreateUser = () => {
    const [nombre, setName] = useState('')
    const [apellido, setLastname] = useState('')
    const [telefono, setPhonenumber] = useState('')
    const [edad, setAge] = useState('')
    const [sexo, setSex] = useState('')
    const [idHome, setIdHome] = useState('')

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nombre: nombre, apellido:apellido,telefono:telefono,edad:edad,sexo:sexo,idHome:idHome})
        navigate('/')
    }
    
  return (
    <div>
        <h3>Nuevo Usuario</h3>
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
                <label className='form-label'>Last Name</label>
                <input 
                    value={apellido}
                    onChange={ (e)=> setLastname(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
    
            <div className='mb-3'>
                <label className='form-label'>Phone</label>
                <input 
                    value={telefono}
                    onChange={ (e)=> setPhonenumber(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Age</label>
                <input 
                    value={edad}
                    onChange={ (e)=> setAge(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Genre</label>
                <input 
                    value={sexo}
                    onChange={ (e)=> setSex(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Id home</label>
                <input 
                    value={idHome}
                    onChange={ (e)=> setIdHome(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateUser