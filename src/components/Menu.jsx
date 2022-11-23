import { Component } from "react";
import {Link} from 'react-router-dom';

export default class Menu extends Component{

    render () {
        return <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link className="navbar-brand" to="/">CHANCE</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link className="nav-link active" to="/mascotas">Mascotas</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link active" to="/solicitudes">Solicitudes</Link>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link active" href="/adopter" tabindex="-1">Adopter</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/employee" tabindex="-1">Employee</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    }
}