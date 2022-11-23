import axios from "axios";
import React, {useState} from "react";
import {useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/adopter'

const EditAdopter = () =>{
    const [idUsuario, setIdUsuario] = useState('')
    const [activo, setActivo] = useState('')
    const {id} = useParams()
    
    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}/${id}`, {
            idUsuario: idUsuario,
            activo: activo,
        })
        
        window.location.href="http://localhost:3000/adopter"
    }

   /* useEffect( () => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${idAdopter}`)
            setAdopter(response.data.adopter)
            setIdUsuario(response.data.idUsuario)
            setActivo(response.data.activo)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[])*/

    return (
        <div>
        <h3>Edit Adopter</h3>
        <form onSubmit={update}>
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

export default EditAdopter
