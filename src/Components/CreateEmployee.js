import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/employee'

const CreateEmployee = () => {
    const [idEmpleado, setIdEmployee] = useState('')
    const [idUsuario, setIdUsuario] = useState('')
    const [activo, setActivo] = useState('')

    const navigate=  useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {idEmpleado: idEmpleado, idUsuario: idUsuario, activo: activo})
        navigate('/')
    }
  return (
    <div>
      <h3>Identify Employee and User</h3>
      <form onSubmit={{store}}>
        <div className='mb-3'>
            <label className='form-label'>idEmpleado</label>
            <input
                value={idEmpleado}
                onChange={(e)=> setIdEmployee(e.target.value)}
                type='text'
                className='form-control'
            />
        </div>
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
        <button type= 'submit' className='btn btn-primary' > Store</button>
      </form>
    </div>
  )
}

export default CreateEmployee