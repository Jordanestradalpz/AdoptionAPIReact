/* eslint-disable eqeqeq */
import { Component } from "react";
import axios from "axios";

export default class CreateSolicitud extends Component{
    constructor(props){
        super(props);

        this.state = {
            adoptionReason:"",
            approved:0,
            idAdoptante:0,
            idHome:0,
            idEmpleado:0,
            idMascota:0
        }
    }

    hadlerAdopcionReason = event =>{
        this.setState({adoptionReason: event.target.value})
    }

    hadlerApproved = event =>{
        this.setState({approved: event.target.value})
    }

    hadlerIdAdoptante = event =>{
        this.setState({idAdoptante: event.target.value})
    }

    hadlerIdHome = event =>{
        this.setState({idHome: event.target.value})
    }

    hadlerIdEmpleado = event =>{
        this.setState({idEmpleado: event.target.value})
    }

    hadlerIdMascota = event =>{
        this.setState({idMascota: event.target.value})
    }

    hadlerSubmit = event =>{
        this.createSolicitud();
        event.preventDefault();
    }

    createSolicitud = async () => {
        let respuesta = await axios.post('http://127.0.0.1:8000/api/adoption',this.state);
        if(respuesta.status==200){
            window.location.href = "http://localhost:3000/Solicitudes";
        }else{
            alert("Error al Guardar")
        }
    }

    render(){
        return(
            <form onSubmit={this.hadlerSubmit}>
                <div className="mb-3">
                <label className="form-label">Razon Solicitud</label>
                <input type="text" className="form-control" value={this.state.adoptionReason} onChange={this.hadlerAdopcionReason}></input>
                </div>

                <div className="mb-3">
                <label className="form-label">Aprovado</label>
                <input type="number" className="form-control" value={this.state.approved} onChange={this.hadlerApproved}></input>
                </div>
                
                <div className="mb-3">
                <label className="form-label">Adoptante</label>
                <input type="number" className="form-control" value={this.state.idAdoptante} onChange={this.hadlerIdAdoptante} ></input>
                </div>

                <div className="mb-3">
                <label className="form-label">Home</label>
                <input type="number" className="form-control" value={this.state.idHome} onChange={this.hadlerIdHome}></input>
                </div>
                
                <div className="mb-3">
                <label className="form-label">Empleado</label>
                <input type="number" className="form-control" value={this.state.idEmpleado} onChange={this.hadlerIdEmpleado}></input>
                </div>
                
                <div className="mb-3">
                <label className="form-label">Mascota</label>
                <input type="number" className="form-control"value={this.state.idMascota} onChange={this.hadlerIdMascota}></input>
                </div>

                <button type="submit" className="btn btn-primary">INSERTAR</button>
            </form>
        )
    }
}