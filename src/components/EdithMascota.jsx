
import { Component } from "react";
import axios from "axios";

import withRouter from "../withRouter";

class EdithMascota extends Component{
    constructor(props){
        super(props);

        this.state = {
            idMascota:0,
            nombre:"",
            edad:0,
            color:"",
            peso:0.0,
            sexo:"",
            activo:1,
            idEspecie:0
        }
    }

    componentDidMount(){
        this.listMascota(this.props.idMascota);
    }

    listMascota = async (idMascota) => {
        let respuesta = await axios.get(`http://127.0.0.1:8000/api/pet/${idMascota}`);
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

    hadlerNombre = event =>{
        this.setState({nombre: event.target.value})
    }

    hadlerEdad = event =>{
        this.setState({edad: event.target.value})
    }

    hadlerColor = event =>{
        this.setState({color: event.target.value})
    }

    hadlerPeso = event =>{
        this.setState({peso: event.target.value})
    }

    hadlerSexo = event =>{
        this.setState({sexo: event.target.value})
    }

    hadlerEspecie = event =>{
        this.setState({idEspecie: event.target.value})
    }

    hadlerSubmit = event =>{
        this.updateMascota();
        event.preventDefault();
    }

    updateMascota = async () => {
        let respuesta = await axios.put(`http://127.0.0.1:8000/api/pet/${this.state.idMascota}`,this.state);
        if(respuesta.status===200){
            window.location.href = "http://localhost:3000/mascotas";
        }else{
            alert("Error al Editar")
        }
    }

    render(){
        return (<form onSubmit={this.hadlerSubmit}>
            <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" value={this.state.nombre} onChange={this.hadlerNombre}></input>
            </div>

            <div className="mb-3">
            <label className="form-label">Edad</label>
            <input type="number" className="form-control" value={this.state.edad} onChange={this.hadlerEdad}></input>
            </div>
            
            <div className="mb-3">
            <label className="form-label">Color</label>
            <input type="text" className="form-control" value={this.state.color} onChange={this.hadlerColor} ></input>
            </div>

            <div className="mb-3">
            <label className="form-label">Peso</label>
            <input type="number" className="form-control" value={this.state.peso} onChange={this.hadlerPeso}></input>
            </div>
            
            <div className="mb-3">
            <label className="form-label">Sexo</label>
            <input type="text" className="form-control" value={this.state.sexo} onChange={this.hadlerSexo}></input>
            </div>
            
            <div className="mb-3">
            <label className="form-label">Especie</label>
            <input type="number" className="form-control"value={this.state.especie} onChange={this.hadlerEspecie}></input>
            </div>

            <button type="submit" className="btn btn-primary">Editar</button>
        </form>
        )
    }
}

export default withRouter(EdithMascota);