import { Component } from "react";
import axios from "axios";
import withRouter from "../withRouter";
import { Link } from "react-router-dom";

class DeleteMascota extends Component{
    constructor(props){
        super(props);

        this.state = {
            idMascota:0,
            nombre:"",
            edad:0,
            color:"",
            peso:0.0,
            sexo:"",
            activo:0,
            idEspecie:0
        }
    }

    componentDidMount(){
        this.listMascota(this.props.idMascota);
    }

    listMascota = async (idMascota) => {
        let respuesta = await axios.get(`http://127.0.0.1:8000/api/pet/${idMascota}`);
        console.log(respuesta.data);
        respuesta.data.map(mascota=>{
            return(
                this.setState({idMascota: mascota.idMascota}),
                this.setState({nombre: mascota.nombre}),
                this.setState({edad: mascota.edad}),
                this.setState({color: mascota.color}),
                this.setState({peso: mascota.peso}),
                this.setState({sexo: mascota.sexo}),
                this.setState({activo: mascota.activo}),
                this.setState({idEspecie: mascota.idEspecie})
            )
        })
    }

    hadlerSubmit = event =>{
        this.deleteMascota();
        event.preventDefault();
    }

    deleteMascota = async () => {
        let respuesta = await axios.delete(`http://127.0.0.1:8000/api/pet/${this.state.idMascota}`);
        if(respuesta.status===200){
            window.location.href = "http://localhost:3000/mascotas";
        }else{
            alert("Error al Eliminar")
        }
    }

    render(){
        return(
        <div>
            <h3>¿Estas seguro de eliminar la siguiente mascota?</h3><br/>
            <form onSubmit={this.hadlerSubmit}>
                <div className="row">
                    <div className="col-sm-1">Nombre:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.nombre}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Edad:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.edad}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Color:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.color}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Peso:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.peso}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Sexo:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.sexo}></input></div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-1">Activo:</div>
                    <div className="col-sm-3"><input type="text" value={this.state.activo}></input></div>
                </div><br/>
                <button type="submit" className="btn btn-danger">SI</button>
                <Link className="btn btn-success m-3" to="/mascotas">NO</Link>
            </form>
        </div>
        )
    }
}

export default withRouter(DeleteMascota);