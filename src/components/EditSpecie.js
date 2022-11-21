import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api'

const EditSpecies = () => {
    const [idEspecie, setID] = useState('')
    const [nombre, setName] = useState('')
    const [raza, setRace] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            idEspecie: idEspecie,
            nombre: nombre,
            raza: raza
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setID(response.data.idEspecie)
            setName(response.data.nombre)
            setRace(response.data.raza)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Edit Specie</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>idEspecie</label>
                <input 
                    value={idEspecie}
                    onChange={ (e)=> setID(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
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
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditSpecies