import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



const endpoint=`http://localhost:8000/api`

const ShowCards=()=>{
const [cards, setCards]=useState( [] )


useEffect (()=>{
    getAllCards()
})

    const getAllCards= async () => {
const response= await axios.get(`${endpoint}/cards`)     
setCards(response)
    }

    const deleteCard= async (id)=>{

axios.delete(`${endpoint}/cards/${id}`)
    
getAllCards()

    }
    return (
    <div>
       <div className='d/grid gap-2'>
<link to="/create" className='btn btn-warning btn-lg mt-2 mb-2 text-black'>Create</link>
    </div>
<table className='table table-striped'>
<thead className='bg-Warning text-black'>
    <tr>
        <th>name</th>
        <th>address</th>
        <th>phone</th>
        <th>email</th>
    </tr>

</thead>
<tbody>
    {cards.map ((card)=>(
<tr key={card.id}>
<td>{card.name}</td>
<td>{card.address}</td>
<td>{card.phone}</td>
<td>{card.email}</td>
<td>
    <link to={`/edit/${card.id}`} className='btn btn-warning'>Editar</link>
    <button onClick={()=>deleteCard(card.id)} className='btn btn-danger'>Delete</button>
</td>
</tr>
    )) }
</tbody>
</table>
  
    </div>
    )
}
