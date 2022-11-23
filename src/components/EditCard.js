import axios from "axios";
import React, {useState} from "react";
import { useNavigate, useParams  } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/home'


const EditCard = () => {
    const [nombre, setName] = useState('')
    const [dirección, setAddress] = useState('')
    const [teléfono, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}/${id}`, {
            nombre: nombre,
            dirección:dirección,
            teléfono:teléfono,
            email:email
        })
        navigate('/')
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
        <h3>Edit Card</h3>
        <form onSubmit={update}>
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
                <label className='form-label'>phone</label>
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
            <button type='submit' className='btn btn-warning'>Editar</button>
        </form>
    </div>
    )
}

export default EditCard