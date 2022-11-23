/* eslint-disable eqeqeq */
import { Component } from "react";
import axios from "axios";

export default class CreateMascota extends Component{
    constructor(props){
        super(props);

        this.state = {
            nombre:"",
            edad:0,
            color:"",
            peso:0,
            sexo:"",
            activo:1,
            idEspecie:0
        }
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
        this.createMascota();
        event.preventDefault();
    }

    createMascota = async () => {       
        let respuesta = await axios.post('http://127.0.0.1:8000/api/pet',this.state).catch(function (e){alert("Error al Guardar")});
        
        if(respuesta.status==200){
            window.location.href = "http://localhost:3000/mascotas";
        }
    }

    render(){
        return(
            <form onSubmit={this.hadlerSubmit}>
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
                <input type="number" className="form-control"value={this.state.idEspecie} onChange={this.hadlerEspecie}></input>
                </div>

                <button type="submit" className="btn btn-primary">INSERTAR</button>
            </form>
        )
    }
}