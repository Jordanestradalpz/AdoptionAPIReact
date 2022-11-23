import React, {useState} from 'react'
import axios from 'axios'


const endpoint = 'http://localhost:8000/api/adopter'

const CreateAdopter = () => {

    const [idUsuario, setIdUsuario] = useState('')
    const [activo, setActivo] = useState('')


    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {idUsuario: idUsuario, activo: activo})
        window.location.href="http://localhost:3000/adopter"
    }
  return (
    <div>
      <h3>Create new adopter</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
            <label className='form-label'>idUsuario</label>
            <input
                value={idUsuario}
                onChange={(e)=> setIdUsuario(e.target.value)}
                type='text'
                className='form-control'
            />
        </div>
        <div className='mb-3'>
            <label className='form-label'>activo</label>
            <input
                value={activo}
                onChange={(e)=> setActivo(e.target.value)}
                type='text'
                className='form-control'
            />
        </div>
        <button type= 'submit' className='btn btn-primary'> Store</button>
      </form>
    </div>
  )
}

export default CreateAdopter