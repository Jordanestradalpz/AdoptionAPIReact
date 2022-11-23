import axios from "axios";
import React, {useState} from "react";
import { useNavigate, useParams  } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/users'

const EditUser = () => {
    const [nombre, setName] = useState('')
    const [apellido, setLastname] = useState('')
    const [telefono, setPhonenumber] = useState('')
    const [edad, setAge] = useState('')
    const [sexo, setSex] = useState('')
    const [idHome, setIdHome] = useState('')
    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}/${id}`, {
            nombre: nombre,
            apellido:apellido,
            telefono:telefono,
            edad:edad,
            sexo:sexo,
            idHome:idHome
        })
        navigate('/')
    }
    
/*    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${idEspecie}`)
            setName(response.data.nombre)
            setLastname(response.data.apellido)
            setPhonenumber(response.data.telefono)
            setAge(response.data.edad)
            setSex(response.data.sexo)
            setIdHome(response.data.idHome)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )*/

    return (
        <div>
        <h3>Edit Users</h3>
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
                <label className='form-label'>idHome</label>
                <input 
                    value={sexo}
                    onChange={ (e)=> setIdHome(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar cambios</button>
        </form>
    </div>
    )
}

export default EditUser