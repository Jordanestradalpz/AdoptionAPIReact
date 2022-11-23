import { Component } from "react";
import axios from "axios";

import withRouter from "../withRouter";

class EdithSolicitud extends Component{
    constructor(props){
        super(props);

        this.state = {
            idAdoptionApplication:0,
            adoptionReason:"",
            approved:0,
            idAdoptante:0,
            idHome:0,
            idEmpleado:0,
            idMascota:0
        }
    }

    componentDidMount(){
        this.listMascota(this.props.idAdoption);
    }

    listMascota = async (idAdoptionApplication) => {
        let respuesta = await axios.get(`http://127.0.0.1:8000/api/adoption/${idAdoptionApplication}`);

        this.setState({idAdoptionApplication: respuesta.data.idAdoptionApplication})
        this.setState({adoptionReason: respuesta.data.adoptionReason})
        this.setState({approved: respuesta.data.approved})
        this.setState({idAdoptante: respuesta.data.idAdoptante})
        this.setState({idHome: respuesta.data.idHome})
        this.setState({idEmpleado: respuesta.data.idEmpleado})
        this.setState({idMascota: respuesta.data.idMascota})
    }

    hadlerRazon = event =>{
        this.setState({adoptionReason: event.target.value})
    }

    hadlerApproved = event =>{
        this.setState({approved: event.target.value})
    }

    hadlerAdoptante = event =>{
        this.setState({idAdoptante: event.target.value})
    }

    hadlerHome = event =>{
        this.setState({idHome: event.target.value})
    }

    hadlerEmpleado = event =>{
        this.setState({idEmpleado: event.target.value})
    }

    hadlerMascota = event =>{
        this.setState({idMascota: event.target.value})
    }

    hadlerSubmit = event =>{
        this.updateSolicitud();
        event.preventDefault();
    }

    updateSolicitud = async () => {
        let respuesta = await axios.put(`http://127.0.0.1:8000/api/adoption/${this.state.idAdoptionApplication}`,this.state);
        if(respuesta.status===200){
            window.location.href = "http://localhost:3000/solicitudes";
        }else{
            alert("Error al Editar")
        }
    }

    render(){
        return (<form onSubmit={this.hadlerSubmit}>
            <div className="mb-3">
            <label className="form-label">Razon Solicitud</label>
            <input type="text" className="form-control" value={this.state.adoptionReason} onChange={this.hadlerRazon}></input>
            </div>

            <div className="mb-3">
            <label className="form-label">Aprovado</label>
            <input type="number" className="form-control" value={this.state.approved} onChange={this.hadlerApproved}></input>
            </div>
            
            <div className="mb-3">
            <label className="form-label">Adoptante</label>
            <input type="text" className="form-control" value={this.state.idAdoptante} onChange={this.hadlerAdoptante} ></input>
            </div>

            <div className="mb-3">
            <label className="form-label">Home</label>
            <input type="text" className="form-control" value={this.state.idHome} onChange={this.hadlerHome}></input>
            </div>
            
            <div className="mb-3">
            <label className="form-label">Empleado</label>
            <input type="text" className="form-control" value={this.state.idEmpleado} onChange={this.hadlerEmpleado}></input>
            </div>
            
            <div className="mb-3">
            <label className="form-label">Mascota</label>
            <input type="text" className="form-control"value={this.state.idMascota} onChange={this.hadlerMascota}></input>
            </div>

            <button type="submit" className="btn btn-primary">ACTUALIZAR</button>
        </form>
        )
    }
}

export default withRouter(EdithSolicitud);