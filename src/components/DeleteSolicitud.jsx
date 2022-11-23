import { Component } from "react";
import axios from "axios";
import withRouter from "../withRouter";
import { Link } from "react-router-dom";

class DeleteSolicitud extends Component{
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
        this.listSolicitud(this.props.idAdoption);
    }

    listSolicitud = async (idAdoptionApplication) => {
        let respuesta = await axios.get(`http://127.0.0.1:8000/api/adoption/${idAdoptionApplication}`);
        this.setState({idAdoptionApplication: respuesta.data.idAdoptionApplication})
        this.setState({adoptionReason: respuesta.data.adoptionReason})
        this.setState({approved: respuesta.data.approved})
        this.setState({idAdoptante: respuesta.data.idAdoptante})
        this.setState({idHome: respuesta.data.idHome})
        this.setState({idEmpleado: respuesta.data.idEmpleado})
        this.setState({idMascota: respuesta.data.idMascota})
    }

    hadlerSubmit = event =>{
        this.deleteSolicitud();
        event.preventDefault();
    }

    deleteSolicitud = async () => {
        let respuesta = await axios.delete(`http://127.0.0.1:8000/api/adoption/${this.state.idAdoptionApplication}`);
        if(respuesta.status===200){
            window.location.href = "http://localhost:3000/solicitudes";
        }else{
            alert("Error al Eliminar")
        }
    }

    render(){
        return(
        <div>
            <h3>Estas Seguro de Eliminar la Siguiente Solicitud</h3><br/>
            <form onSubmit={this.hadlerSubmit}>
                <div className="row">
                    {console.log(this.state.idMascota)}
                    <div className="col-sm-1">Razon:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.adoptionReason}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Aprovado:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.approved}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Adoptante:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.idAdoptante}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Home:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.idHome}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Empleado:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.idEmpleado}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Mascota</div>
                    <div className="col-sm-3"><input type="text" value={this.state.idMascota}></input></div>
                </div><br/>
                <button type="submit" className="btn btn-danger">SI</button>
                <Link className="btn btn-success m-3" to="/solicitudes">NO</Link>
            </form>
        </div>
        )
    }
}

export default withRouter(DeleteSolicitud);