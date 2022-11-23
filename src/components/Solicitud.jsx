import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Solicitud extends Component{
    constructor(props){
        super(props);

        this.state = {
            solicitudes: []
        }
    }

    componentDidMount () {
        this.fetchSolicitud();
    }

    fetchSolicitud = async () => {
        let respuesta = await axios.get('http://127.0.0.1:8000/api/adoption');
        this.setState({solicitudes: respuesta.data})
    }

    render () {
        return ( <div>
        <h2>Solicitud de Adopciones</h2>
        <Link className="btn btn-success" to="/createsolicitud">Insertar Solicitud</Link>
        <br/>
        <br/>
        <table className="table">
            <thead>
                <tr>
                    <th>IdSolicitud</th>
                    <th>Razon Solicitud</th>
                    <th>Aprovado</th>
                    <th>idAdoptante</th>
                    <th>idHome</th>
                    <th>idEmpleado</th>
                    <th>idMascota</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {this.state.solicitudes.map(solicitud=>{
                    return (<tr>
                        <td>{solicitud.idAdoptionApplication}</td>
                        <td>{solicitud.adoptionReason}</td>
                        <td>{solicitud.approved}</td>
                        <td>{solicitud.idAdoptante}</td>
                        <td>{solicitud.idHome}</td>
                        <td>{solicitud.idEmpleado}</td>
                        <td>{solicitud.idMascota}</td>
                        <td><Link className="btn btn-primary" to={`/edithsolicitud/${solicitud.idAdoptionApplication}`}>Editar</Link>
                        <Link className="btn btn-danger" to={`/deletesolicitud/${solicitud.idAdoptionApplication}`}>Eliminar</Link></td>
                    </tr>)
                })}
            </tbody>
        </table>
        </div>
        )
    }

}