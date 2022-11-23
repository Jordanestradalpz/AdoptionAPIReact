import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Mascota extends Component{
    constructor(props){
        super(props);

        this.state = {
            mascotas: []
        }
    }

    componentDidMount () {
        this.fetchMascota();
    }

    fetchMascota = async () => {
        let respuesta = await axios.get('http://127.0.0.1:8000/api/pet');
        this.setState({mascotas: respuesta.data})
    }

    render () {
        return ( <div>
        <h2>Mascotas</h2>
        <Link className="btn btn-success" to="/createmascota">Insertar Mascota</Link>
        <br/>
        <br/>
        <table className="table">
            <thead>
                <tr>
                    <th>IdMascota</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Color</th>
                    <th>Peso</th>
                    <th>Sexo</th>
                    <th>Activo</th>
                    <th>Especie</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {this.state.mascotas.map(mascota=>{
                    return (<tr>
                        <td>{mascota.idMascota}</td>
                        <td>{mascota.nombre}</td>
                        <td>{mascota.edad}</td>
                        <td>{mascota.color}</td>
                        <td>{mascota.peso}</td>
                        <td>{mascota.sexo}</td>
                        <td>{mascota.activo}</td>
                        <td>{mascota.idEspecie}</td>
                        <td><Link className="btn btn-primary" to={`/edithmascota/${mascota.idMascota}`}>Editar</Link>
                        <Link className="btn btn-danger" to={`/deletemascota/${mascota.idMascota}`}>Eliminar</Link></td>
                    </tr>)
                })}
            </tbody>
        </table>
        </div>
        )
    }

}