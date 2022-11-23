import axios from "axios";
import React, {useState} from "react";
import { useNavigate, useParams  } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/vaccine'

const EditVaccine = () => {
    const [nombre, setName] = useState('')
    const [enfermedad, setIllness] = useState('')
    const navigate = useNavigate()
    const {idVaccine} = useParams()

    const updateVaccine = async (e) => {
        e.preventDefault()
        console.log(endpoint);
        await axios.put(`${endpoint}/${idVaccine}`, {
            nombre: nombre,
            enfermedad: enfermedad
        })
        navigate('/ShowVaccines')
    }
    
/*    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${idEspecie}`)
            setName(response.data.nombre)
            setRace(response.data.raza)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )*/

    return (
        <div>
        <h3>Edit Vaccine</h3>
        <form onSubmit={updateVaccine}>
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
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditVaccine