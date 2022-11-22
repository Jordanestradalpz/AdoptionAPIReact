import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/adopter/'

const EditEmployee = () =>{
    const [employee, setEmployee] = useState('')
    const [idUsuario, setIdUsuario] = useState('')
    const [activo, setActivo] = useState('')
    const navigate = useNavigate()
    const {idEmpleado} = useParams()
    
    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${idEmpleado}`, {
            employee:employee,
            idUsuario: idUsuario,
            activo: activo,
        }) 
        navigate('/')
    }

    useEffect( () => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${idEmpleado}`)
            setEmployee(response.data.employee)
            setIdUsuario(response.data.idUsuario)
            setActivo(response.data.activo)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    } ,[])

    return (
        <div>
        <h3>Edit Employee and User</h3>
        <form onSubmit={{update}}>
          <div className='mb-3'>
              <label className='form-label'>idEmpleado</label>
              <input
                  value={employee}
                  onChange={(e)=> setEmployee(e.target.value)}
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
          <button type= 'submit' className='btn btn-primary'> Edit</button>
        </form>
      </div>
    )
}

export default EditEmployee